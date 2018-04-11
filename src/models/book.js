const uuid = require('uuid/v4')
const books = []



class Book {
  constructor({name,description,authors}){
    this.name = name
    this.desription = description
    this.authors = authors.split(", ")
    this.id = uuid()
    this.borrowed = false
  }
}

let getAll = () => books
let show = (id) => books.find(el => el.id === id)

let create = ({name = "", description = "", authors=""}) => {

  let response = null
  let errors = []

  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const book = new Book({name, description, authors})
    books.push(book)
    response = book
  }
  return response
}

let modify = (id, {name ="", description="", authors="", borrowed = null}) => {
  const book = books.find(el => el.id === id)

  if (name) book.name = name
  if (description) book.description = description
  if (authors) book.authors = authors.split(", ")
  if (borrowed !== null && borrowed !== book.borrowed) book.borrowed = borrowed

  return book
}


let remove = (id) => {
  const book = books.find(el => el.id === id)
  let index = books.findIndex(el => el.id === id)
  return books.splice(index, 1)
}




module.exports = { getAll, create, show, modify, remove }
