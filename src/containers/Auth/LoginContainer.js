import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connectAuth, authActionCreators } from 'core';
import { promisify } from 'utilities';
// import { Input, Icon } from 'antd';

const LoginWrapper = styled.div`
  width: 200px;
  height: 100%;
  overflow: auto;
`;

function LoginContainer() {
  return (
    <LoginWrapper className="scrollbar">
      Login
    </LoginWrapper>
  );
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

const mapDispatchToProps = dispatch => {
  const { login } = authActionCreators;
  return bindActionCreators({
      login
    },
    dispatch
  );
};

export default compose(
  withRouter,
  connectAuth(mapStateToProps, mapDispatchToProps)
)(LoginContainer);
