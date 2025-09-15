const express = require("express");
const router = express.Router();
const {getContacts,
       createContact,
       getContact,
       UpdateContact,
       deleteContact, 
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
router.use(validateToken);
// Before it was in deperate lines but since the endpoint is same to ensure cleaner code we merged it into one 
// GET ALL CONTACTS , CREATE A CONTACT
router.route("/").get(getContacts).post(createContact);
// GET A PARTICULAR CONTACT , UPDATE A CONTACT , DELETE A CONTACT
router.route("/:id").get(getContact).put(UpdateContact).delete(deleteContact);







module.exports = router;


