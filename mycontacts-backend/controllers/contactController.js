//@ desc Get all contacts 
// @route GET/api/contacts
//@acess public 

const getContacts = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
};

//@ desc Create new contacts 
// @route POST/api/contacts
//@acess public 

const createContact = (req,res)=>{
    console.log("the request body is", req.body);
    res.status(201).json({message: "Create contact"});
}
//@ desc Get indivisual contacts 
// @route GET/api/contacts/:id
//@acess public 

const getContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
}

//@ desc Update  contact 
// @route PUT/api/contacts/:id
//@acess public 

const UpdateContact = (req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
}

//@ desc Delete contact 
// @route DELETE/api/contacts/:id
//@acess public 

const deleteContact =(req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
}

module.exports ={
    getContacts,
    createContact,
    getContact,
    UpdateContact,
    deleteContact
};
