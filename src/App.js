import React, { Component } from 'react'
import faceIcon from './face.svg'
import Face from './components/Face'
import Detame from './Detame'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  handleMenuClick() {
    this.setState(prevState => {
      menu: !prevState.menu
    })
  }
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img className="image is-32x16" src="https://s3.eu-west-2.amazonaws.com/pfacamuto/aclogo.png" />
                  </a>
                  <span className="navbar-burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item has-text-weight-bold"
                      href="https://www.linkedin.com/in/alexcamuto/" target="_blank">
                      LinkedIn
                    </a>
                    <a className="navbar-item has-text-weight-bold"
                      href="https://github.com/a-camuto" target="_blank">
                      Github
                    </a>
                    <a className="navbar-item has-text-weight-bold"
                      href="mailto:alexander.camuto@gmail.com">
                      Email
                    </a>
                    <a className="navbar-item has-text-weight-bold"
                      href="https://s3.eu-west-2.amazonaws.com/pfacamuto/resume_alex_camuto.pdf" target="_blank">
                      CV
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <Face />
              <h1 className="title is-uppercase is-size-1">
                Projects
              </h1>
            </div>
          </div>
        </section>
        <div className="container is-widescreen space-around">
        <div className="tile is-ancestor">
          <Detame />
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image is-16by9">
                <img src="https://s3-us-west-2.amazonaws.com/mypf/images/vinyl.png" />
              </figure>
              <p className="title is-uppercase yellowLine">C-trade</p>
              <p className="subtitle">Reinforcement learning for crypto-currency trading.</p>
              <div className="content">
                <p>C-trade involves a backtesting environment to train a DQN neural network to automate crypto-currency trading. The trained network can be connecting to an automated order-router to execute real trades. </p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Deep Learning</span>
                <span className="tag is-danger">Finance</span>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image is-16by9">
                <img src="https://s3.eu-west-2.amazonaws.com/pfacamuto/proem5.png" />
              </figure>
              <p className="title is-uppercase yellowLine">Proem</p>
              <p className="subtitle">A secure and decentralized cryptocurrency portfolio manager.</p>
              <div className="content">
                <p>Proem is a decentralized portfolio management platform built on Blockstack. It enables users to visualize their assets with metrics from multiple markets and blockchains with data encrypted on their own controlled storage.</p>
                <p>Visit at: <a href="http://proem.io">proem.io</a></p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Web</span>
                <span className="tag is-danger">React</span>
                <span className="tag is-danger">Blockchain</span>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://s3.eu-west-2.amazonaws.com/pfacamuto/questions.png" />
              </figure>
              <p className="title is-uppercase blueLine">Plant-on-a-chip</p>
              <p className="subtitle">Machine Learning and paper-based sensors for plants.</p>
              <div className="content">
                <p>Plant-on-a-chip involves paper-based sensors and machine learning tools that detect infection, drought and lack of nutrients in plants. The project was awarded the Stephen Richardson Award for best MEng thesis.
</p>
              </div>
              <div className="tags">
                <span className="tag is-danger">Electronics</span>
                <span className="tag is-danger">Chemistry</span>
                <span className="tag is-danger">Machine Learning</span>
                <span className="tag is-danger">Signal Processing</span>
              </div>
            </article>
          </div>
        </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <figure className="image">
                      <img src="https://s3.eu-west-2.amazonaws.com/pfacamuto/moodlines.png" />
                    </figure>
                    <p className="title is-uppercase blueLine">Moodlines</p>
                    <p className="subtitle">Evaluating patient moods using computer vision and patient sketches.</p>
                    <div className="content">
                      <p>Moodlines, developed in conjunction with Ctrl-Group, involves sets of machine learning and computer vision algorithms to diagnose anxiety and depression from patient drawings. </p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Machine Learning</span>
                      <span className="tag is-danger">Computer Vision</span>
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <figure className="image is-16by9">
                      <img src="https://j.gifs.com/D9YX3Y.gif" />
                    </figure>
                    <p className="title is-uppercase blueLine">Synchronised Strokes</p>
                    <p className="subtitle">Generative graphics.</p>
                    <div className="content">
                      <p>This project, with the Royal College of Music, used artificial intelligence algorithms and an infrared depth camera to generate computer graphics from violin performances. </p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Processing</span>
                      <span className="tag is-danger">AI</span>
                      <span className="tag is-danger">Computer Vision</span>
                      <span className="tag is-danger">Signal Processing</span>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <figure className="image">
                      <img src="https://s3.eu-west-2.amazonaws.com/pfacamuto/neural_network.png" />
                    </figure>
                    <p className="title is-uppercase blueLine">Decoding neural signals.</p>
                    <p className="subtitle">Using novel machine learning algorithms to decode signal neuron recordings.</p>
                    <div className="content">
                      <p>  This project involved sets of random decision forests and kalman filters to estimate hand positions from openly available neural recordings.
