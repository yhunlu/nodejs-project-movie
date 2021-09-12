const { User } = require('../../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');

describe('user.generateAutToken', () => {  
    it('should return a valid token', () => {
        const payload = { 
            _id: new mongoose.Types.ObjectId().toHexString(), 
            isAdmin: true 
        };
        const user = new User(payload);
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token, config.get('jwtprivatekey'));
        expect(decoded).toMatchObject(payload);
    });
});