import mongoose from "mongoose";
import "dotenv/config";
const url = process.env.MONGODB_URI;
mongoose.connect(url, { family: 4 });

const phonebookSchema = new mongoose.Schema({
  //the _id attribute have more properties(constraints) that are native plus the given modified attributes as well
  _id: { type: String,default: () => crypto.randomUUID() },
  name: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
});

const PhoneBook = mongoose.model("phoneNumber", phonebookSchema);

export { PhoneBook };
