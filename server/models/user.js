import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be 3 characters']},
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be 5 characters']},
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
export default User;