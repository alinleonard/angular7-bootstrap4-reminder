var Vehicle = require('../models/Vehicle');

exports.getList = function(req, res) {
    Vehicle.find(function(err, items) {
        if(err) {
            res.send(err);
        }
        res.json(items);        
    }).sort({created: -1});
}

exports.create = function(req,  res) {
    var obj = new Vehicle(req.body);
    obj.save(function(err) {
        if(err){
            res.send(err);
        }
        res.json(obj);
    });
}

exports.getById = function(req, res) {
    Vehicle.findById(req.params.id, function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.update = function(req, res) {
    Vehicle.findOneAndUpdate({_id:  req.params.id}, req.body, {new: true}, function(err, item){
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.delete = function(req, res) {
    Vehicle.remove({_id: req.params.id}, function(err, item) {
        if(err) {
            res.send(err)
        }
        res.json(item)
    });
}