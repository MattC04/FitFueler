import React from 'react';
import Authenticator from './Authenticator';
export default function withAuthenticator(Component, options = {}) {
    return function WrappedWithAuthenticator(props) {
        return (<Authenticator.Provider>
        <Authenticator {...options}>
          <Component {...props}/>
        </Authenticator>
      </Authenticator.Provider>);
    };
}
