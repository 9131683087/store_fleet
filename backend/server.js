import server from "./app.js";
import { connectDB } from "./config/db.js";

// Start the server and connect to the database
const serverStart = server.listen(process.env.PORT || 3000, async (err) => {
  if (err) {
    console.error(`Server failed to start: ${err}`);
  } else {
    await connectDB();
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  }
});
