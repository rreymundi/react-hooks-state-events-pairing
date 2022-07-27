import React from "react";
import Comment from "./Comment";

function Comments({video}){

    const comments = video.comments
    const renderedComments = comments.map((comment) => {
        return (
            <Comment comment={comment}/>
        )
    })

    return (
        <section id="comments section">
            <div id="comment count">
                <h2>{video.comments.length} Comments</h2>
            </div>
            <div id="comments list">
                <div>
                    {renderedComments}
                </div>
            </div>
        </section>
    )
}

export default Comments;