const shortid = require('shortid')
const authors = []
const fs = require('fs')
const path=require('path')
const file = path.join(__dirname, 'db.json')

class DB {
  constructor(filePath, ...args){
    
  }
}


class Author {
  constructor({firstName,lastName,authors}){
    this.firstName = firstName
    this.lastName = lastName
    this.id = shortid()
  }
}

let getAll = () => {
  const db = JSON.parse(fs.readFileSync(file, 'utf-8'))
  authors = db.authors
  return authors
}
let show = (id) => {
  const db = JSON.parse(fs.readFileSync(file, 'utf-8'))
  authors = db.authors
  authors.find(el => el.id === id)
}

let create = ({firstName = "", lastName = ""}) => {

  let response = null
  let errors = []

  if (!firstName) {
    errors.push('firstName is required')
    response = { errors }
  } else if (!lastName){
    errors.push('lastName is required')
    response = { errors }
  } else {
    console.log("hooooo");
    const author = new Author({firstName, lastName})
    console.log(authors,author);

    authors.push(author)
    response = author
  }
  return response
}

let modify = (id, {firstName ="", lastName=""}) => {
  const author = authors.find(el => el.id === id)

  if (firstName) author.firstName = firstName
  if (lastName) author.lastName = lastName

  return author
}


let remove = (id) => {
  const author = authors.find(el => el.id === id)
  let index = authors.findIndex(el => el.id === id)
  return authors.splice(index, 1)
}




module.exports = { getAll, create, show, modify, remove }
