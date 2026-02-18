import express, { json } from "express";
// import userRoutes from './routes/user.routes.js';
// import postRoutes from './routes/post.routes.js';
// import riddlesRoutes from './routes/riddles.routes.js';

// await connectToDB();

const complaints = [];

const app = express();
app.use(express.json());

app.get("/api/complaints", (req, res) => {
  res.json(complaints);
});
app.post("/api/complaints", (req, res) => {
  const { category, message } = req.body;
  if (!category || !message) {
    return res.status(400).json({ error: "category  and  message blabala" });
  }
  const newComp = { category, message, createdAt: new Date() };
  complaints.push(newComp);
  res.status(201).json(newComp);
});

// app.use((req, res) => {
//   res.status(404).send("Not found");
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
