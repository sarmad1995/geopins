import React, { useContext } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from '@material-ui/core/styles';
import { OAUTH_CLIENT_ID, API_ENDPOINT } from '../../config';
import Typography from '@material-ui/core/Typography';
import Context from '../../context';
import { ME_QUERY } from '../../graphql/queries';

const Login = ({ classes }) => {
  const { dispatch } = useContext(Context);
  const onSuccess = async googleUser => {
    try {
      const idToken = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient(`${API_ENDPOINT}/graphql`, {
        headers: { authorization: idToken }
      });
      const { me } = await client.request(ME_QUERY);
      dispatch({ type: 'LOGIN_USER', payload: me });
    } catch (e) {
      onFailure(e);
    }
  };
  const onFailure = err => {
    console.error(err);
  };
  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        noWrap
        style={{ color: 'rgb(66,133,244)' }}
      >
        Welcome
      </Typography>
      <GoogleLogin
        theme="dark"
        onFailure={onFailure}
        isSignedIn
        onSuccess={onSuccess}
        clientId={OAUTH_CLIENT_ID}
      />
    </div>
  );
};

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default withStyles(styles)(Login);
