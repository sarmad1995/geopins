import {useState, useEffect} from 'react';
import {GraphQLClient} from 'graphql-request';
import {API_ENDPOINT} from './config';
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? '<insert-productionurl>'
  : API_ENDPOINT;

export const useClient = () => {
  const [idToken, setIdToken] = useState ('');
  useEffect (() => {
    const token = window.gapi.auth2
      .getAuthInstance ()
      .currentUser.get ()
      .getAuthResponse ().id_token;
    setIdToken (token);
  }, []);
  return new GraphQLClient (BASE_URL, {
    headers: {
      authorization: idToken,
    },
  });
};
