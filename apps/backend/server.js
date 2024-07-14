const express = require("express");
const db = require("./models"); // Mengimpor db dari models/index.js
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/blogs", blogRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    // Sinkronisasi database
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log("Database connected and synced");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
