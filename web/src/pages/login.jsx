import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import { H1 } from '../components/Typography'

function Login() {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (username === 'student' && password === 'test') {
      localStorage.setItem('authenticated', true)
      navigate('/courses')
    }
  }

  function handleFieldChange(value, type) {
    return type === 'username'
      ? setEmail(value)
      : setPassword(value)
  }

  return (
    <Layout>
      <SEO title="Login" />
      <Container>
        <H1>Login</H1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField onChange={({target: {value}}) => handleFieldChange(value, 'username')} label="Username" />
          </div>
          <div>
            <TextField onChange={({target: {value}}) => handleFieldChange(value, 'password')} type="password" label="Password" />
          </div>
          <Button disableElevation type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Container>
    </Layout>
  )
}

export default Login
