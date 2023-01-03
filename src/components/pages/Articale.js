import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../stylesheets/ArticleCss.css';
import ContactFooter from '../layout/ContactFooter';
export default class Articale extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="article">
        <Container>
          <div className="headerimg">
            {' '}
            <img
              alt="CoverCardImage"
              src={this.props.location.state.info.coverImg}
            />
          </div>{' '}
          <Row className="d-flex justify-content-center">
            <Col md="12" lg="8">
              <div className="articlebusiness">
                <Container>
                  <h2>{this.props.location.state.info.titleHead}</h2>
                  <div className="hr"></div>
                  <h3>
                    {this.props.location.state.info.title1}
                    {this.props.location.state.info.title2}
                  </h3>
                  <p style={{ paddingTop: '30px' }}>
                    {this.props.location.state.info.titleParagraph}
                  </p>
                  {this.props.location.state.info.titleParagraph2 ? (
                    <p style={{ paddingTop: '20px' }}>
                      {this.props.location.state.info.titleParagraph2}
                    </p>
                  ) : null}
                </Container>
              </div>
            </Col>
          </Row>
          <Row
            className="d-flex justify-content-center articleparagraph"
            style={{ marginTop: '30px' }}
          >
            <Col md="12" lg="8">
              <div className="articlesweet">
                <Container>
                  <div className="hr"></div>
                  <h4 className="pt-4">
                    {this.props.location.state.info.artHeader}
                  </h4>
                  <p>{this.props.location.state.info.artP1}</p>
                  <p> {this.props.location.state.info.artP2}</p>
                  <p>{this.props.location.state.info.artP3}</p>
                  <p>{this.props.location.state.info.artP4}</p>
                  <p>{this.props.location.state.info.artP5}</p>
                  {this.props.location.state.info.artP6 ? (
                    <p>{this.props.location.state.info.artP6}</p>
                  ) : null}
                  {this.props.location.state.info.artP7 ? (
                    <p style={{ fontWeight: 'bold' }}>
                      {this.props.location.state.info.artP7}
                    </p>
                  ) : null}
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <ContactFooter
          blogid={this.props.location.state.info.id}
          lefttoptitle={'Click to go to the next story!'}
          lefttopparagraph={'Business, Politics'}
          leftbutton={'NEXT STORY'}
          rightheader={
            'Get in line! Stay in the herd and don’t think of anything else!'
          }
          rightparagraph={
            'In the Manifesto of Communism, Karl Marks mentioned the core idea of the movement: “Communism is a socioeconomic order structured upon the ideas of common ownership of the means of production and the absence of social classes, money, and the state.” In short, all Stalin was a master in getting you to follow the rules and do what he wanted you to do.'
          }
        />
      </div>
    );
  }
}
