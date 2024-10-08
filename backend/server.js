const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, "../build")));

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });
app.post("/api/issues/upload", upload.array("files", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  res.send(`${req.files.length} files uploaded successfully.`);
});

// Catch-all route to serve React's index.html for any route not handled by API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
