import * as mongoose from 'mongoose'
import { validateCPF } from '../cummon/validators';
import * as bcrypt from 'bcrypt';
import {enviroment} from '../cummon/enviroment';

export interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80,
        minlength: 3
    },
    email:{
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    gender: {
        type: String,
        required: false,
        enum: ['Male', 'Female']
    },
    cpf: {
        type: String,
        required: false,
        validate: {
            validator: validateCPF,
            message: '{PATH}: Invalid CPF ({VALUE})'
        }
    }
});

//user fuction for word this
userSchema.pre('save', function(next){
    const user: User = this;
    if(!user.isModified('password')){
        next();
    }else {
        bcrypt.hash(user.password, enviroment.security.saltRounds)
            .then(hash => {
                user.password = hash;
                next();
            }).catch(next);
    }
});

export const User = mongoose.model<User>('User', userSchema);

