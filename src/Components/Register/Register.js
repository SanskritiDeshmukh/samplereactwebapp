import React, { Component } from "react";
import "./Style/register.css";
import UserService from '../../Services/UserService'
import countries from "./countries.json";
import { Input } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      states: "",
      zip: "",
      country: "",
      area_of_interest: "",
      profile_image: "",

      nameError: "",
      emailError: "",
      psswordError: "",
      genderError: "",
      cityError: "",
      statesError: "",
      zipError: "",
      countryError: "",
      area_of_interestError: "",
      profile_imageError: "",
    };

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeZip = this.changeZip.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.validate = this.validate.bind(this);
  }


  validate = () => {
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
    );
    if (this.state.firstName === "") {
      this.setState({ nameError: "Name cannot be empty" });
      return false;
    } else if (this.state.firstName.length < 3) {
      this.setState({ nameError: "Name should have minimum 3 characters" });
      return false;
    } else {
      this.setState({ nameError: "" });
    }

    // const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
    if (this.state.lastName === "") {
      this.setState({ nameError: "Name cannot be empty" });
      return false;
    } else if (this.state.lastName.length < 3) {
      this.setState({ nameError: "Name should have minimum 3 characters" });
      return false;
    } else {
      this.setState({ nameError: "" });
    }

    if (this.state.city === "") {
      this.setState({ cityError: "City cannot be empty" });
      return false;
    } else if (this.state.city.length < 3) {
      this.setState({ cityError: "City should have minimum 3 characters" });
      return false;
    } else {
      this.setState({ cityError: "" });
    }

    if (this.state.zip === "") {
      this.setState({ zipError: "City cannot be empty" });
      return false;
    } else if (this.state.zip.length < 4) {
      this.setState({ zipError: "City should have minimum 4 characters" });
      return false;
    } else {
      this.setState({ zipError: "" });
    }


    if (this.state.email === "") {
      this.setState({ emailError: "Email cannot be empty" });
      return false;
    } else if (typeof this.state.email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(this.state.email)) {
        this.setState({ emailError: "Please enter valid Email" });
        return false;
      } else {
        this.setState({ emailError: "" });
      }
    } else {
      this.setState({ emailError: "" });
    }

    if (this.state.password === "") {
      this.setState({ passwordError: "Password cannot be empty" });
      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        passwordError: "Password should have minimum 8 characters",
      });
      return false;
    } else if (!mediumRegex.test(this.state.password)) {
      this.setState({
        passwordError:
          "Password must contain minimum 1 uppercase, 1 lowercase and 1 number ",
      });
    } else {
      this.setState({ passwordError: "" });
    }
    return true;
  };

  registerUser = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let User = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        city: this.state.city,
        states: this.state.states,
        zip: this.state.zip,
        country: this.state.country
      };
      console.log(JSON.stringify(User));
      console.log(User);
      UserService.registerUser(User)
        .then((res) => {
          this.props.history.push("/");
          console.log(res);
        })
    } else {
      alert("Invalid input");
    }
  }

  cancel() {
    this.props.history.push("/");
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeCity = (event) => {
    this.setState({ city: event.target.value });
  };

  changeZip = (event) => {
    this.setState({ zip: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="container-fluid">
              <center>
                <div className="header">
                  <h2 className="text-center">User Registration</h2>
                </div>
              </center>


              <div>
                <form className="form" id="form">

{/*--------------------------------------------------------------------First Name------------------------------------------------------ */}

                  
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        name="name"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.changeFirstName}
                        required
                        maxLength="30"
                        minLength="3"
                      />
                    </div>
                  

{/*--------------------------------------------------------------------- Last Name -----------------------------------------------------*/}

                  <div className="form-group">
                    <label>Last Name</label>
                    <Input
                      placeholder="Last Name"
                      name="name"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastName}
                      required
                      maxLength="30"
                      minLength="3"
                      
                    />
                    

                    {/* <i class="fas fa-check-circle"></i>
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.nameError}
                                            <small className="form-control error" id="name"></small>
                                        </div> */}
                  </div>

                  
{/* --------------------------------------------------------------Email ----------------------------------------------------------------*/}


                  <div className="form-group">
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                      required
                      pattern="[a-zA-z0-9]+@.+\.com"
                    
                    />

                    
                    {/* <i class="fas fa-check-circle"></i>
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.emailError}
                                            <small className="form-control error" id="email"></small>
                                        </div> */}
                  </div>

{/* --------------------------------------------------------Password---------------------------------------------------------------- */}
                  
                  
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                      required
                      minLength="8"
                      maxLength="20"
                    />
                    {/* <i class="fas fa-check-circle"></i>
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.passwordError}
                                            <small className="form-control error" id="password"></small>
                                        </div> */}
                  </div>


{/* -------------------------------------------------------Gender--------------------------------------------------------------------- */}

                  
                  <div>
                    <label>Gender</label>
                    <fieldset class="form-group emailId">
                      <div class="row">
                        <div class="col-sm-10">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="option1"
                              checked
                            />
                            <label class="form-check-label" for="gridRadios1">
                              Male
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="option2"
                            />
                            <label class="form-check-label" for="gridRadios2">
                              Female
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios3"
                              value="option3"
                            />
                            <label class="form-check-label" for="gridRadios3">
                              Others
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {/* City */}
                  <div className="form-group">
                    <label>City</label>
                    <input
                      placeholder="City"
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changeCity}
                      required
                      maxLength="30"
                      minLength="3"
                    />
                  </div>

{/*------------------------------------------------------------------ State ------------------------------------------------------------*/}

                  <div className="form-group">
                    <label for="States">Select State</label>
                    <select
                      style={{
                        width: "100%",
                        borderRadius: 3,
                        borderColor: "#CDCDCD",
                        borderWidth: "100%",
                        height: 40,
                      }}
                      name="States"
                      id="States"
                    >
                      <option value="MP">MP</option>
                      <option value="UP">UP</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Gujarat">Gujarat</option>
                      

                      {/* {countries.countries.states.map(item => (
                        <option key={item.id} value={item.states}>
                          {item.states}
                        </option>
                      ))}
                      {console.log(this.state.states)}
                      <input type="Submit" value="Submit" /> */}
                    

                    </select>
                  </div>

{/* --------------------------------------------------------------------Country -------------------------------------------------------*/}
                 
                 
                  <div className="form-group">
                    <label style={{ width: 130 }} for="country">
                      Select Country
                    </label>
                    <select
                      style={{
                        width: "100%",
                        borderRadius: 3,
                        borderColor: "#CDCDCD",
                        borderWidth: "100%",
                        height: 40,
                      }}
                    //name="Country"
                    //id="country"
                    >
                      {/* <option value="India">India</option>
                      <option value="Endland">Endland</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Bhutan">Bhutan</option> */}

                      {countries.countries.map(item => (
                        <option key={item.id} value={item.country}>
                          {item.country}
                        </option>
                      ))}
                      {console.log(this.state.countries)}
                      <input type="Submit" value="Submit" />
                    </select>
                  </div>                 


{/*--------------------------------------------------------------------Zip ------------------------------------------------------------ */}


                  <div className="form-group">
                    <label>Zip</label>
                    <input
                      placeholder="Zip"
                      name="zip"
                      className="form-control"
                      value={this.state.zip}
                      onChange={this.changeZip}
                      required
                      maxLength="7"
                      minLength="5"
                    />
                  </div>


{/*-------------------------------------------------------------Area of interest -------------------------------------------------------*/}

                  
                  <div>
                    <label>Areas of Interest</label>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Reading
                    </label>
                      </div>

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                          Writing
                    </label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                        Music
                    </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                        Travelling
                    </label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                          Sports
                    </label>
                      </div>
                    
                  </div>


                  <button
                    className="btn btn-success"
                    onClick={this.registerUser}
                  >
                    Register
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
