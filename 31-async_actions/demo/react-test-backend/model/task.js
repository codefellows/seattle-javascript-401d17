'use strict';

const mongoose = require('mongoose');
const List = require('./list.js');

const taskSchema = mongoose.Schema({
  content: {type: String, required: true}, 
  list: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'list'}
})

// hooks go here
taskSchema.pre('save', function(next) {
  console.log('pre save doc', this)
  List.findById(this.list)
  .then(list => {
    let taskIDSet = new Set(list.tasks)
    taskIDSet.add(this._id)
    list.tasks = Array.from(taskIDSet)
    return list.save()
  })
  .then(() => next())
  .catch(() => 
    next(new Error('validation failed to create task because list does not exist')))
})

//taskSchema.post('save', function(doc, next) {
  //console.log('post save doc', doc)
  //List.findById(doc.list) 
  //.then(list => {
    //list.tasks.push(doc._id)
    //return list.save()
  //})
  //.then(() => next())
  //.catch(next)
//})

taskSchema.post('remove', function(doc, next){
  console.log('post remove doc', doc)
  List.findById(doc.list) 
  .then(list => {
    list.tasks = list.tasks.filter(task => task._id !== doc._id)
    return list.save()
  })
  .then(() => next())
  .catch(next)
})


module.exports = mongoose.model('task', taskSchema)








