// Import required modules
const express = require("express");
const path = require("path");
const projectPath = "C:/Users/user1/OneDrive/Documents/Github_Repos/WebSite/Project";
// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(projectPath)));

// Define a route to handle GET requests to the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(projectPath, "Content.html"));
});

// Define the port number for the server to listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
