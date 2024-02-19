const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const questionRoutes = require("./routes/questionRoutes");
const personalityRoutes = require("./routes/personalityRoutes");
const app = express();
dotenv.config();

//getting the port from the env variables
const PORT = process.env.PORT || 8000;


app.use(cors());

app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api/personality", personalityRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
