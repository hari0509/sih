const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');
const uri = "mongodb+srv://hari:hari3@cluster49.chpmab5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//let instead var
var express = require('express') //using express like http
var a=express() //sur name for express
a.use(express.static('public'))
a.use(express.json())
a.use(express.urlencoded({extended: false}))
function pass(req,res,next){
  res.set('WWW-Authenticate','basic realm="simple App"')
  if(req.headers.authorization == 'Basic aGFyaTpoYXJpMw=='){
    next()
  }else{
    res.status(401).send("invalid password")
  }
}
a.use(pass)
a.get('/', function(req,res){ //request and response
  client.connect(err => {
    const collection = client.db("myapp").collection("items");
    collection.find().toArray(function(err,items){
      res.send(`<form action = "/database" method="POST">
      <h1>who is anti mage</h1>
      <input autocomplete = "off" name="name" >
      <button> submit </button>
      </form>
      <ol class="order">
      ${items.map(function(item){
        return `<li class="list1 id="listu">${item.mage}
        <div>
        <button data-id=${item._id} class="editme">Edit</button>
        <button data-id=${item._id} class="delete">delete</button>
        </div></li>`
      }).join('')}
      </ol>
      <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
      <script src="/edit.js">
      </script>
      `
      )
    }) 
   })
})

a.post('/database', function(req,res){
    client.connect(err => {
        const collection = client.db("myapp").collection("items");
        collection.insertOne({mage:req.body.name})
       })
        res.redirect('/')
})
a.post('/update',function(req,res){
  client.connect(err => {
    const collection = client.db("myapp").collection("items");
    collection.findOneAndUpdate({_id:new ObjectID(req.body.id)},{$set:{mage:req.body.mage}},function(){res.send("updated")})
   })
})

a.post('/delete',function(req,res){
  client.connect(err => {
    const collection = client.db("myapp").collection("items");
    collection.deleteOne({_id:new ObjectID(req.body.id)},function(){res.send("deleted")})
   })
})

a.listen(3000)


