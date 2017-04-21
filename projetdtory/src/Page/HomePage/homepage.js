import React, { Component } from 'react';
import './homepage.css';
import logo from './../img/LOGO-DTORY.svg';
import plumber from './../img/plumber.jpeg';
import serrurier from './../img/serrurier.jpeg';
import vitrier from './../img/vitrier.jpeg';
class homepage extends Component {

    render() {
      return (
        <div className='homepage'>
          <div className='headerNavBar container-fluid'>
            <div className='header row'>
              <div className='HeaderNavBarLeft col-md-10'>
                <img className='logo col-xs-3' src={logo} />
                <h1 className='col-xs-7 col-md-8'>Dtory</h1>
              </div>
              <div className='HeaderNavBarRight col-xs-2'>
                <button className='buttonNavBar'>Prestations</button>
                <button className='buttonNavBar'>Contact</button>
              </div>
            </div>
          </div>
          <div className="header container-fluid">
            <div className='search row'>
              {/* <img className="background-search" src={vitrier} /> */}
              <input className='search col-xs-12 col-md-5' type='select' placeholder='Qui?'></input>
              <input className='search col-xs-12 col-md-5' type='text' placeholder='Où?'></input>
              <button>Rechercher</button>
            </div>
          </div>
          <div className='section1 container-fluid'>
            <div className='row'>
              <h3 className='titleSection'>Titre</h3>
              <img className='imgSection col-md-4' src={serrurier} />
              <div className='textSection1 col-xs-12 col-md-8'>
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className='section2 container-fluid'>
            <div className='row'>
              <h3 className='titleSection'>Titre 2</h3>
              <img className='imgSection col-md-4' src={plumber} />
              <div className='textSection1 col-xs-12 col-md-8'>
              <p className='textSection2 col-xs-12 col-md-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
          </div>
          <div className='footer container-fluid'>
            <div className='row'>
              <a className='col-xs-12 col-md-4' href=''>Contact</a>
              <a className='col-xs-12 col-md-4' href=''>Mentions Légales</a>
              <a className='col-xs-12 col-md-4' href=''>Protection de la vie privée</a>
            </div>
          </div>
        </div>
      );
    }
  }


export default homepage;
