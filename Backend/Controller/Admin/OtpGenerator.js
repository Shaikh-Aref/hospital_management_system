import otpgenerator from "otp-generator";
import twilio from "twilio";
import { TWILIO_ACC_SID,TWILIO_ACC_TOKEN, TWILIO_PHONE_NUMBER } from "../../Constants/constants.js";

const twilioClient = new twilio(TWILIO_ACC_SID,TWILIO_ACC_TOKEN);


export const sentOtp = (req,res)=>{
    const body = req.body;
    const otp = otpgenerator.generate(4,{lowerCaseAlphabets:false,specialChars:false,upperCaseAlphabets:false});
    twilioClient.messages.create({
        body:`Do not share! ${otp} is your OTP for check your Appointment`,
        to:body.phoneno,
        from:TWILIO_PHONE_NUMBER
    });
    res.send({msg:otp});
}