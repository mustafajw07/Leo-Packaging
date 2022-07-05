import Wrapper from "../../asserts/styles/home/video"

function Video() {
  return <Wrapper>
    <header className="head">
      <div className="overlay"></div>
      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="video">
          <div>
            <h1>Al-Zaman</h1>
            <p>Al Zaman Packs is one of the leading
              Paper Core and Corrugated Sheet
              manufacturers in UAE.</p>
          </div>
        </div>
      </div>
    </header>
  </Wrapper>;
}

export default Video;
