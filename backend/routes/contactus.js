const express = require('express');
const router = express.Router();
const Contact = require('../models/contactus');
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();

router.get('/', (req,res)=>{
  res.send({test: "test is working"});
})
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PASSWORD,
  },
});

router.post('/contact', async (req, res) => {
    try {
      const { name, email, message, phone } = req.body;
  
      // Check if the email already exists
      const existingContact = await Contact.findOne({ email });
      if (existingContact) {
        return res.status(400).json({
          message: "Email already exists.",
          success: false,
        });
      }
  
      const existingPhoneNumber = await Contact.findOne({ phone });
      if (existingPhoneNumber) {
        return res.status(400).json({
          message: "Phone Number already exists.",
          success: false,
        });
      }

      // Create a new contact with user's details
      const newContact = new Contact({
        name,
        email,
        message,
        phone
      });
  
      // Save the contact to the database
      await newContact.save();
  
      // Send email with user's email address as the "Reply-To"
      const mailOptions = {
        from: process.env.MAIL_ID,
        // to: "brsonsjaipur@gmail.com",
        to: "yogitakhanna06@gmail.com",
        subject: "New Order Details",
        text: `Dear BR Sons Jewellers,
      
        I hope this email finds you well. I am writing to inform you about a new order that has been placed on your jewelry website. Below are the details of the order:
      
        Customer Name: ${name}
        Customer Email: ${email}
        Customer Phone Number : ${phone}
        Order Details: ${message}
        
        Please review the order and take necessary actions accordingly. If you have any questions or need further information, feel free to reach out to the customer directly using the provided email address.
      
        Thank you for your attention to this matter.
      
        Best regards,
        Management Team of BR Sons Jewellers`,
        replyTo: email, // Set the "Reply-To" field to the user's email address
      };
      
  
      await transporter.sendMail(mailOptions);
  
      return res.status(201).json({
        message: "Contact details saved successfully.",
        success: true,
        contact: newContact,
      });
    } catch (error) {
      console.error("Error saving contact details:", error);
      return res.status(500).json({
        message: "Internal server error.",
        success: false,
      });
    }
  });
  

module.exports = router;
