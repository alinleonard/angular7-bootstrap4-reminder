var User = require('../models/User');

exports.getList = function(req, res){
	User.find(function(err, users){
		if(err)
		res.send(err);

		res.json(users);
	}).sort({created: -1});
};

exports.create = function(req, res){
	var user = new User(req.body);
	// Check for account duplicate
	User.findOne({ email: req.body.email }, function(err, data){
		if(data) {
			return res.status(409).json({message: 'User with the email already exists'});
		}
		user.save(function(err) {
			// send email on signup
			if(err)
			    res.send(err);

			res.json(user);

		});

	});
};

exports.getById = function(req, res){
	User.findById(req.params.id, function(err, user){
		if(err)
		res.send(err);

		res.json(user);
	});
};

exports.update = function(req, res){
	User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user){
		if(err)
		res.send(err);

		res.json(user);
	});
};

exports.delete = function(req, res){
	User.remove({
		_id: req.params.id
	}, function(err, user){
		if(err)
		res.send(err);

		res.json({message: 'Succesfully deleted', user: user._id});
	});
};
