// Bookmark Model
const mongoose = require("mongoose");
const bookmark = new mongoose.Schema({
    Userid: {
                type: mongoose.Types.ObjectId,
                ref:"User",
        },
    newsid:{ 
        type: mongoose.Types.ObjectId,
        ref:"news",
        }
});

module.exports = mongoose.model("bookmark",bookmark);