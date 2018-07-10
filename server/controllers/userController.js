import db from '../models';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userController = {};

/*
userController.post = (req, res) => {
    /// check if email is available
    /*if ( db.User.find({ email: req.body.email }) !== "undefined") {
        res.status(500).json({
            message: "email already taken"
        });
    };



    db.User.find({ email: req.body.email }).then( () => {
        res.status(500).json({
            message: "email already taken"
        });
        next();
    }).catch( () => {

        const user = new db.User({
            username,
            password,
            email,
            firstName,
            lastName
        });

        /// if yes, allow to create new user
        const { username, password, email, firstName, lastName } = req.body;
     
    
        user.save().then( (newUser) => {
            res.status(200).json({
                success: true,
                data: newUser
            }).catch( (err) => {
                res.status(500).json({
                    message: err
                });
            });
    
        });

    });

}; */

userController.post = (req, res) => {

    db.User.find({ email: req.body.email })
    .exec()
    .then( (user) => {
        if (user >= 1) {
            res.status(500).json({
                message: "email already taken"
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                const { username, email, firstName, lastName } = req.body;
                if (err) {
                    console.log('fail');
                    res.status(500).json({
                        message: 'err'
                    });
                } else {
                    const user = new db.User({
                        //_id,
                        username,
                        password: hash,
                        email,
                        firstName,
                        lastName
                    });
        
                    user
                    .save()
                    .then( (newUser) => {
                        console.log('user saved');
                        res.status(200).json({
                            success: true,
                            data: newUser
                        });
                    });
        
                }
            });
        };
    });
}

/*
    db.User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user >= 1) {
            res.status(500).json({
                message: 'Email already exists'
            });
        } else {
            

            
                if(err) {
                } else (hash) => {

                }
            });
            



        };
    });
};
*/

export default userController;