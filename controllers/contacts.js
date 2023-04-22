const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const allContacts = await contacts.listContacts();
  res.json(allContacts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const contactById = await contacts.getContactById(id);
  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.json(contactById);
};

const add = async (req, res) => {
  const oneContact = await contacts.addContact(req.body);
  res.status(201).json(oneContact);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const updateContact = await contacts.updateById(id, req.body);
  if (!updateContact) {
    throw HttpError(404, "Not found");
  }
  res.json(updateContact);
};

const removeById = async (req, res) => {
  const { id } = req.params;
  const deleteContact = await contacts.removeContact(id);
  if (!deleteContact) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  removeById: ctrlWrapper(removeById),
};
