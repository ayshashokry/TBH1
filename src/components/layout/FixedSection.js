import React, { Component } from 'react';
import '../../stylesheets/fixedSection.css';
export default class FixedSection extends Component {
  render() {
    return (
      <div className="fixedd p-0 m-0">
        <div className="fixedSection">
          {' '}
          <h6>THE BUSINESS HUB. THE 21ST CENTURY GARAGE.</h6>
          {/* <img alt="TBH logo" src='https://tbhwebsite.s3.me-south-1.amazonaws.com/logo2.webp' className="img-fluid" />{' '} */}
          <picture>
            <source
              srcset="https://tbhwebsite.s3.me-south-1.amazonaws.com/logo2.webp"
              className="img-fluid"
              alt="TBH logo"
              type="image/webp"
            />
            <source
              srcset="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/logo2.png"
              className="img-fluid"
              alt="TBH logo"
              type="image/png"
            />
            <img
              src="img/creakyOldJPEG.jpg"
              className="img-fluid"
              alt="TBH logo"
            />
          </picture>
          <span>SOCIAL</span>
          <div className="icons">
            {' '}
            <a
              href="https://www.facebook.com/thebusinesshub.space/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-facebook-f myFB"></i>
            </a>
            <a
              href="https://www.instagram.com/thebusinesshub.space/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-instagram myFB"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
