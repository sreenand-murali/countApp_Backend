const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roomCountDefault = []; 
for(let i=100;i<=130;i++){
    roomCountDefault.push({room:i,count:-1});
}
for(let i=200;i<=230;i++){
    roomCountDefault.push({room:i,count:-1});
}
for(let i=300;i<=330;i++){
    roomCountDefault.push({room:i,count:-1});
}
const daySchema = new Schema({
    name : {type:String,required:true},
    date: {type:Date,default: Date.now},
    roomCount: {type:[{}],default:roomCountDefault},
    totalCount: {type:Number,default:0}
});

const Day = mongoose.model('Day',daySchema);
module.exports = Day; 