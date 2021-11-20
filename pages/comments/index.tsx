import React, { useState } from 'react'
import { CommentsType } from '../../data/comments'
const Comments = () => {
    const [comments, setComments] = useState<CommentsType[]>()
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data.comments)
    }
    const submitComment = async () => {

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'aplication/json'
            }
        })

        const data = await response.json();
        console.log(data)
    }

    return (

        <div>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit Comment</button>
            {comments && comments?.map(item => {
                return (<div key={item.id}>
                    {item.id} {item.text}
                </div>)
            })}
            <button onClick={fetchComments}
            >LOad Comments</button>
        </div>
    )
}

export default Comments