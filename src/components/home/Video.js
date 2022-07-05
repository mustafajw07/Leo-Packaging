import Wrapper from "../../asserts/styles/home/video"

function Video() {
  return <Wrapper>
  <header className="head">
<div class="overlay"></div>
<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
</video>
<div class="container">
  <div class="video">
    <div>
      <h1>Video Header</h1>
      <p class="lead mb-0">Using HTML5 Video and Bootstrap</p>
    </div>
  </div>
</div>
</header>
  </Wrapper>;
}

export default Video;
