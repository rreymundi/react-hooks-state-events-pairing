import React, {useState} from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import Comments from "./Comments.js";

function App() {
  const [isVisible, setVisibility] = useState(false);

  const handleVisibility = () => setVisibility(!isVisible);

  return (
    <div className="App">
      <VideoInfo video={video} handleVisibility={handleVisibility} isVisible={isVisible}/>
      <hr></hr>
      {isVisible ? <Comments video={video}/> : null}
    </div>
  );
}

export default App;
