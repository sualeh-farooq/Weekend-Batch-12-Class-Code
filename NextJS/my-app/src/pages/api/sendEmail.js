import nodemailer from 'nodemailer'

export default async function handler(req,res) {

        if(req.method === 'POST') {
            // extract the information
            const {name , email , message} = req.body

            var mailOptions = {
                from: email,
                to: "",
                replyTo: email,
                subject: "Some Message from My Custom App",
                text: message,
              };

              try {
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, 
                    auth: {
                        user: "", 
                        pass: "" 
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                })
                await transporter.sendMail(mailOptions)
                return res.status(200).json({message: 'Email Sent'})
              } catch (error) {
                    return res.status(400).json({message: error})
              } 
        }

}