import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row } from 'react-bootstrap';

export default class Services extends Component {
  render() {
    return (
      <div className="container pt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={9}>
            {/* <h1 className="servicetitle">TBH SERVICES</h1> */}

            <div className="row">
              <div className="col-md-6 col-lg-4 col-sm-12 mx-auto">
                <div className="colheader">
                  <h2>
                    TBH.
                    <br /> TRACKING{' '}
                  </h2>
                </div>

                <div className="colsubheader mt-3">
                  <h2 className="letter"> T </h2>
                </div>
                <div className="colparag mt-3 pt-3">
                  <p>
                    {' '}
                    There are only two rules for being successful. One, figure
                    out exactly what you want to do, and two, do it.” <br />–
                    Mario Cuomo Track Your Goal through us
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-12 mx-auto ">
                <div className="colheader">
                  <h2>
                    {' '}
                    TBH.
                    <br /> BELIEFS{' '}
                  </h2>
                </div>

                <div className="colsubheader mt-3">
                  <h2 className="letter"> B </h2>
                </div>
                <div className="colparag mt-3 pt-3">
                  <p>
                    {' '}
                    “Be brave to stand for what you believe in even if you stand
                    alone.” <br />― Roy T. Bennett, The Light in the Heart Bring
                    Off what You believe in through us{' '}
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-12 mx-auto">
                <div className="colheader">
                  <h2>
                    TBH.
                    <br /> HOUSING
                  </h2>
                </div>

                <div className="colsubheader mt-3">
                  <h2 className="letter"> H </h2>
                </div>
                <div className="colparag mt-3 pt-3">
                  <p>
                    {' '}
                    House Your Work as “All happiness depends on courage and
                    work.”
                    <br /> ― Honoré de Balzac Hurry Up and House Your work now
                    through us.{' '}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
