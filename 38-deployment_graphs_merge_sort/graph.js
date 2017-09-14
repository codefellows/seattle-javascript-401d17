'use strict'

class GraphNode {
  constructor(value){
    this.value = value
    this.children = []
  }

  addNode(node){
    if(!(node instanceof GraphNode))
      throw new Error('VALIDATION ERROR: addNode only accepts a GraphNode')
    this.children.push(node)
    return this
  }

  depthPrint(){
    let encountered = new Set()

    let _depthPrint = (node) => {
      if(!node) return
      if(!encountered.has(node)){
        console.log(node.value)
        encountered.add(node)
        node.children.forEach(child => {
          _depthPrint(child)
        })
      }
    }

    _depthPrint(this)
  }

  breadthPrint(){
    let encountered = new Set()
    let queue = [this]

    let _breadthPrint = () => {
      if(!queue.length) return
      let node = queue.pop()
      if(!encountered.has(node)){
        console.log(node.value)
        encountered.add(node)
        node.children.forEach(child => {
          queue.unshift(child)
        })
        _breadthPrint()
      }
    }

    _breadthPrint()
  }
}


let a =  new GraphNode(11)
let b =  new GraphNode(12)
let c =  new GraphNode(13)

a.addNode(b)
b.addNode(c)
c.addNode(a)

console.log('a', a)

c.breadthPrint()
