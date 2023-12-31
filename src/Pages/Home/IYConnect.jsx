import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "./Icons/font-awesome/css/font-awesome.min.css";

import image1 from "./img/intro-carousel/1.jpg";
import image2 from "./img/intro-carousel/2.jpg";
import image3 from "./img/intro-carousel/3.jpg";
import image4 from "./img/intro-carousel/4.jpg";
import image5 from "./img/intro-carousel/5.jpg";

import aboutmisson from "./img/about-mission.jpg";
import aboutplan from "./img/about-plan.jpg";
import aboutvision from "./img/about-vision.jpg";
import ourHistory from "../image/ourHisory.jpg";
import "./Icons/css/ionicons.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
export default function Home() {
  return (
    <>
      <Header />
      <section id="intro">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: {} }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h1>IYCONNECT</h1>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <section id="facts" className="wow fadeIn">
        <div className="container">
          <header className="section-header">
            <div className="content-wrapper">
              <div className="text-content">
                <h2>
                  <p>
                    <h4>
                      IYCONNECT is a collaborative practice management platform
                      to manage the workflow, communicate with the team, and
                      deliver exceptional client work. IYCONNECT brings a total
                      transformation across the entire practice, allowing any
                      firm to maximize efficiencies, streamline processes and
                      optimize the scale.
                    </h4>
                  </p>
                </h2>
              </div>
            </div>
            <div className="facts-img"></div>
          </header>
        </div>
      </section>

      {/* #call-to-action */}

      <section id="skills">
        <div className="container">
          <header className="section-header">
            <h2>IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS</h2>
          </header>
        </div>
      </section>
      {/*==========================
Services Section
    ============================*/}

      <section id="services">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h4></h4>
            <br />
          </header>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Visibility and Management</a>
              </h4>
              <p className="description">Track wherever every job stands</p>
            </div>
          </div>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Workflow Automation</a>
              </h4>
              <p className="description">
                Standardize and automate common processes
              </p>
            </div>
          </div>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Deliver Exceptional Standards</a>
              </h4>
              <p className="description">Work delivered on target</p>
            </div>
          </div>
          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Improve Satisfaction</a>
              </h4>
              <p className="description">
                Build enduring client relationships by providing a first-class
                service
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Collaboration & Connectivity</a>
              </h4>
              <p className="description">Unite the team together</p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="" />
                <p>
                  <h6>Stay on top with IYCONNECT!</h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <header className="section-header">
            <h2>IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS</h2>
          </header>
        </div>
      </section>

      <section id="servicesj">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h4></h4>
            <br />
          </header>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">TEAM MANAGEMENT</a>
                <p>
                  <strong>
                    <br></br>
                  </strong>
                </p>
              </h4>
              <p className="descriptionJ">
                <ul>
                  <li>
                    View and optimize all the jobs going on across your team.
                  </li>
                  <li>
                    Delegate work tasks and sub-tasks to the team so everyone
                    knows their own responsibility.
                  </li>
                  <li>
                    Real-time work-in-progress tracking – Track job progression,
                    identify setbacks and ensure targets are met on time.
                  </li>
                  <li>
                    A system-triggered notification through the dashboard and
                    via email when new tasks are assigned to team members and
                    remind the member about a missing and upcoming deadline.
                  </li>
                  <li>TSheets to track time against clients or jobs.</li>
                  <li>
                    Allocate resources, manage team efficiency, and achieve
                    productivity.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">AUTOMATION</a>
              </h4>
              <p className="descriptionJ">
                <p>
                  <strong>Simplified Client Onboarding Solution:</strong>
                </p>
                <ul>
                  <li>
                    Automated engagement letters creation for clients, including
                    unified e-signing option.
                  </li>
                  <li>
                    Automated requests and reminders to collect required client
                    information, streamlining data collection.
                  </li>
                  <li>
                    Generation of automated workflows based on statutory
                    deadlines for service categories like Accounting, VAT, PAYE,
                    CT, etc.
                  </li>
                  <li>
                    Ability to set up recurring work for automatic scheduling.
                  </li>
                  <li>
                    Automatic storage and organization of files and documents
                    associated with clients and jobs.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">CLIENT MANAGEMENT</a>
              </h4>
              <p className="descriptionJ">
                <p>
                  <strong>
                    <br></br>
                  </strong>
                </p>
                <ul>
                  <li>
                    Automated engagement letters creation for clients, including
                    unified e-signing option.
                  </li>
                  <li>
                    Automated requests and reminders to collect required client
                    information, streamlining data collection.
                  </li>
                  <li>
                    Generation of automated workflows based on statutory
                    deadlines for service categories like Accounting, VAT, PAYE,
                    CT, etc.
                  </li>
                  <li>
                    Ability to set up recurring work for automatic scheduling.
                  </li>
                  <li>
                    Automatic storage and organization of files and documents
                    associated with clients and jobs.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="" />
                <p>
                  <h6>RISE ABOVE WITH IYCONNECT!</h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SendMessage />
      <Footer />
    </>
  );
}
