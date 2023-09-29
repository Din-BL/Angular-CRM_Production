const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://MongoDB-Angular_CRM:fGvPsqXBdasTsu7@angular.j8lhgvs.mongodb.net/");
  console.log("Connected To MongoDB");
}
