import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="index.html">Democracy 2.0</a>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">Know Your Leader</a></li>
          <li><a href="protest.html">Voice Your Protest</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">###</a></li>
        </ul>
      </div>
      <div className="nav-button">
        <div className="anim-layer"></div>
        <a href="Login.html">Log In</a>
      </div>
      <div id="hamburger-menu">☰</div>
    </div>
  );
}

function Carousel() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://www.cpahq.org/media/ibrmabei/shutterstock_216147544.jpg" className="d-block w-100" alt="..." style={{ height: '700px' }} />
          <div className="carousel-caption d-none">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="file-20200610-21182-8kzbq2.avif" className="d-block w-100" alt="..." style={{ height: '700px' }} />
          <div className="carousel-caption d-none">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="Great-Leaders-Know-How-To-Conquer-This.webp" className="d-block w-100" alt="..." style={{ height: '700px' }} />
          <div className="carousel-caption d-none">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function Features() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Democracy 2.0</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Welcome to Democracy 2.0</h3>
          <p>Revolutionizing the way citizens interact with leaders and social movements.</p>
          <a href="AboutPage.html" className="icon-link">
            Go to Detail
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"></use></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Know Your Leader</h3>
          <p>Transparent profiles of political leaders, their promises, achievements, and public ratings.</p>
          <a href="profile.html" className="icon-link">
            Go to Detail
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Voice Your Protest</h3>
          <p>Empower your causes. Support and spread awareness about various protests.</p>
          <a href="name.jsx" className="icon-link">
            Go to Detail
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Democracy 2.0<span><img style={{ height: '20vh' }} src="" alt="" /></span></h3>
        <p className="footer-links">
          <a href="index.html" className="link-1">Home</a>
          <a href="profile.html">Know Your Leader</a>
          <a href="name.jsx">Voice Your Protest</a>
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@gov.in</a></p>
        </div>
      </div>
      <div className="footer-right">
        <p style={{ color: 'white' }} className="footer-company-about">
          <span>About</span>
          Democracy 2.0 is an innovative app designed to revolutionize the way citizens interact with their leaders and social movements.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Features />
      <Footer />
    </div>
  );
}
  
  