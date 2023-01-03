// import React, { Component } from 'react';

// import { Container, Button, Col } from 'react-bootstrap';
// import '../../stylesheets/BlogCss.css';
// import Header from '../layout/Header';
// import CardList from '../BlogSections/CardList.js';
// import { Link } from 'react-router-dom';
// import bloglargeimg from '../../images/the blog.png';
// import myData from '../../DataBase/Data.json';

// export default class Blog extends Component {
//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }
//   constructor(props) {
//     super(props);
//     this.state = { data: myData };
//   }
//   render() {
//     return (
//       <div className="blogpage">
//         {' '}
//         <div style={{ marginBottom: '100px' }}>
//           <Header
//             title={'BLOG'}
//             secondtitle1={'Stories for  '}
//             secondtitle2={'the knowledge '}
//             secondtitle3={'Hungry!'}
//             largewordimg={bloglargeimg}
//             headerParagraph={
//               'We love to keep our minds opened up to new ideas. Maybe we like business too much and we’d give people a hard time about it!'
//             }
//           />
//         </div>
//         <Container className="mb-5">
//           <div className="col-md-10 mx-auto py-5">
//             <div
//               className="whiteline mb-3 mx-2
//              "
//             ></div>

//             <h2 className="px-2 white headline">BLOG STORIES</h2>
//             <Col md={8} className="px-0 mb-4">
//               <p className="px-2 white subtxt">
//                 {' '}
//                 Keep your knowledge bank growing. As a business owner or an
//                 enterpreneur you have the pressure on you to keep your mind full
//                 of new ideas. This is both to forsee the future and try to stay
//                 away from mistakes many have done before you. Stay up to date
//                 and keep your brain going with our bi-weekly blog stories that
//                 discuss the most controversial of topics.
//               </p>
//             </Col>

//             <div className="card mb-3 bigCard">
//               <div className="row no-gutters">
//                 <div className="col-md-4">
//                   <img
//                     src={this.state.data[0].medImg}
//                     className="card-img"
//                     alt="..."
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <Container>
//                     <div className="card-body">
//                       <h5 className="card-title"> Featured Story </h5>
//                       <p className="card-text subtitle my-3">
//                         {this.state.data[0].cardtitle}
//                       </p>

//                       <div className="blackline2 my-3"></div>

//                       <p className="card-text mb-4 ">
//                         {this.state.data[0].cardart}
//                       </p>

//                       <Button className=" cardbutt">
//                         <Link
//                           to={{
//                             pathname: `/blog/${this.state.data[0].id}`,
//                             state: { info: this.state.data[0] }
//                           }}
//                         >
//                           READ MORE
//                         </Link>
//                       </Button>
//                     </div>
//                   </Container>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//         <div className="col-sm-12 mx-auto py-4 redbg ">
//           <div className="col-sm-9 mx-auto px-4 ">
//             <p className=" white mb-0">2019 - TWENTY NINETEEN</p>

//             <h3 className=" white subTitle"> DECEMBER STORES</h3>
//           </div>
//         </div>
//         <Container>
//           <div className="col-sm-12 mx-auto  pt-3 pb-2">
//             <Col sm={5}>
//               <p className="white mb-0" style={{ fontWeight: 'bold' }}>
//                 Theme of the month: communism as a failing model. Failing more
//                 than a billion people wasn’t easy!
//               </p>
//             </Col>
//           </div>

//           <CardList />
//         </Container>
//       </div>
//     );
//   }
// }
