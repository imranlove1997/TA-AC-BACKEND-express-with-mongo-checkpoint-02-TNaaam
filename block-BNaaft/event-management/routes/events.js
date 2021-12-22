var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var Category = require('../models/category');
var Remark = require('../models/remark');
/* GET users listing. */
router.get('/', (req, res, next) => {
  Event.find({}).populate('category').exec((err, events) => {
    if(err) return next(err);
    res.render('eventsList', {events});
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  Event.findById(id).populate('category').populate('remark').exec((err, event) => {
    if(err) return next(err);
    res.render('eventDetails', {event});
  });
});

router.post('/:id/remarks', (req, res, next) => {
  let id = req.params.id;
  req.body.eventId = id;
  Remark.create(req.body, (err, remark) => {
    if(err) return next(err);
    Event.findByIdAndUpdate(id, { $push: { remark: remark.id} }, (err, event) => {
      if(err) return next(err);
    res.redirect('/events/' + id);
    })
  });
});

router.get('/new', (req, res) => {
Category.find({}, (err, categories) => {
  res.render('addEvent', {categories: categories});
})  
});

router.post('/', (req, res, next) => {
  Event.create(req.body, (err, eventCreated) => {
    if(err) return next(err);
    res.redirect('/events');
  });
});

module.exports = router;
