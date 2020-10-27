import React from "react";

import bannerImage from "../img/banner.jpg";

// import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <img className="banner" src={bannerImage} alt="banner" />
  );
};

export default Banner;
