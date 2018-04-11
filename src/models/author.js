const uuid = require('uuid/v4')
const authors = []



class Author {
  constructor({name,description,authors}){
    this.name = name
    this.desription = description
    this.id = uuid()
    this.borrowed = false
  }
}

let getAll = () => authors
let show = (id) => authors.find(el => el.id === id)

let create = ({name = "", description = ""}) => {

  let response = null
  let errors = []

  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    console.log("hooooo");
    const author = new Author({name, description})
    console.log(authors,author);

    authors.push(author)
    response = author
  }
  return response
}

let modify = (id, {name ="", description="", borrowed = null}) => {
  const author = authors.find(el => el.id === id)

  if (name) author.name = name
  if (description) author.description = description
  if (borrowed !== null && borrowed !== author.borrowed) author.borrowed = borrowed

  return author
}


let remove = (id) => {
  const author = authors.find(el => el.id === id)
  let index = authors.findIndex(el => el.id === id)
  return authors.splice(index, 1)
}




module.exports = { getAll, create, show, modify, remove }
