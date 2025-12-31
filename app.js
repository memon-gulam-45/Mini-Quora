const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "elonmusk",
    content:
      "Some people don’t like change, but you need to embrace change if the alternative is disaster.",
  },
  {
    id: uuidv4(),
    username: "sundarpichai",
    content:
      "A person who is happy is not because everything is right in his life, but because his attitude towards everything is right.",
  },
  {
    id: uuidv4(),
    username: "satyanadella",
    content:
      "Our industry does not respect tradition — it only respects innovation.",
  },
  {
    id: uuidv4(),
    username: "markzuckerberg",
    content:
      "The biggest risk is not taking any risk in a world that’s changing really quickly.",
  },
  {
    id: uuidv4(),
    username: "billgates",
    content:
      "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
  },
];

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  res.render("show.ejs", { post });
  console.log("Working...");
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id == p.id);
  post.content = newContent;
  console.log([post]);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
