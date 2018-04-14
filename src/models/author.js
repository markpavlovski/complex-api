const shortid = require('shortid')
// const authors = []
const fs = require('fs')
const path=require('path')
const file = path.join(__dirname, 'db.json')
const DB = require('./db')
const db = new DB(file,'authors')



class Author {
  constructor({firstName,lastName,authors}){
    this.firstName = firstName
    this.lastName = lastName
    this.id = shortid()
  }
}


let show = (id) => {
  const db = JSON.parse(fs.readFileSync(file, 'utf-8'))
  authors = db.get('authors')
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

    const authors = db.get('authors')
    authors.push(author)
    db.set('authors', authors)
  }
  return response
}

let modify = (id, {firstName ="", lastName=""}) => {

  const authors = db.get('authors')

    const author = authors.find(el => el.id === id)

    if (firstName) author.firstName = firstName
    if (lastName) author.lastName = lastName

  db.set('authors', authors)

  return author
}


let remove = (id) => {

  const authors = db.get('authors')

    const author = authors.find(el => el.id === id)
    let index = authors.findIndex(el => el.id === id)
    const removed = authors.splice(index, 1)

  db.set('authors', authors)
  return removed
}

module.exports = { create, show, modify, remove }
