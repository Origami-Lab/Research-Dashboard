import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connectAuth } from 'core';
import MainLayout from 'containers/Layout/MainLayout';
import { promisify } from 'utilities';

const InventoryWrapper = styled.div`
  @media (max-width: 1023px) {
  }
`;

function Inventory({ user, history }) {
  return (
    <MainLayout>
      <InventoryWrapper>
        Inventory
      </InventoryWrapper>
    </MainLayout>
  );
}

Inventory.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
};

Inventory.defaultProps = {
  history: {},
  user: {}
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default compose(
  withRouter,
  connectAuth(mapStateToProps, undefined)
)(Inventory);
