import React, { useState } from 'react'
import { CommentsType } from '../../data/comments'
const Comments = () => {


    const [comments, setComments] = useState<CommentsType[]>()

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data.comments)
    }

    return (

        <div>
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