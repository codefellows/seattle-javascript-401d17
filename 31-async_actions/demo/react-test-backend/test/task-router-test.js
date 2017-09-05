'use strict';

// load env
require('dotenv').config({path: `${__dirname}/../.test.env`})

// npm modules
const expect = require('expect')
const superagent = require('superagent')

// app modules
const clearDB = require('./lib/clear-db')
const server = require('../lib/server.js')
const List = require('../model/list.js');
const mockList = require('./lib/mock-list.js')
const mockTask = require('./lib/mock-task.js')

// module logic
const API_URL = process.env.API_URL

describe('testing /api/tasks', () => {
  before(server.start)
  after(server.stop)
  afterEach(clearDB)

  describe('testing POST /api/tasks', () => {
    it('should create a task', () => {
      let tempList
      let tempTask 
      return mockList.createOne()
      .then(list => {
        tempList = list
        return superagent.post(`${API_URL}/api/tasks`)
        .send({
          content: 'hello world', 
          list: list._id.toString(),
        })
      })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body._id).toExist()
        expect(res.body.content).toEqual('hello world')
        expect(res.body.list).toEqual(tempList._id.toString())
        tempTask = res.body
        return List.findById(tempList._id)
      })
      .then(list => {
        expect(list.tasks.length).toEqual(1) 
        expect(list.tasks[0].toString()).toEqual(tempTask._id.toString())
      })
    })

    it('should respond with a 400 for having a bad list id ', () => {
      return superagent.post(`${API_URL}/api/tasks`)
      .send({
        content: 'hello world', 
        list: '595548f2d8e2edfd4f2ecc24',
      })
      .then(res => {throw res})
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })
  })

  describe('testing PUT /api/tasks/:id', () => {
    it('should respond with the updated task', () => {
      let tempList, tempTask
      return mockTask.createOne()
      .then(({list, task}) => {
        tempTask = task
        tempList = list
        return superagent.put(`${API_URL}/api/tasks/${tempTask._id.toString()}`)
        .send({content: 'hello world'})
      })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.content).toEqual('hello world')
        expect(res.body._id).toEqual(tempTask._id)
        expect(res.body.list).toEqual(tempList._id)
        return List.findById(tempList._id)
      })
      .then(list => {
        expect(list.tasks.length).toEqual(1) 
        expect(list.tasks[0].toString()).toEqual(tempTask._id.toString())
      })
    })
  })

})




















