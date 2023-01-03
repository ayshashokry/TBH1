import React, { Component } from 'react';
import HomeHeader from '../layout/HomeHeader';
import Services from '../HomeSections/Services';
import Garage from '../HomeSections/Garage';
import Experience from '../HomeSections/Experience';
import Location from '../HomeSections/Location';
import '../../stylesheets/HomeCss.css';
import StartHere from '../HomeSections/StartHere';
import Navb from '../layout/Navb'
export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="homepage">
        <Navb/>
        <HomeHeader />
        <StartHere />
        <Garage />
        <Experience />
        <Services />
        {/* <Whytbh /> */}
        
        <Location />
      </section>
    );
  }
}
