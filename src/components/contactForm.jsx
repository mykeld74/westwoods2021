import React, { Component } from 'react'
import Styled from 'styled-components'
import { navigate } from 'gatsby-link'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = '6LdjZ8UUAAAAAC1UlKjpJVLoeGH7sAt4TQUS-ROQ'

const Container = Styled.div`
  width: 100%;
  padding: 20px;
  margin: auto;
  background: rgba(255, 255, 255, .6);
  input, textarea{
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #bbb;
    padding: 0 10px;
    outline: none;
    font-size: 1rem;
  }
  input{
    height: 45px;
  }
  textarea{
    min-height: 120px;
    padding: 10px;
  }
  button{
    width: 100%;
    border: none;
    color: #fff;
    background: #ED2025;
    height: 45px;
    outline: none;
    font-size: 1.2rem;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    &:disabled{
      opacity: .5;
      cursor: not-allowed;
    }
  }
  .recaptcha{
    margin-bottom: 20px;
  }

  @media(max-width: 801px){
    .headerContainer, button, input, textarea{
    width: 100%;
    }
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactUs extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
    document.getElementById('submit').removeAttribute('disabled')
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Container>
        <form
          name="contact"
          method="post"
          action="/thank-you"
          data-netlify-recaptcha="true"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={this.handleChange}
          />
          <textarea
            name="comments"
            placeholder="Message*"
            required
            onChange={this.handleChange}
          ></textarea>
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
            className="recaptcha"
            required
          />
          <button type="submit" id="submit" disabled>
            Send
          </button>
        </form>
      </Container>
    )
  }
}
