import React, { Component, Fragment } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      subscribed: false,
      alreadySubscribed: false,
      invalidEmail: false,
    }
  }

  _handleChange = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(this.state.email)
      .then(({result, msg}) => {
        if (result !== 'success') {
          if (msg.includes('invalid')) {
            this.setState({invalidEmail: true});
          } else if (!this.state.email) {
            this.setState({invalidEmail: true});
          } else {
            this.setState({alreadySubscribed: true});
          }
        } else {
          this.setState({subscribed: true});
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  newForm = () => {
    this.setState({subscribed: false});
    this.setState({alreadySubscribed: false});
    this.setState({invalidEmail: false});
  }

  renderForm = () => {
    if (this.state.subscribed || this.state.alreadySubscribed || this.state.invalidEmail) {
      return null;
    }
    return (
      <form className="cmp-form" onSubmit={this._handleSubmit}>
        <label className="cmp-form__label" htmlFor="email">
          Sign up for Sparkbox Newsletters <span className="util-visually-hidden">with your email address</span>
        </label>
        <div className="cmp-form__flex">
          <div className="cmp-form__border">
            <input
                className="cmp-form__input"
                type="email"
                onChange={this._handleChange}
                placeholder="email@example.com"
                name="email"
                id="email"
                />
          </div>
          <button className="cmp-form__button" type="submit">Submit</button>
        </div>
      </form>
    )
  }

  renderSuccessMessage = () => {
    if (!this.state.subscribed) {
      return null;
    }
    return (
      <div className="cmp-form cmp-form-subscribed">
        <h4>Thanks for subscribing for updates about Design Systems! Check your inbox for a confirmation email.</h4>
        <button className="cmp-form__button" onClick={this.newForm}>Sign up with another email address</button>
      </div>
    )
  }

  alreadySubscribedMessage = () => {
    if (!this.state.alreadySubscribed) {
      return null;
    }
    return (
      <div className="cmp-form">
        <h4 className="cmp-form__message cmp-form__message--subscribed">You’re on our list. Thanks for subscribing!</h4>
        <button className="cmp-form__button" onClick={this.newForm}>Sign up with another email address</button>
      </div>
    )
  }


  invalidMessage = () => {
    if (!this.state.invalidEmail) {
      return null;
    }
    return (
      <div className="cmp-form cmp-form-invalid">
        <h4 className="cmp-form__message cmp-form__message--invalid">The email you entered is invalid.</h4>
        <button className="cmp-form__button" onClick={this.newForm}>Sign up with a valid email address</button>
      </div>
    )
  }

  render () {
    return (
      <Fragment>
        {this.renderForm()}
        {this.renderSuccessMessage()}
        {this.alreadySubscribedMessage()}
        {this.invalidMessage()}
      </Fragment>
    )
  }
}
