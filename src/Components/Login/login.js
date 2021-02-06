import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

import './Style/login.css';

import Firebase from '../../Database/Firebase';

import Footer from "../Footer/footer.js";




export default class Login extends Component {
    customerData;

    constructor(props) {

        super(props);

        this.state = {

            email: '',

            password: '',

        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.loginUser = this.loginUser.bind(this);

    }

    handleChangeEmail(e) {

        this.setState({ email: e.target.value });

    }

    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }



    loginUser(e) {

        e.preventDefault();

        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                // User Signed in 
                var user = userCredential.user;
                console.log("user successfully Signed In!");
                alert("User successfully Signed In!" + this.state.email)
                this.props.history.push("/UserList");
            })
            .catch((error) => {
                console.log("error " + error);
                alert("Wrong email or password!!");
            });

    }



    render() {

        return (
            
            <div>
                <div >

                    <div className="row">

                        <div className="col-md-4 login-sec">

                            <h2 className="text-center">User Login</h2>

                            <Form method="post" name="userRegistrationForm" onSubmit={this.loginUser} >

                                <FormGroup>

                                    <Label for="exampleEmail">Email</Label>

                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        value={this.state.email}
                                        onChange={this.handleChangeEmail}
                                        placeholder="Email Id" />

                                    {/* <div className="errorMsg">{this.state.errors.email}</div> */}

                                </FormGroup>

                                <FormGroup>

                                    <Label for="examplePassword">Password</Label>

                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword}
                                        placeholder="Password" />

                                    {/* <div className="errorMsg">{this.state.errors.password}</div> */}


                                </FormGroup>

                                <div className="d-flex justify-content-center mt-3 login_container">

                                    <Button type="submit" className="btn btn-login">Login</Button>


                                </div>
                                <div><br></br></div>

                                <div class="card-footer">
                                    <div class="d-flex justify-content-center links">
                                        <Link to="/Register"> Don't have an account? Register</Link>
                                        {/* direct to register page */}
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex justify-content-center links">
                                            <Link to="/ForgotPassword"> Forgot Password</Link>
                                            {/* direct to reset password page */}
                                        </div>
                                    </div>
                                </div>

                            </Form>

                        </div>

                        <div className="col-md-8 banner-sec"></div>


                    </div>



                </div>

                 <Footer/>

            </div>

        )

    }

}
