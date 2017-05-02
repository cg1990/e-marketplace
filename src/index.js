import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img from  'react';
//import Screen1 from './screen/Screen1';
//import Screen2 from './screen/Screen2';
//import Screen3 from './screen/Screen3';
import './styles/app.css';
import './styles/responsive.css';


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      screenIndex: 1
    }
  }

  updateScreen(newScreenIndex){
    this.setState({screenIndex: newScreenIndex})
  }

  render(){
    var screenIndex = 2;
    var ActiveScreen

    return(
      <div className="app">
        <main role="main">
          <a id="logo" title="zurück zur Startseite" href="index.html"></a>
            <form id="form4" action="/" method="post">
              <p class="submit"><button type="submit">Upload File</button></p>
            </form>
          <div className="app-header">
            <a id="navlink" title="zum Navigationsmenü" href="#navigation">☰</a>
          </div>
          <div className="app-wrapper">
            <ul id="model">
              <li>
                <a className="sketchfab-embed-wrapper">
                  <iframe  width="600" height="480" src="https://sketchfab.com/models/75294282cf61466c94e36fe44db791f9/embed" frameBorder="0"  allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true"  onmousewheel=""></iframe>
                </a>
              </li>
              </ul>
            <ul id="main-content">
              <li>
                <a className="services">
                  <h1>Costs</h1>
                    <h2>Renovation Costs</h2>
                      <p>
                        <img src={require('./img/Dia4.jpg')}/>
                      </p>
                    <h2>Life cycle Costs</h2>
                      <p>
                        <img src={require('./img/Dia3.jpg')}/>
                      </p>
                </a>
              </li>
              <li>
                <a className="services">
                  <h1>Your Project</h1>
                    <h2>Heating and Ventilation</h2>
                      <p>
                        <img src={require('./img/Dia1.jpg')}/>
                      </p>
                      <p>
                        <img src={require('./img/Dia2.jpg')}/>
                      </p>
                </a>
                </li>
              </ul>
          </div>
          <footer>
            <section className="textf">
              <h2>Impressum</h2>
                <p>
                  The P2Endure E-Marketplace is under developing by Technical University Berlin.
                </p>
            </section>
          <section className="browse">
            <h2>Browse</h2>
              <ul className="footer_nav">
                <li>Home</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Products</li>
                <li>Contact Us</li>
              </ul>
          </section>
          <section className="textcon">
            <h2>Contact </h2>
              <p>
                Email: e-market@tu-berlin.com
                Phone: 000-000-00
                Adress: Gustav Meyer Allee 18, Berlin
              </p>
          </section>
        </footer>
      </main>

          <nav id="navigation">
            <ul>
              <li><a href="index.html">3D Printing</a></li>
              <li><a href="comforteye.html"> Comfort Eye</a></li>
              <li><a href="1-unterseite.html"> Example 1</a></li>
              <li><a href="1-unterseite.html">Example 2</a></li>
              <li><a href="1-unterseite.html"> About Us</a></li>
              <li><a href="1-unterseite.html">Contact</a></li>
            </ul>
          </nav>
        </div>
    )
  }
}


ReactDOM.render(
  <App>
    <h1>This is a message</h1>
  </App>,
  document.getElementById('root')
);
