import mongoose from 'mongoose';

const { Schema } = mongoose;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be 3 characters']},
    email: {
        type: String,
        required: true },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be 5 characters']},
    firstName: {
        type: String,
        required: true },
    firstName: {
        type: String,
        required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
export default User;