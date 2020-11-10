import React, { useState } from 'react';


export default function FetchComponent(props) {
    const [commentsList, updateComments] = useState([]);

    const fetchCommnet = (comments) => {
        fetch('/api/comments', {
            method: 'get'
        }).then(response => response.json())
            .then(data => { updateComments(data);});
    }

    const removeComment = (index) => {
        const data = commentsList.filter((value) => value.id !== index+ 1);
        updateComments(data);
    }

    return (
        <div>
            <button onClick={fetchCommnet}>Fetch comment feed</button>
            <div className="comment-box">
                {
                    commentsList.length > 0 && commentsList.map((data, index) => {
                        return (
                            <div className="comments">
                                <span className="cross-text" onClick={() => removeComment(index)}>X</span>
                                <span className="comment-text" key={data.id}>{data.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}