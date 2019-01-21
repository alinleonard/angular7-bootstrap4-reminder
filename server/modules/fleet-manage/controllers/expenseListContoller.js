var ExpenseList = require('../models/ExpenseList');

exports.getList = function(req, res) {
    ExpenseList.find(function(err, items) {
        if(err) {
            res.send(err);
        }
        res.json(items);        
    }).sort({created: -1});
}

exports.create = function(req,  res) {
    var obj = new ExpenseList(req.body);
    obj.save(function(err) {
        if(err){
            res.send(err);
        }
        res.json(obj);
    });
}

exports.getById = function(req, res) {
    ExpenseList.findById(req.params.id, function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.update = function(req, res) {
    ExpenseList.findOneAndUpdate({_id:  req.params.id}, req.body, {new: true}, function(err, item){
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

exports.delete = function(req, res) {
    ExpenseList.remove({_id: req.params.id}, function(err, item) {
        if(err) {
            res.send(err)
        }
        res.json(item)
    });
}