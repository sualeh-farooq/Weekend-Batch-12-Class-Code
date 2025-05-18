import nodemailer from 'nodemailer'

export default async function handler(req,res) {

        if(req.method === 'POST') {
            // extract the information
            const {name , email , message} = req.body

            // create mailoptions / configuration
            var mailOptions = {
                from: email,
                to: "sualehfarooq65@gmail.com",
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
                        user: "sualehfarooq65@gmail.com", 
                        pass: "djgvmfiydmtetopa"
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