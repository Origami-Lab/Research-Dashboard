import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connectAuth } from 'core';
import MainLayout from 'containers/Layout/MainLayout';
import { promisify } from 'utilities';

const HomeWrapper = styled.div`
  @media (max-width: 1023px) {
  }
`;

function Dashboard({ user, history }) {
  return (
    <MainLayout>
      <HomeWrapper>
      </HomeWrapper>
    </MainLayout>
  );
}

Dashboard.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
};

Dashboard.defaultProps = {
  history: {},
  user: {}
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default compose(
  withRouter,
  connectAuth(mapStateToProps, undefined)
)(Dashboard);
