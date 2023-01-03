import React, { Component } from 'react';
import Header from '../layout/Header';
import '../../stylesheets/ContactCss.css';
import { Container, Form, Col, Row, Button, Modal } from 'react-bootstrap';
import {
  NameErrors,
  EmailErrors,
  PhonenumberErrors
} from '../layout/FormErrors';import Navb from '../layout/Navb'

import axios from 'axios';
import ContactFooter from '../layout/ContactFooter';
export default class Space extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailErroe: '',
      phonenumber: '',
      phonenumberError: '',
      nameErrors: { name: '' },
      emailErrors: { email: '' },
      phonenumberErrors: { phonenumber: '' },
      emailValid: false,
      nameValid: false,
      phonenumberValid: false,
      formValid: false,
      show2: false,
      message: ''
    };
  }
  handleShow() {
    this.setState({ show: true });
  }

  submit = e => {
    e.preventDefault();
    const request = {
      recieverMail: 'info@lirten.com',
      body: `A potential customer with the following information wishes to communicate with The Business Hub \n\t Name: ${this.state.name} \n\t Email: ${this.state.email}  \n\t Number: ${this.state.phonenumber}  \n\t Message: ${this.state.message} \n\t Sincerly, The Business Hub bot`,
      subject: `The Business Hub-New Lead Inquire`
    };
    if (
      this.state.name === '' ||
      this.state.phonenumber === '' ||
      this.state.email === ''
    ) {
      this.setState({ show2: true });
    } else {
      axios
        .post('https://power-support.lirten.com/api/sendMail/send', request)
        .then(
          this.setState({
            show: true,
            name: '',
            email: '',
            phonenumber: '',
            message: '',
            show2: false,
            valid: true
          })
        )
        .then(
          setTimeout(() => {
            this.setState({ show: false });
          }, 1300)
        )
        .catch(err => console.log(err));
    }
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  handlemessage = e => {
    this.setState({ message: e.target.value });
  };
  validateField(fieldName, value) {
    let nameValidationErrors = this.state.nameErrors;
    let emailValidationErrors = this.state.emailErrors;
    let phonenumberValidationErrors = this.state.phonenumberErrors;

    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let phonenumberValid = this.state.phonenumberValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValidationErrors.email = emailValid ? '' : ' is invalid';
        if (value === 0) {
        }
        break;
      case 'name':
        nameValid = value.length > 2;
        nameValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'phonenumber':
        phonenumberValid = value.length > 8;
        phonenumberValidationErrors.phonenumber = phonenumberValid
          ? ''
          : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        nameErrors: nameValidationErrors,
        emailErrors: emailValidationErrors,
        phonenumberErrors: phonenumberValidationErrors,
        emailValid: emailValid,
        phonenumberValid: phonenumberValid,
        nameValid: nameValid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.phonenumberValid
    });
  }
  errorClass(error) {
    if (error) {
      return error.length === 0 ? '' : 'has-error';
    }
  }

  render() {
    return (
      <section className="contactpage">
        <Navb/>
        <div style={{ marginBottom: '10px' }}>
          {' '}
          <Header
            title={'CONTACT THE BUSINESS'}
            secondtitle1={'GET'}
            secondtitle2={'in Touch'}
            largewordimg1="https://tbhwebsite.s3.me-south-1.amazonaws.com/CONTACT.webp"
            largewordimg2="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/CONTACT.png"
            headerParagraph={
              'We love to hear your inquires , questions and our minds opened up to new ideas. Maybe we like business too much and we’d help people about it!'
            }
          />
        </div>

        <Container>
          <Row className="d-flex justify-content-center">
            <Col md="12" lg="9">
              <div className="business">
                <Container>
                  {/* <h2>Business, Politics</h2>
                  <div className="hr"></div> */}
                  <h3>
                    Get in touch! We will <br className="d-none d-lg-block" />{' '}
                    guide you by your <br className="d-none d-lg-block" />
                    communication
                  </h3>
                </Container>
              </div>
            </Col>
          </Row>
          <Row
            className="d-flex justify-content-center"
            style={{ marginTop: '30px' }}
          >
            <Col md="12" lg="9">
              <div className="reachform">
                <Container>
                  <Row>
                    <Col md={6}>
                      <h2>REACH US</h2>
                      <p>
                        Whether you have a question about space features ,
                        pricing or anything else our team is ready to answer all
                        your inquiries.
                      </p>{' '}
                      <div className="hr"></div>
                      <div className="forminputs">
                        <Form onSubmit={this.handleSubmit} noValidate>
                          <Form.Group>
                            <Form.Control
                              noValidate
                              required
                              type="text"
                              onChange={this.handleUserInput}
                              value={this.state.name}
                              name="name"
                              placeholder="Full Name"
                              className="contactForm my-4"
                            />
                            <h6
                              className="panel panel-default"
                              style={{ color: 'red' }}
                            >
                              <NameErrors
                                nameErrors={this.state.nameErrors}
                                className="text-center m-auto"
                              />
                            </h6>{' '}
                          </Form.Group>{' '}
                          <Form.Group>
                            <Form.Control
                              noValidate
                              required
                              type="number"
                              value={this.state.phonenumber}
                              onChange={this.handleUserInput}
                              name="phonenumber"
                              placeholder="Phone Number"
                              className="contactForm my-4"
                            />{' '}
                            <h6
                              className="panel panel-default"
                              style={{ color: 'red' }}
                            >
                              <PhonenumberErrors
                                phonenumberErrors={this.state.phonenumberErrors}
                              />
                            </h6>
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              noValidate
                              required
                              type="email"
                              value={this.state.email}
                              onChange={this.handleUserInput}
                              name="email"
                              placeholder="Your Email"
                              className="contactForm my-4"
                            />{' '}
                            <h6
                              className="panel panel-default"
                              style={{ color: 'red' }}
                            >
                              <EmailErrors
                                emailErrors={this.state.emailErrors}
                              />
                            </h6>
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                              placeholder="Message..."
                              as="textarea"
                              rows="4"
                              onChange={this.handlemessage}
                              value={this.state.message}
                              name="message"
                              type="text"
                              className="contactForm my-4"
                            />
                          </Form.Group>
                          <div className=" text-center ">
                            <Button
                              type="submit "
                              className="subscribebtn"
                              onClick={this.submit}
                            >
                              submit
                            </Button>
                          </div>
                        </Form>
                      </div>
                      <Modal className="mt-5" show={this.state.show}>
                        <div id="snackbar">Sent Successfully</div>
                      </Modal>
                    </Col>
                    <Col md={6} className="py-5 mt-5">
                      <div className="seccolheader">
                        <p className="mt-5">Other ways to connect </p>
                      </div>
                      <div className="parag">
                        <p>
                          Give us a call we are all ears ! or it will be so nice
                          seeing you in our space.
                        </p>{' '}
                        <p>
                          {' '}
                          Dont forget to ask about our{' '}
                          <span>OFFERS PACKAGES !</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mycontactfooter">
          <ContactFooter
            lefttoptitle={'Don’t Hesitate Calling Us.'}
            // lefttopparagraph={'Business, Politics'}
            rightheader={
              'It will be so nice seeing you again. We should keep in touch with each other more often. Have a wonderful day! '
            }
          />
        </div>
      </section>
    );
  }
}
