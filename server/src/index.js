import express from "express";
// import userRoutes from './routes/user.routes.js';
// import postRoutes from './routes/post.routes.js';
// import riddlesRoutes from './routes/riddles.routes.js';

const app = express();
app.use(express.json());

// users routes
app.use('/api', comp);

//posts routes
// app.use('/posts', postRoutes);

// app.use('/riddles', riddlesRoutes)

// Error handling middleware
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
