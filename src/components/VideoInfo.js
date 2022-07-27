import React, { useState } from "react";

function VideoInfo({video, handleVisibility, isVisible}){
    const [videoObject, setVideoInfo] = useState(video);
    const handleLikes = () => {
        const updatedVideo = {...videoObject, 
            upvotes: videoObject.upvotes + 1}
            setVideoInfo(updatedVideo)
    }
    const handleDislikes = () => {
        const updatedVideo = {...videoObject, 
            downvotes: videoObject.downvotes + 1}
            setVideoInfo(updatedVideo)
    }
    
    return (
        <section className="video section">
            <div className="video embed">
                <iframe
                    width="919"
                    height="525"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    frameBorder="0"
                    allowFullScreen
                    title="Thinking in React" 
                />
            </div>
            <div className="video info">
                <h1 className="video title">{videoObject.title}</h1>
                <span className="video views">{videoObject.views} Views | Uploaded {videoObject.createdAt}</span>
                <br></br>
                <br></br>
                <button onClick={handleLikes}>{videoObject.upvotes} 👍  </button>
                <button onClick={handleDislikes}>{videoObject.downvotes} 👎  </button>
                <br></br>
                <br></br>
                <button onClick={handleVisibility}>{isVisible ? "Hide Comments" : "Show Comments"}</button>
            </div>
        </section>
    )
}

export default VideoInfo;