var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema ({
    title: { type: String, required: true},
    summary: String,
    host: String,
    start_date: { type: Date, required: true},
    end_date: { type: Date, required: true},
    category: { type: [Schema.Types.ObjectId], ref: 'Category', required: true},
    location: String,
    likes: { type: Number, default: 0},
    remark: { type: [Schema.Types.ObjectId], ref: 'Remark'}
}, { timestamps: true});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;