</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">Machine Learning</span>
                      <span className="tag is-danger">Neuroscience</span>
                      <span className="tag is-danger">Signal Processing</span>
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <figure className="image is-4by3">
                      <img src="https://s3.eu-west-2.amazonaws.com/pfacamuto/michelangelo_wide.png"  />
                    </figure>
                    <p className="title is-uppercase blueLine">MICHELANGELO</p>
                    <p className="subtitle">Changing peripheral nerve injury rehabilitation.</p>
                    <div className="content">
                      <p>Michelangelo “gamifies” peripheral nerve injury rehabilitation. The device can be used as a controller for several Atari games and the companion iOS application tracks patient progress. The device was awarded the Imperial College Human Robotics design award, for excellence in patient centred design.</p>
                    </div>
                    <div className="tags">
                      <span className="tag is-danger">iOS</span>
                      <span className="tag is-danger">Neuroscience</span>
                      <span className="tag is-danger">Signal Processing</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <figure className="image">
                    <img src="https://s3-us-west-2.amazonaws.com/mypf/images/squid.gif" />
                  </figure>
                  <p className="title is-uppercase blueLine">Squid</p>
                  <p className="subtitle">Designing a seamless concert ticketing experience.</p>
                  <div className="content">
                    <p>This project developed over a 5 month period with financial support from an angel investor and Berklee ICE. When the Facebook Messenger platform opened and after frustrating personal experiences with ticket purchases, we saw the opportunity of simplifying ticket discovery and purchase via a chat interface.</p>
                    <p>The app leverages Messenger platform functionalities such as location, quick replies, template cards and integrated payment system to create a fluid experience. With a small script it identifies the users’ favorite artists playing in their geographic area.</p>
                    <p>The application was featured as a semi-finalist in the MIT and Harvard hosted “HUBweek”.</p>
                    <p>Visit at: <a href="https://squid.ai">squid.ai</a></p>
                  </div>
                </div>
                <div className="tags">
                  <span className="tag is-danger">Chat Bot</span>
                  <span className="tag is-danger">Web App</span>
                  <span className="tag is-danger">Node JS</span>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <figure className="image is-16by9">
                  <img src="https://s3-us-west-2.amazonaws.com/mypf/images/sounditure1.jpg" />
                </figure>
                <p className="title is-uppercase blueLine">Crus Novus</p>
                <p className="subtitle">A low cost transfemoral MMG prosthetic.</p>
                <div className="content">
                  <p>Crus Novus is a low cost mechanomyography system to control prosthetic legs for transfemoral amputation patients. The design is currently being further pursued by an Imperial College affiliated charity.
</p>
                </div>
                <div className="tags">
                  <span className="tag is-danger">3D Modeling</span>
                  <span className="tag is-danger">Electronics</span>
                  <span className="tag is-danger">Signal Processing</span>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <figure className="image is-16by9">
                  <img src="https://s3.eu-west-2.amazonaws.com/pfacamuto/cells.jpg" />
                </figure>
                <p className="title is-uppercase blueLine">Medical Research Center UROP</p>
                <p className="subtitle">Detecting host HIV particle carrier pathways.</p>
                <div className="content">
                  <p>Researched intra-cellular pathways for the transport of viral particles within HIV infected cells.</p>
                </div>
                <div className="tags">
                  <span className="tag is-danger">Biochemistry</span>
                  <span className="tag is-danger">Cellular Biology</span>
                </div>
              </article>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered is-size-7">
              <p>
              All the work presented is my own in colaboration with team members. Please contact me for any questions!
              </p>
              <p>
              2017 - <strong>Alexander Camuto</strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
