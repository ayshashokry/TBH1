import React, { Component } from 'react';
import '../../stylesheets/FooterCss.css';
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footersection">
          <div className="container">
            <div className="row">
              <div className="col-md-6 imgdiv">
                {/* <img
                  src='https://tbhwebsite.s3.me-south-1.amazonaws.com/navlogo.webp'
                  alt="footerlogo"
                  className="img-fluid"
                /> */}

                <picture>
                  <source
                    srcset="https://tbhwebsite.s3.me-south-1.amazonaws.com/navlogo.webp"
                    alt="footerlogo"
                    className="img-fluid"
                    type="image/webp"
                  />
                  <source
                    srcset="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/footerlogo.png"
                    alt="footerlogo"
                    className="img-fluid"
                    type="image/png"
                  />
                  <img
                    src="img/creakyOldJPEG.jpg"
                    alt="footerlogo"
                    className="img-fluid"
                  />
                </picture>

                <div
                  className="mt-5 paragraphfooter"
                  style={{ color: 'white' }}
                >
                  <h5>
                    THE BUSINESS HUB.
                    <br /> THE 21ST CENTURY GARAGE.
                  </h5>
                  <br />
                  <p>The Business Hub. © 2019. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-0"></div>
              <div className="col-lg-3 col-md-12 detailssection ">
                <div>
                  <h3 className="title">Address</h3>
                  <p className="titlepp mb-4">
                    Street 79, Round 21, Building 25, <br />
                    First Floor Maadi, Cairo
                  </p>

                  <h3 className="title"> Daily Working Hours </h3>
                  <p className="titlepp mb-4">9 AM - 9 PM </p>

                  <h3 className="title">Phone</h3>
                  <p className="titlepp mb-4"> 01002424439</p>

                  <div className="row">
                    <div className="col-5">
                      <h3 className="title">
                        join our <br />
                        community!
                      </h3>
                    </div>

                    <div className="col-7 mt-2">
                      <div className="featuerslisticon text-right">
                        <a
                          href="https://www.facebook.com/thebusinesshub.space/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fab  fa-facebook-f"
                            style={{ padding: '4px 6px' }}
                          ></i>
                        </a>

                        <a
                          href="https://www.instagram.com/thebusinesshub.space/?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab  p-1 fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
