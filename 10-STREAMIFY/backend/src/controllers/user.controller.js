import User from '../models/User.js'

export async function getRecommendedUser(req, res) {
    try {
        const currentUSerId = req.status._id
        const currentUser = req.user;

        const recommendedUsers = await User.find({
            $and: [
                { _id: { $ne: currentUSerId } },
                { $id: { $nin: currentUser.friends } },
                { isOnboarded: true }
            ]
        });
        res.status(200).json(recommendedUsers);
    } catch (error) {
        console.log("Error fetching recommended users:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getMyFriends(req, res) {
    try {
        const user = await User.findById(req.user.id)
            .select("friends")
            .populate("friends",
                "username profilePic nativeLanguage learningLanguage"
            );
        res.status(200).json(user.friends);
    } catch (error) {
        console.log("Error fetching friends:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
