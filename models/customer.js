const mongoose = require('mongoose');
const Joi = require('joi');

// Create Schema
const customerSchema = new mongoose.Schema({
    isGold: {
        type: Boolean,
        required: true,
        default: false
    },    
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

// Create Class
const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customers) {
    const schema = Joi.object({
        isGold: Joi.boolean().required(),
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required()
    });
    return schema.validate(customers);
}

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;
module.exports.customerSchema = customerSchema;