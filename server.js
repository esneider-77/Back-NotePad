const express = require("express");
const mongoose = require("mongoose");


const Model = require("./mongo/Model");

async function main() {
  await mongoose.connect(
    "mongodb+srv://apolo:admin@stradivarius.zg6bf.mongodb.net/Java?retryWrites=true&w=majority&appName=Stradivarius"
  );
  console.log("Connection MongoDB OK------");
}

main().catch((err) => console.log(err));

const app = express();
app.use(require("cors")());
app.use(express.json());

app.post("/newNotePad", async (req, res) => {
  await new Model.model(req.body).save();
  res.status(200).end();
});

app.get("/allNotes", async (req, res) => {
  const all = await Model.model.find({});
  console.log(all);
  res.json(all);
});

app.delete("/deleteNote", async (req, res) => {
  await Model.model.findByIdAndDelete(req.body._id);
  console.log(req.body);
  res.status(200).end();
});

app.get("/findById/:id", async(req,res)=>{
    const note=await Model.model.findById(req.params.id);
    res.json(note);
});

app.put("/updateNote/:id",async(req,res)=>{
  await Model.model.findByIdAndUpdate(req.params.id,req.body);
  res.status(200).end();
});

app.listen(8888, () => {
  console.log("Running on 8888 ...");
});
