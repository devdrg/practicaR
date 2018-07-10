import db from '../models';

const userController = {};

userController.post = (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;

// validation



const user = new db.User({
    username,
    password,
    email,
    firstName,
    lastName
});

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

}

export default userController;