import express from "express";
import db from "./database/index.js";

const app = express();
const port = 3030;

db.sync({ force: true }).then(() => {
  console.log("synced");

  (async () => {
    try {
      await db.models.worker.create({
        id: 1,
      });
      await db.models.worker.create({
        id: 2,
      });
      await db.models.worker.create({
        id: 3,
      });
      console.log("workers created");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  })();
  (async () => {
    try {
      await db.models.queue.create({
        class: "Class1",
        function: "func1",
        args: { value: "Josshn Doe" },
      });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  })();

  app.get("/", (req, res) => {
    res.send("Hello, Express!");
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
