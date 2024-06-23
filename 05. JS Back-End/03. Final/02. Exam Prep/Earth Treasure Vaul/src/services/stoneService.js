const Stone = require('../models/Stone');

exports.create = (stoneData) => Stone.create(stoneData);

exports.getAll = () => Stone.find().lean();

exports.getOne = (stoneId) => Stone.findById(stoneId).populate('liked');

exports.delete = (stoneId) => Stone.findByIdAndDelete(stoneId);

exports.updateOne = (stoneId, stoneData) => Stone.findByIdAndUpdate(stoneId, stoneData);

exports.search = (stoneText) => {
    if (stoneText) {
        return (Stone.find({ name: { $regex: stoneText, $options: 'i' } }).lean());
    }
}

exports.findTheThree = () => Stone.find({}).sort({ createdAt: -1 }).lean();
