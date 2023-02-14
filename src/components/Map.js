import React from "react";
import Wrapper from "../asserts/styles/Map";

function Map() {
  return (
    <Wrapper>
      <div class="contacts contact-wrapper">
        <iframe
          title="Leo Packaging"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120688.37937787251!2d72.75664598360657!3d19.041220047421408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfae855ea329%3A0x1f1d6a8f00acde6b!2suniversal%20hardware!5e0!3m2!1sen!2sin!4v1674135101506!5m2!1sen!2sin"
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
