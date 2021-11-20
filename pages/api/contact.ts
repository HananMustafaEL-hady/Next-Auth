import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest,res: NextApiResponse) {
//  const {Fullname,Email,Message,Phone}=req.body

  res.status(200).json( req.body)


}
