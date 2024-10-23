import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Connection Failed");
    throw new Error(error);
  }
};

// const document = {
//   title: "6 Months Diploma Course",
//   price: "60,000",
//   modules: "12",
//   desc: "This 6-month Diploma Program in Cybersecurity equips students with pra…",
//   syllabus: ["Windows Forensics" ,
//     "Linux forensics" ,
//     "Mobile forensics" ,
//     "Mobile Scanning ",
//     "IOT Forensics ",
//     "Malware forensics" ,
//     "Data recovery ",
//    " Password cracking" ,
//     "Social media account recovery and forensics ",
//     "Trace GPS location" ,
//     "Forensics toolkit usage" ,
//     "IPDR and CDR analysis (IP LOGS AND CCTV)", 
//     "Email forensics ",
//     "Network forensics"],
//   sales: "40+",
// };
