import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import { H2, Paragraph } from '../components/typography';

function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    if (username === 'student' && password === 'test') {
      localStorage.setItem('authenticated', 'true');
      navigate('/courses');
    }
  }

  const handleFieldChange = (value, type) => {
    return type === 'username' ? setEmail(value) : setPassword(value);
  };

  return (
    <Layout>
      <SEO title="Login" />
      <Container>
        <H2>Login</H2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              onChange={({ target: { value } }) =>
                handleFieldChange(value, 'username')
              }
              label="Username"
            />
          </div>
          <div>
            <TextField
              onChange={({ target: { value } }) =>
                handleFieldChange(value, 'password')
              }
              type="password"
              label="Password"
            />
          </div>
          <Button
            disableElevation
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        <Paragraph fontSize="small">
          All my courses are currently free. By signing up now you ensure that
          you always have access to the current catalogue without paying
          anything, ever. Even if I decide to start charging for them.
        </Paragraph>
        <Paragraph fontSize="small">
          By providing your email address you agree to sign up for my mailing
          list. I promise the emails will be very infrequent and not slimey
          salesy at all.
        </Paragraph>
      </Container>
    </Layout>
  );
}

export default Login;
