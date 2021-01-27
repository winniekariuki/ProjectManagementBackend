const Account = require("../model/account");
const account = require("../model/account");

exports.create = (req, res) => {
    //validate
    if (!req.body.name || !req.body.address ) {
      res.status(400).send({ message: "Field can not be empty!" });
      return;
    }
  
    // Create an Account
    const account = new Account({
      name: req.body.name,
      address: req.body.address,
    });
    //check whether account exists in the database
    Account
    .findOne({ name: req.body.name })
    .then((data) => {
      if (data) {
        return res.status(200).send({ message: "Account already exist" });
      }
    })
    // Save Account in the database
    account
      .save(account)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Account."
        });
      });
  };

/** 
 * Find all Accounts
 */
exports.findAll = (req, res) => {
  account.find()
    .sort({ name: -1 })
    .then((accounts) => {
      res.status(200).send(accounts);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

/**
 * Find one account
 */
exports.findOne = (req, res) => {
  account.findById(req.params.id)
    .then((account) => {
      if (!account) {
        return res.status(404).send({
          message: "account not found with id " + req.params.id,
        });
      }
      res.status(200).send(account);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};