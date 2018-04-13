const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'db.json')

class DB {
  constructor(filePath, ...args){
    args.forEach(resource => this.resource = [])
  }

  getAll = () => JSON.parse(fs.readFileSync(file, 'utf-8'))
  getOne = resource => JSON.parse(fs.readFileSync(file, 'utf-8'))[resource]
  set = resource => {
    get(resource)
    fs.writeFileSync(file,JSON.stringify(cats))
  }
}
