import React, { Component } from 'react';
import Header from '../layout/Header';
import '../../stylesheets/SpaceCss.css';
import PrivateOffice from '../spaceSections/PrivateOffice';
import { Container } from 'react-bootstrap';
import ContactFooter from '../layout/ContactFooter';
import MeetingOffice from '../spaceSections/MeetingOffice';
import TrainingOffice from '../spaceSections/TrainingOffice';
import Navb from '../layout/Navb';

export default class Space extends Component {
  constructor(props) {
    super(props);
    this.meeting = React.createRef();
    this.privateRoom = React.createRef();
    this.train = React.createRef();
  }
  componentDidMount() {
    if (!this.props.location.state) {
      window.scrollTo(0, 0);
    } else if (this.props.location.state.info === 'meetings') {
      window.scrollTo({
        top: this.meeting.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    } else if (this.props.location.state.info === 'private') {
      window.scrollTo({
        top: this.privateRoom.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    } else if (this.props.location.state.info === 'training') {
      window.scrollTo({
        top: this.train.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <section className="spacepage">
        <Navb />
        <div style={{ marginBottom: '10%' }}>
          <Header
            title={'THE BUSINESS SPACE'}
            secondtitle1={'Enjoy the '}
            secondtitle2={'wonderful'}
            secondtitle3={'space we offer'}
            headerParagraph={
              'In the heart of Maadi with all of its trees. Keep yourself always refreshed in our amazing office space. It is beautiful, with wonderful scenery.'
            }
            largewordimg1="https://tbhwebsite.s3.me-south-1.amazonaws.com/the+space.webp"
            largewordimg2="https://tbhwebsitepng.s3.me-south-1.amazonaws.com/the+space.png"
          />
        </div>
        <Container>
          <div className="col-md-10 mx-auto py-5">
            <div className="whiteline mb-3 mx-2"></div>

            <h2 className="px-2 white headline">Check Our Amazing Office!</h2>

            <p className="px-2 white w-75 subtxt">
              {' '}
              No more cluncky chairs or uncomfortable seats !. Just the best of
              the best. Our office space has wonderful scenery from the open,
              large windows. The offices are spacious and feels professional.
            </p>
          </div>
        </Container>
        <div ref={this.meeting}>
          {' '}
          <MeetingOffice />
        </div>
        <div ref={this.privateRoom}>
          <PrivateOffice />
        </div>
        <div ref={this.train}>
          {' '}
          <TrainingOffice />
        </div>
        <div className="myspaceblur">
          <ContactFooter
            lefttoptitle={'Don’t Hesitate Visiting Us.'}
            rightheader={'Pass by, We’d love to see you. '}
          />
        </div>
      </section>
    );
  }
}
