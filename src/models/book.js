const shortid = require('shortid')
const fs = require('fs')
const path=require('path')
const file = path.join(__dirname, 'db.json')
const DB = require('./db')
const db = new DB(file,'books')



class Book {
  constructor({name,description,authors}){
    this.name = name
    this.desription = description
    this.authors = authors.split(", ")
    this.id = shortid()
    this.borrowed = false
  }
}

let getAll = () => db.get('books')
let show = (id) => db.get('books').find(el => el.id === id)

let create = ({name = "", description = "", authors=""}) => {

  let response = null
  let errors = []

  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const books = db.get('books')
    const book = new Book({name, description, authors})
    books.push(book)
    db.set('books', books)
    response = book
  }
  return response
}

let modify = (id, {name ="", description="", authors="", borrowed = null}) => {

  const books = db.get('books')

    const book = books.find(el => el.id === id)

    if (name) book.name = name
    if (description) book.description = description
    if (authors) book.authors = authors.split(", ")
    if (borrowed !== null && borrowed !== book.borrowed) book.borrowed = borrowed

  db.set('books', books)

  return book
}


let remove = (id) => {

  const books = db.get('books')

    const book = books.find(el => el.id === id)
    const index = books.findIndex(el => el.id === id)
    const removed = books.splice(index, 1)

  db.set('books', books)
  return removed

}



module.exports = { getAll, create, show, modify, remove }
