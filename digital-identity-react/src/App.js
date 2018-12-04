//npm install react-collapsible --save
//npm install react-checkbox-group

import React, { Component } from "react";
import "./App.css";
import { saveProfile, sendProfile, viewProfile } from "./events";
import Collapsible from "react-collapsible";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
// import ExpandCollapse from "react-expand-collapse";

class App extends Component {
  state = {
    enabled: false,
    name: "",
    address: "",
    dob: "",
    phone: "",
    email: "",
    ssn: "",
    publicKey: "",
    gender: "",
    password: "",
    confirmPassword: "",
    viewPassword: "",
    errorMessage: "",
    message: "",
    isNotMatch: false,
    isHidden: false,
    retprofile: [],
    checksProfile: [],
    senderAddress: "",
    isName: false,
    isAddress: false,
    isDOB: false,
    isPhone: false,
    isEmail: false,
    isSSN: false,
    isDrivingLicense: false,
    isGender: false,
    sendPassword: "",
    receipientAddress: ""
  };

  saveProfile = async event => {
    if (this.state.password !== this.state.confirmPassword) {
      event.preventDefault();
      this.setState({ isNotMatch: true });
      this.setState({ errorMessage: "Password do no match" });
    } else {
      alert(this.state.gender);
      this.setState({ isNotMatch: false });
      event.preventDefault();
      saveProfile(this.state);
    }
  };

  viewProfile = async event => {
    event.preventDefault();
    var a = await viewProfile(this.state);
    this.setState({ retprofile: a });
    this.setState({ isHidden: true });
  };

  sendProfile = async event => {
    sendProfile(this.state);
  };

  render() {
    return (
      <div>
        <h1>Digital Identity Using Smart Contracts</h1>
        <br />
        <Collapsible trigger="Save Profile">
          <form
            className="form-group"
            className="form-style-5"
            onSubmit={this.saveProfile}
          >
            <div>
              <label className="col-sm-3 control-label" htmlFor="publicKey">
                Public Key:
              </label>

              <input
                type="text"
                value={this.state.publicKey}
                onChange={event =>
                  this.setState({ publicKey: event.target.value })
                }
              />
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="name">
                Name:
              </label>

              <input
                className="form-control"
                type="text"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>
            <div>
              <label className="col-sm-3 control-label" htmlFor="email">
                Email:
              </label>

              <input
                type="email"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div>
              <label className="col-sm-3 control-label" htmlFor="address">
                Address:
              </label>

              <input
                type="text"
                value={this.state.address}
                onChange={event =>
                  this.setState({ address: event.target.value })
                }
              />
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="DOB">
                DOB:
              </label>

              <input
                type="date"
                value={this.state.dob}
                onChange={event => this.setState({ dob: event.target.value })}
              />
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="phone">
                Phone No:
              </label>

              <input
                type="number"
                value={this.state.phone}
                onChange={event => this.setState({ phone: event.target.value })}
              />
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="ssn">
                SSN:
              </label>

              <input
                type="number"
                value={this.state.ssn}
                onChange={event => this.setState({ ssn: event.target.value })}
              />
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="gender">
                Gender:
              </label>

              <select
                value={this.state.gender}
                onChange={event =>
                  this.setState({ gender: event.target.value })
                }
              >
                <option value="">--Select--</option>
                <option value="Male"> Male </option>
                <option value="Female"> Female </option>
              </select>
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="password">
                Password:
              </label>

              <input
                type="password"
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                className="col-sm-3 control-label"
                htmlFor="confirm_password"
              >
                Confirm Password:
              </label>

              <input
                type="password"
                value={this.state.confirmPassword}
                onChange={event =>
                  this.setState({ confirmPassword: event.target.value })
                }
                required
              />
            </div>
            {this.state.isNotMatch ? (
              <h4 color="red">{this.state.errorMessage}</h4>
            ) : null}

            <div>
              <label className="col-sm-6 control-label" />
              <button
                className="col-sm-5 control-label"
                className="btn btn-primary"
              >
                Save Profile
              </button>
            </div>
          </form>
        </Collapsible>
        <br />

        <Collapsible trigger="View Profile">
          <form
            className="form-group"
            className="form-style-5"
            onSubmit={this.viewProfile}
          >
            <div>
              <label className="col-sm-3 control-label" htmlFor="viewPassword">
                Password:
              </label>

              <input
                type="password"
                value={this.state.viewPassword}
                onChange={event =>
                  this.setState({ viewPassword: event.target.value })
                }
                required
              />
            </div>

            {this.state.isNotMatch ? (
              <h4 color="red">{this.state.errorMessage}</h4>
            ) : null}

            <div>
              <label className="col-sm-6 control-label" />
              <button
                className="col-sm-5 control-label"
                className="btn btn-primary "
              >
                View Profile
              </button>
            </div>
          </form>
          <br />
          <br />
          {this.state.isHidden ? (
            <form className="form-group">
              <div>
                <label className="col-sm-3 control-label">Name: </label>
                <label type="hidden" className="col-sm-9 control-label">
                  {this.state.retprofile[0]}
                </label>
              </div>

              <div>
                <label className="col-sm-3 control-label">Email: </label>
                <label className="col-sm-9 control-label">
                  {this.state.retprofile[4]}
                </label>
              </div>

              <div>
                <label className="col-sm-3 control-label">Address: </label>
                <label className="col-sm-9 control-label">
                  {this.state.retprofile[1]}
                </label>
              </div>

              <div>
                <label className="col-sm-3 control-label">DOB: </label>
                <label className="col-sm-9 control-label">
                  {this.state.retprofile[2]}
                </label>
              </div>

              <div>
                <label className="col-sm-3 control-label">Phone No: </label>
                <label className="col-sm-9 control-label">
                  {this.state.retprofile[3]}
                </label>
              </div>

              <div>
                <label className="col-sm-3 control-label">SSN: </label>
                <label className="col-sm-9 control-label">
                  {this.state.retprofile[5]}
                </label>
              </div>

              <div>
                <label className="col-sm-3 control-label">Gender: </label>
                <label className="col-sm-9 control-label">
                  {this.state.retprofile[6]}
                </label>
              </div>
            </form>
          ) : null}
        </Collapsible>
        <br />

        <Collapsible trigger="Send Profile">
          <form
            className="form-group"
            className="form-style-5"
            onSubmit={this.sendProfile}
          >
            <div>
              <label
                className="col-sm-3 control-label"
                htmlFor="ReceipientAddress"
              >
                Enter Receipient Address:
              </label>

              <input
                type="text"
                value={this.state.receipientAddress}
                onChange={event =>
                  this.setState({ receipientAddress: event.target.value })
                }
                required
              />
            </div>

            <div className="col-sm-3 control-label">
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={this.state.isName}
                  onChange={event =>
                    this.setState({ isName: event.target.checked })
                  }
                />{" "}
                Name{" "}
              </label>
            </div>

            <div className="col-sm-3 control-label">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isAddress}
                  onChange={event =>
                    this.setState({ isAddress: event.target.checked })
                  }
                />{" "}
                Address{" "}
              </label>
            </div>

            <div className="col-sm-3 control-label">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isDOB}
                  onChange={event =>
                    this.setState({ isDOB: event.target.checked })
                  }
                />{" "}
                DOB{" "}
              </label>
            </div>

