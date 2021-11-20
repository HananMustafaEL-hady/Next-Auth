import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
 const {Fullname,Email,Message,Phone}=req.body
 console.log(process.env.USER)
const transporter =nodemailer.createTransport({
port:465,
  service: "Gmail",
  secure:true,
  auth:{
    user:process.env.USER, 
    pass: process.env.PASS
    }
});

await  transporter.sendMail({

    from:process.env.USER,
    to:Email,
    subject:`Submit the contact form successfully `,
html:`<p><strong> Hi ${Fullname}</strong>,
<br>You can login to the site using your email and password</p>`

  });
  

  res.status(200).json( req.body)


}
