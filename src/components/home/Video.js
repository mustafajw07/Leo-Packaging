import Wrapper from "../../asserts/styles/home/video";
import Navbar from "../Navbar";

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
            src="https://video.wixstatic.com/video/11062b_53151efffd6f4585a916f24eae783c28/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="video">
            <div>
              <h1>Al-Zaman</h1>
              <p>
                Al Zaman Packs is one of the leading Paper Core and Corrugated
                Sheet manufacturers in UAE.
              </p>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Video;
