import React, { Component } from 'react';
import '../../stylesheets/HeaderCss.css';
import { Container, Row, Col } from 'react-bootstrap';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="d-flex justify-content-center headerrow ">
          <Col sm="12" md="10" style={{ marginTop: '140px' }}>
            <div className="headerbackground">
              <div className="headertexts">
                <Container>
                  <h2>
                    {/* THE <br /> BUSINESS <br /> */}
                    {this.props.title}
                  </h2>
                  <h5>
                    {this.props.secondtitle1} <br />
                    {this.props.secondtitle2}
                    <br />
                    {this.props.secondtitle3}
                  </h5>
                  <Row>
                    <Col sm={12} md={10}>
                      <p>{this.props.headerParagraph}</p>
                    </Col>
                  </Row>
                </Container>
              </div>{' '}
            </div>
          </Col>
        </div>
        <div className="headeroverlay"></div>{' '}
        <div className="largewordimage">
          {/* <img src={this.props.largewordimg} alt="WordImage" /> */}

          <picture>
            <source
              srcset={this.props.largewordimg1}
              alt="WordImage"
              type="image/webp"
            />
            <source
              srcset={this.props.largewordimg2}
              alt="WordImage"
              type="image/png"
            />
            <img src="img/creakyOldJPEG.jpg" alt="WordImage" />
          </picture>
        </div>
      </div>
    );
  }
}
