// server/app.js
import express from "express";
import train from "./routes/train.js";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use("/train", train);

// Register and authenticate 
const companyInfo = {
  companyName: "Robi",
  ownerName: "Anant",
  rollNo: "NT20CS021",   //1NT20CS020  // coudnt catch at first
  ownerEmail: "anantashayaa.hegde@gmail.com",
  accessCode: "htKrDr",
};

app.post("/get-token", async (req, res) => {
  try {
    let token = ""; // Store the authentication token

    // let res = await axios.post(
    //   "http://20.244.56.144/train/register",
    //   companyInfo
    // );

    const clientID = "74a48380-6b24-4fde-9c23-3c0eaa435388"
    const clientSecret = "HItrANCoYSRmkmrz"

    let authRequest = await axios.post("http://20.244.56.144/train/auth", {
      companyName: companyInfo.companyName,
      clientID: clientID,
      ownerName: companyInfo.ownerName,
      ownerEmail: companyInfo.ownerEmail,
      rollNo: companyInfo.rollNo,
      clientSecret: clientSecret
    });

    token = authRequest.data.access_token;

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to generate token" });
  }
});

app.listen(3000, () => {
  console.log("server running");
});
