import { comments } from './../../../data/comments';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest,res: NextApiResponse) {
 
    if(req.method=='GET'){
        res.status(200).json({comments})

    }
    else if(req.method==='POST'){
const comment=JSON.parse(req.body).comment
if(comment){
    const newComment={
        id:Date.now(),
        text:comment
      }
      comments.push(newComment)
      res.status(200).json(newComment)
}else {
    res.status(404).json({message:"comment is required"})

}


    }

}