            <div className="col-sm-3 control-label">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isPhone}
                  onChange={event =>
                    this.setState({ isPhone: event.target.checked })
                  }
                />{" "}
                Phone NO{" "}
              </label>
            </div>

            <div className="col-sm-3 control-label">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isSSN}
                  onChange={event =>
                    this.setState({ isSSN: event.target.checked })
                  }
                />{" "}
                SSN{" "}
              </label>
            </div>

            <div className="col-sm-3 control-label">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isEmail}
                  onChange={event =>
                    this.setState({ isEmail: event.target.checked })
                  }
                />{" "}
                Email{" "}
              </label>
            </div>

            <div className="col-sm-6 control-label">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isGender}
                  onChange={event =>
                    this.setState({ isGender: event.target.checked })
                  }
                />{" "}
                Gender{" "}
              </label>
            </div>

            <div>
              <label className="col-sm-3 control-label" htmlFor="sendPassword">
                Password:
              </label>

              <input
                type="password"
                value={this.state.sendPassword}
                onChange={event =>
                  this.setState({ sendPassword: event.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="control-label col-sm-5" />
              <button className="btn btn-primary control-label col-sm-3">
                Send Profile
              </button>
            </div>
          </form>
        </Collapsible>

        <br />

        <Collapsible trigger="ViewReceivedProfile">
          <form className="form-group" className="form-style-5">
            <div>
              <label className="col-sm-3 control-label" htmlFor="PrivateKey">
                Enter Sender Address:
              </label>

              <input
                type="password"
                value={this.state.senderAddress}
                onChange={event =>
                  this.setState({ senderAddress: event.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="col-sm-3 control-label" htmlFor="PrivateKey">
                Enter PrivateKey:
              </label>

              <input
                type="password"
                value={this.state.privateKey}
                onChange={event =>
                  this.setState({ privateKey: event.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="control-label col-sm-5" />
              <button className="btn btn-primary control-label col-sm-3">
                View Received Profile
              </button>
            </div>
          </form>
        </Collapsible>
      </div>
    );
  }
}

export default App;
