const Opportunity = require("../model/opportunity");
const account = require("../model/account");

exports.create = (req, res) => {
  //validate
  if (!req.body.name || !req.body.account || !req.body.amountStage) {
    return res.status(400).send({ message: "Field can not be empty!" });
  }

  const name = req.body.account;
  account
    .findOne({ name })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Account does not exist" });
      }
      const _account = data;
      const opportunity = new Opportunity({
        name: req.body.name,
        account: _account._id,
        amountStage: req.body.amountStage,
      });
      opportunity
        .save()
        .then((data) => {
          return res.status(201).send(data);
        })
        .catch((err) => {
          return res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the Opportunity.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Opportunity.",
      });
    });
};

exports.findAll = (req, res) => {
  Opportunity.find()
    .sort({ name: -1 })
    .populate("account", ["name", "address"])
    .then((opportunity) => {
      res.status(200).send(opportunity);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

/**
 * Find one opportunity
 */
exports.findOne = (req, res) => {
  Opportunity.findById(req.params.id)
    .then((Opportunity) => {
      if (!Opportunity) {
        return res.status(404).send({
          message: "Opportunity not found with id " + req.params.id,
        });
      }
      res.status(200).send(Opportunity);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};