const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/booksdb');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function runQueryExamples() {

    try {
        // Create a user
        const newUser = await User.create({
            name: 'John Doe',
            email: 'user@example.com',
            password: 'password123',
            isAdmin: false
        });
        console.log('User Created:', newUser);

        // Find all users
        const users = await User.find();
        console.log('All Users:', users);

        // Find a user by email
        const userByEmail = await User.findOne({ email: 'user@example.com' });
        console.log('User by Email:', userByEmail);

        if (userByEmail) {
            // Update a user
            const updatedUser = await User.findByIdAndUpdate(
                userByEmail._id,
                { isAdmin: true },
                { new: true }
            );
            console.log('Updated User:', updatedUser);

            // Delete a user
            const deletedUser = await User.findByIdAndDelete(userByEmail._id);
            console.log('Deleted User:', deletedUser);
        } else {
            console.log('User not found, skipping update/delete');
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection when done
        mongoose.connection.close();
    }
}

runQueryExamples();
