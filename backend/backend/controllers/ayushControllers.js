// const fs = require('fs');
// const path = require('path')
const aadhardata=require('../aadhardata')
// const aadhaarFilePath = path.join(__dirname, 'aadhaardata.json');




// function getAadhaarDataFromFile() {
//     try {
//       const data = fs.readFileSync(aadhaarFilePath, 'utf8');
//       return JSON.parse(data); // Return Aadhaar data from the file
//     } catch (err) {
//       console.error('Error reading Aadhaar data from file:', err);
//       return {};
//     }
//   }

// const getAadharData=(req,res)=>{
//     const { aadhaarno } = req.params;
//     const aadhaarData = getAadhaarDataFromFile();
  
//     const personDetails = aadhaarData[aadhaarno];
  
//     if (!personDetails) {
//       return res.status(404).json({
//         success: false,
//         message: 'Person not found for the given Aadhaar number.',
//       });
//     }
  
//     res.status(200).json({
//       success: true,
//       aadhaarno,
//       ...personDetails,
//     });
// }

// module.exports={getAadharData};

const getAadharData=(req, res) => {
    const { aadharno } = req.params;
    if (aadhardata[aadharno]) {
        res.json(aadhardata[aadharno]);
    } else {
      res.json({ status: 'invalid', message: 'Invalid Aadhar number' });
    }
}

const postAadharData=(req, res) => {
    const { aadhar } = req.body;
    if (aadhar.length === 12) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      otpStore[aadhar] = otp;
      console.log('Sent OTP:', otp); // For debugging, in production you would send it via SMS
      res.json({ status: 'success', message: 'OTP sent successfully' });
    } else {
      res.json({ status: 'error', message: 'Invalid Aadhar number' });
    }
  }

module.exports={getAadharData,postAadharData}

