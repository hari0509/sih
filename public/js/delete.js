const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
const collection = client.db("myapp").collection("item3");
collection.insertOne({mage:req.body.names,award:req.body.award,position:req.body.position,date:req.body.date});
alert("register sucessful");;
console.log("kiiii")