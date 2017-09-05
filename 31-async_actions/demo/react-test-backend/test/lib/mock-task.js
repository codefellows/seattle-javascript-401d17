'use strict';

// npm modules
const faker = require('faker')

// app modules
const mockList = require('./mock-list.js')
const Task = require('../../model/task.js')

const mockTask = module.exports = {}

mockTask.createOne = () => {
  let result = {}
  return mockList.createOne()
  .then(list => {
    result.list = list;
    return new Task({
      content: faker.random.words(10),
      list: list._id.toString(),
    })
    .save()
  })
  .then(task => {
    result.task = task
    return result
  })
}

mockTask.createMany = (n) => {
  let result = {}
  return mockList.createOne()
  .then(list => {
    result.list = list;
    let taskSavePromises = new Array(n).fill(0)
      .map(() => new Task({
        content: faker.random.words(10),
        list: list._id.toString(),
      }).save())
    return Promise.all(taskSavePromises)
  })
  .then(tasks => {
    result.tasks = tasks
    return result
  })
}




















