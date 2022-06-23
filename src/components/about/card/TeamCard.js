

function TeamCard(props) {
    return (
  <div className="card">
    <div className="img-bx">
      <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
    </div>
    <div className="content">
      <div className="detail">
        <h2>{props.name}<br /><span>{props.title}</span></h2>
        <ul className="sci">
          <li>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </li>
          {/* <li>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </li> */}
          <li>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
    )
}

export default TeamCard;
