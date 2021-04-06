// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
import { Redirect } from 'react-router-dom'
// Internals
import 'components/Login-Page/index.css'
import img1 from 'assets/Cipta_Things-removebg.png'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            message: '',
            referrer: 0,
        };
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://192.168.5.183/receiveESP/create.php', {
            username: this.username.value,
            password: this.password.value,
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    message: data.message,
                    referrer: 1,
                });
                event.target.reset();
                swal(this.state.message, {
                    icon: "success",
                });
            }
            else {
                swal(this.state.message, {
                    icon: "error",
                });
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { referrer } = this.state;

        if (referrer === 1) {
            return (
                <Redirect to={'/home'} />
            )
        }

        return (
            <div className="login">
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col d-flex align-items-end col-login">
                            <h3>
                                <span>Make it simple, but</span>
                                <span>significant</span>
                            </h3>
                        </div>
                        <div className="col">
                            <h6><img src={img1} alt="img"></img><b>Cipta</b>Things.</h6>
                            <h1 className="mt-5"><b>Login</b></h1>
                            <h2 className="mt-4">Login to your account</h2>
                            <h4>Thank you for get back to CiptaThings. lets access the platform</h4>
                            <form className="mt-5" onSubmit={this.postData}>
                                <h5><b>Username</b></h5>
                                <input type="text" name="username" ref={(val) => this.username = val} className="form-control" placeholder="Email or username"></input>
                                <h5><b>Password</b></h5>
                                <input type="password" name="password" ref={(val) => this.password = val} className="form-control" placeholder="password"></input>
                                <input type="submit" value="Submit"  className="form-control my-4"></input>
                            </form>
                            <h5>Don't have an account yet? <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/">Sign Up</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
