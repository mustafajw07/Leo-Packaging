import Wrapper from "../../asserts/styles/home/video";
import Navbar from "../Navbar";
import video from "../../asserts/images/home/LEO Video.mp4";

function Video() {
  return (
    <Wrapper>
      <header className="head">
        <div className="overlay"></div>
        <Navbar />
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            // src="https://video.wixstatic.com/video/11062b_53151efffd6f4585a916f24eae783c28/1080p/mp4/file.mp4"
            // src="../../asserts/images/homevideo2.mp4"
            src={video}
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="video">
            <div>
              <p className="top">WE INVEST IN</p>
              <h1>Your Future</h1>
              <p>A one stop solution for all things Paper</p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Video;
