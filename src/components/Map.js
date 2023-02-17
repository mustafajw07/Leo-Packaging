import React from "react";
import Wrapper from "../asserts/styles/Map";

function Map() {
  return (
    <Wrapper>
      <div className="contacts contact-wrapper">
        <iframe
          title="Leo Packaging"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3599.557640618105!2d55.67847031501674!3d25.55310798373189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDMzJzExLjIiTiA1NcKwNDAnNTAuNCJF!5e0!3m2!1sen!2sin!4v1676382181405!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Wrapper>
  );
}

export default Map;
