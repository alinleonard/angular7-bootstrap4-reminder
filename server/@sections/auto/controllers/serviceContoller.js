var Service = require('../models/Service');

exports.getList = function(req, res) {
    Service.find(function(err, items) {
        if(err) {
            res.send(err);
        }
        res.json(items);        
    }).sort({created: -1});
}

exports.create = function(req,  res) {
    var obj = new Service(req.body);
    obj.save(function(err) {
        if(err){
            res.send(err);
        }
        res.json(obj);
    });
}

exports.getById = function(req, res) {
    Service.findById(req.params.id, function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.update = function(req, res) {
    Service.findOneAndUpdate({_id:  req.params.id}, req.body, {new: true}, function(err, item){
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.delete = function(req, res) {
    Service.remove({_id: req.params.id}, function(err, item) {
        if(err) {
            res.send(err)
        }
        res.json(item)
    });
}