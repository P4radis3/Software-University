const Course = require('../models/Course');
const User = require('../models/User');

exports.create = (courseData) => Course.create(courseData);

exports.getAll = () => Course.find().lean();

exports.getTopThree = () => Course.find().sort({createdAt: -1}).limit(3);

exports.findUser = (userId) => User.findById(userId);

exports.findOwner = (userId) => User.findById(userId);

exports.getMySignUp = (userId) => Course.find({ signUpList: userId}).lean();

exports.getMyCreatedCourse = (userId) => Course.find({ owner: userId}).lean();

exports.getOne = (courseId) => Course.findById(courseId).populate('signUpList');

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.update = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData);
