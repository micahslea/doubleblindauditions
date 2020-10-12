import React, { Component } from "react";
import logo from "../../../img/logo1.png";
import logo2 from "../../../img/logo2.png";

class CandidateRegister extends Component {
  render() {
    return (
      <>
        {/* <!-- ======= Welcome ======= --> */}
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
            </div>
          </div>
        </section>
        {/* <!-- End Welcome --> */}

        {/* <!-- ======= Navbar ======= --> */}
        <header id="header">
          <div className="container d-flex align-items-center">
            <a href="/" className="logo mr-auto">
              <img src={logo2} alt="secondary-logo" />
            </a>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="#info">| Register |</a>
                </li>
                <li>
                  <a href="index.html">| Home |</a>
                </li>
              </ul>
            </nav>
            {/* <!-- .nav-menu --> */}
          </div>
        </header>
        {/* <!-- End Navbar --> */}

        <div id="login-modal" className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  If you have an account please login. If not, please register.
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="candidate-login-form">
                  <div className="form-group">
                    <label htmlFor="login-password">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="login-email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="login-password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ======= Registration ======= --> */}
        <section id="info">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title">Candidate Registration</h1>
                <div className="section-title-divider"></div>
                <div className="container align-content-center">
                  <form
                    id="candidate-reg contact_form"
                    className="well form-horizontal"
                    action=""
                    method="post"
                  >
                    <fieldset>
                      {/* <!-- Text input--> */}

                      <div className="form-group">
                        <label className="col-md-4 control-label">
                          First Name
                        </label>
                        <div className="col-md-4 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-user"></i>
                            </span>
                            <input
                              name="first_name"
                              placeholder="First Name"
                              id="first-name"
                              className="form-control"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <!-- Text input--> */}

                      <div className="form-group">
                        <label className="col-md-4 control-label">
                          Last Name
                        </label>
                        <div className="col-md-4 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-user"></i>
                            </span>
                            <input
                              name="last_name"
                              placeholder="Last Name"
                              id="last-name"
                              className="form-control"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="col-md-4 control-label">
                          Section/Instrument
                        </label>
                        <div className="col-md-4 selectContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-list"></i>
                            </span>
                            <select
                              id="instrument"
                              name="department"
                              className="form-control selectpicker"
                            >
                              <option value="">Select your Instrument</option>
                              <optgroup label="Brass">
                                <option>Bass Trombone</option>
                                <option>French Horn</option>
                                <option>Trombone</option>
                                <option>Trumpet</option>
                                <option>Tuba</option>
                              </optgroup>
                              <optgroup label="Percussion">
                                <option>Percussion</option>
                                <option>Timpani</option>
                              </optgroup>
                              <optgroup label="Strings">
                                <option>Double Bass</option>
                                <option>Cello</option>
                                <option>Harp</option>
                                <option>Viola</option>
                                <option>Violin</option>
                              </optgroup>
                              <optgroup label="Woodwinds">
                                <option>Bass Clarinet</option>
                                <option>Bassoon</option>
                                <option>Clarinet</option>
                                <option>Contrabassoon</option>
                                <option>English Horn</option>
                                <option>Flute</option>
                                <option>Oboe</option>
                                <option>Piccolo</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Text input--> */}
                      <div className="form-group">
                        <label className="col-md-4 control-label">E-Mail</label>
                        <div className="col-md-4 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-envelope"></i>
                            </span>
                            <input
                              name="email"
                              id="email"
                              placeholder="E-Mail Address"
                              className="form-control"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <!-- Text input--> */}

                      <div className="form-group">
                        <label className="col-md-4 control-label">
                          Password
                        </label>
                        <div className="col-md-4 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-user"></i>
                            </span>
                            <input
                              name="user_password"
                              id="user_password"
                              placeholder="Password"
                              className="form-control"
                              type="password"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <!-- Text input--> */}

                      <div className="form-group">
                        <label className="col-md-4 control-label">
                          Confirm Password
                        </label>
                        <div className="col-md-4 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-user"></i>
                            </span>
                            <input
                              name="confirm_password"
                              id="confirm_password"
                              placeholder="Confirm Password"
                              className="form-control"
                              type="password"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <!-- Text input--> */}

                      <div className="form-group">
                        <label className="col-md-4 control-label">
                          Contact Number
                        </label>
                        <div className="col-md-4 inputGroupContainer">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-earphone"></i>
                            </span>
                            <input
                              name="phone"
                              id="phone"
                              placeholder="(000) 000-0000"
                              className="form-control"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <!-- Select Basic --> */}

                      {/* <!-- Success message 

                                <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i></div> 
                                --> */}

                      {/* <!-- Button --> */}
                      <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4">
                          <br />
                          <button
                            type="submit"
                            id="submit"
                            className="btn btn-dark btn-block"
                          >
                            SUBMIT{" "}
                            <span className="glyphicon glyphicon-send"></span>
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                {/* <!-- end form div --> */}
              </div>
              {/* <!-- end col div --> */}
            </div>
            {/* <!-- end row div --> */}
          </div>
          {/* <!-- end main container div --> */}
        </section>
        {/* <!-- end section --> */}

        {/* <!-- ======= Divider Section ======= --> */}
        <section id="divider"></section>
        {/* <!-- End Divider Section --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">&copy; O.G Group</div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer --> */}

        {/* <div id="preloader"></div> */}
        <a href="/candidateregister" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </>
    );
  }
}

export default CandidateRegister;
