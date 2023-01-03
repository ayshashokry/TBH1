import React, { Component } from 'react';
import '../../stylesheets/HeaderCss.css';
import { Col } from 'react-bootstrap';
export default class HomeHeader extends Component {
  render() {
    return (
      <div className="homeheader">
        <div className="d-flex justify-content-center headerrow ">
          <Col sm="12" md="10" style={{ marginTop: '140px' }}>
            <div className="headerbackground "></div>
          </Col>
        </div>
        <h2>
          THE <span className="homest">21</span>
          <br className="d-lg-none d-md-block " /> CENTURY <br />
          <span className="homegarage"> garage</span>
        </h2>
        <div className="homeheaderoverlay"></div>
        <div className="largewordimage">
          <picture>
            <source
              srcset="https://tbhwebsite.s3.me-south-1.amazonaws.com/business.webp"
              alt="BusinessImage"
              type="image/webp"
            />
            <source
              srcset="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/business.png"
              alt="BusinessImage"
              type="image/png"
            />
            <img src="img/creakyOldJPEG.jpg" alt="BusinessImage" />
          </picture>
        </div>
      </div>
    );
  }
}
