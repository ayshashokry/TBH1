import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col } from 'react-bootstrap';

export default class Location extends Component {
  render() {
    return (
      <div
        className="container location py-3 paddingunset"
        style={{ maxWidth: '100%' }}
      >
        <Col sm={12} className="paddingunset mb-5 py-5">
          <h1 className="locationheader text-center mt-2 pb-3">
            VISIT OUR HEADQUARTERS{' '}
          </h1>
          <iframe
            title="lirtenMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4965343433832!2d31.26518411506764!3d29.965157081911194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458398a8a2d9735%3A0x68c4ae3d6d1def7a!2sThe%20Business%20Hub!5e0!3m2!1sen!2seg!4v1577359489339!5m2!1sen!2seg"
            style={{ width: '100%', height: '450px' }}
          ></iframe>
        </Col>
      </div>
    );
  }
}
