import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const sponserSchema = new mongoose.Schema(
  {
    sponserfullname: String,
    sponseremail: String,
    sponserphonenumber: String,
    sponserimage: String,
    sponseraddress: String,
    sponsercountry: String,
    sponserstate: String,
    sponsercity: String,
    sponserpincode: String,
    sponserkeypoints: String,
    sponserabout: String,
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
sponserSchema.plugin(autoIncrement.plugin, "sponser");

const sponser = mongoose.model("Sponser", sponserSchema);
export default sponser;
