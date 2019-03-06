import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h2>You are logged in!</h2>
        <h4>This is the most secret page on the Internet! :)</h4>
      </div>
    );
  }

  return <Redirect to="/login" />;

};

export default SecretPage;
