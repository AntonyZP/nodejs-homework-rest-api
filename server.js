const app = require("./app");
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://AntonyZP:90aNy5khJQsfG7Ff@cluster0.qoyx6kc.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Server running. Use our API on port: 3000");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// mongoose.set("strictQuerry", true);

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
