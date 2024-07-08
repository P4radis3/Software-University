const Recipe = require('../models/Recipes');
const User = require('../models/User');

exports.create = async (userId, recipeData) => {
    const createdAt = await Recipe.create({ owner: userId, ...recipeData, });
    await User.findByIdAndUpdate(userId, { $addToSet: { createdRecipe: createdAt._id } });
    return createdAt;
};

exports.getAll = () => Recipe.find();
exports.getOne = (recipeId) => Recipe.findById(recipeId);
exports.getOneDetailed = (recipeId) => this.getOne(recipeId).populate('owner').populate('recommendList');
exports.getLatest = () => Recipe.find().sort({ createdAt: -1 }).limit(3);

exports.recommend = async (recipeId, userId) => {
    await Recipe.findByIdAndUpdate(recipeId, { $addToSet: { recommendList: userId } });
    await User.findByIdAndUpdate(userId, { $addToSet: { recommendRecipe: recipeId } });
};
exports.delete = (recipeId) => Recipe.findByIdAndDelete(recipeId);
exports.updateOne = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData, { runValidators: true });

exports.search = (title) => {
    let query = {};
    if (title) { query.title = { $regex: new RegExp(title, 'i') }; }
    return Recipe.find(query);
};
