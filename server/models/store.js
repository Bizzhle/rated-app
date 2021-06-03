const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoreSchema = Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
});

StoreSchema.virtual("url").get(function () {
  return "/catalog/store/" + this._id;
});

// StoreSchema.virtual("name").get(function () {
//   return this.name;
// });

module.exports = mongoose.model("Store", StoreSchema);
