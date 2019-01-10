var ObjectModel = require('../models/Document');

exports.getList = function(req, res) {
    ObjectModel.find(function(err, items) {
        if(err) {
            res.send(err);
        }
        res.json(items);        
    }).sort({created: -1});
}

exports.create = function(req,  res) {
    var obj = new ObjectModel(req.body);
    obj.save(function(err) {
        if(err){
            res.send(err);
        }
        res.json(obj);
    });
}

exports.getById = function(req, res) {
    ObjectModel.findById(req.params.id, function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.update = function(req, res) {
    ObjectModel.findOneAndUpdate({_id:  req.params.id}, req.body, {new: true}, function(err, item){
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.delete = function(req, res) {
    ObjectModel.remove({_id: req.params.id}, function(err, item) {
        if(err) {
            res.send(err)
        }
        res.json(item)
    });
}