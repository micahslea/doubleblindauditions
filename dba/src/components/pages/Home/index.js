import React, { Component } from "react";
import Navbar from "../../Navbar";
import "../../../css/style.css";
import logo from "../../../img/logo1.png";
import definition from "../../../img/definition.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <section id="welcome">
          <div className="welcome-container">
            <div className="wow fadeIn">
              <div className="welcome-logo">
                <img className="" src={logo} alt="main-logo" />
              </div>

              <br />

              <h2>
                We are{" "}
                <span
                  className="typed"
                  data-typed-items="the conductors of change., orchestrating diversity., uniting symphonies."
                ></span>
              </h2>

              <br />

              <h2 className="main" style={{ color: "#03C4EB;" }}>
                CHOOSE YOUR ROLE :
              </h2>

              <div className="actions">
                <a href="/judgeregister" className="btn-services">
                  Judge
                </a>
                <a href="/candidateregister" className="btn-services">
                  Candidate
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Welcome -->  */}

        {/* <!-- ======= NavBar ======= --> */}

        <Navbar />

        {/* <!-- End NavBar --> */}

        {/* <!-- ======= Info Section ======= --> */}
        <section id="info">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">About Us</h3>
                <div className="section-title-divider"></div>
                <h4 className="info-description" style={{ color: "black" }}>
                  Read about the idea behind Blind Ear Auditions, and where we
                  intend to go from here.
                </h4>
              </div>
            </div>
          </div>

          <div className="container info-container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 info-img">
                <h2 className="info-title">BEA is...</h2>
                <h2 className="info-title"> Improving Auditions </h2>
                <img src={definition} alt="orchestra definition" />
              </div>

              <div className="col-md-6 info-content">
                <p className="info-text">
                  Prior to the COVID-19 pandemic, one of our team members, James
                  Zimmermann, was an orchestral musician. Having spent countless
                  hours preparing for auditions as a student and listening to
                  auditions as an adjudicator, he always dreamt of an electronic
                  system for taking notes and tallying votes.
                </p>
                <p className="info-text">
                  Blind Ear Auditions is exactly that: A application for
                  adjudicators to keep track of their comments, store them in a
                  database, and make them available to candidates after the
                  process concludes, allowing the candidates to study their
                  feedback and use the process as a learning experience.
                </p>
                <p className="info-text">
                  Additionally, by collecting demographic data on judges and
                  candidates, Blind Ear will help orchestras assess where
                  individual and institutional biases exist - if they exist at
                  all. Musicians trade in emotions as part of their work, and
                  aspiring musicians from underrepresented demographics often
                  say they feel that the audition process itself is rigged
                  against them. We intend to investigate the truthfulness of
                  that assessment using this application.
                </p>
                <p className="info-text">
                  What we are presenting now barely scratches the surface of the
                  concept. We hope to finish the application over the course of
                  the next year, partner with a data analytics firm, and bring
                  orchestras around the country on board for testing once the
                  industry resumes. With any luck, the industry will realize
                  that a data-minded approach will help orchestras modernize the
                  hiring process and ensure that the cream of the applicant pool
                  rises to the top.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Info Section --> */}

        {/* <!-- ======= Divider Section ======= --> */}
        <section id="divider"></section>
        {/* <!-- End Divider Section --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">&copy; O.G Group </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer --> */}

        <a href="/" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </>
    );
  }
}

export default Home;
