const uuid = require('uuid/v4')
const authors = []



class Author {
  constructor({firstName,lastName,authors}){
    this.firstName = firstName
    this.lastName = lastName
    this.id = uuid()
  }
}

let getAll = () => authors
let show = (id) => authors.find(el => el.id === id)

let create = ({firstName = "", lastName = ""}) => {

  let response = null
  let errors = []

  if (!firstName) {
    errors.push('firstName is required')
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
