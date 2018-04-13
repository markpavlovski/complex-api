const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'db.json')

class DB {
  constructor(file, ...args){
    this.path = file
    // args.forEach(resource => this[resource] = [])
  }

  getAll(){
    return JSON.parse(fs.readFileSync(file, 'utf-8'))
  }

  getOne(resource){
    return JSON.parse(fs.readFileSync(file, 'utf-8'))[resource]
  }
  set(resource,dataArray){
    const db = this.getAll(resource)
    db[resource] = dataArray
    fs.writeFileSync(file,JSON.stringify(db))
    return this.getAll(resource)
  }
}

let x = new DB(file,'resource1','resource2')
console.log('object: ', x);
console.log('getAll: ',x.getAll());
console.log('getOne: ',x.getOne("dogs"));
console.log('Set: ',x.set("dogs",['hi','hello','whats up']));
console.log('Set: ',x.set("dogs",['hi','hello','whats up']));
console.log('Set: ',x.set("cats",['hi','hello','whats up']));
console.log('Set: ',x.set("colors",['hi','hello','whats up']));
console.log('Set: ',x.set("authors",['hi','hello','whats up']));
console.log('getAll: ',x.getAll());
console.log('object: ',x)
