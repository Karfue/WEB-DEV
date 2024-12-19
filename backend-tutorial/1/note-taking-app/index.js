import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

const notes = [
  {
    title: "hello",
    description: "bye",
  },
];
// post to give some data
// put to update some data
// delete to delete some data
// get to get some data

// add task
app.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!{ title, description }) {
    return res.status(404).send("can not be empty");
  }
  notes.push({ title, description });
  return res.status(200).send("added your task");
  // console.log(notes);
});

// get tasks
app.get("/tasks", (req, res) => {
  if (notes.length < 0) {
    return res.status(404).send("no tasks!");
  }
  return res.status(200).send(notes);
});

app.put("/update:title", (req, res) => {
  const title = req.params.title;
});

app.listen(PORT, (req, res) => {
  console.log("server is running.....");
});
