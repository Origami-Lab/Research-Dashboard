import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Header from 'containers/Layout/Header';
import Sidebar from 'containers/Layout/Sidebar';

const MainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  #content-outer {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-primary);

    .main-wrapper {
      display: flex;
      width: calc(100% - 213px);
      background-color: var(--color-bg-main);
      overflow: auto;

      #content-inner {
        width: 100%;
        padding: 40px 0px;
      }
    }
  }
`;

function MainLayout({ children }) {
  return (
    <MainLayoutWrapper>
      <Header />
      <div id="content-outer">
        <Sidebar />
        <div className="main-wrapper scrollbar">
          <div id="content-inner">{children}</div>
        </div>
      </div>
    </MainLayoutWrapper>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

MainLayout.defaultProps = {
  children: null
};

export default withTheme(MainLayout);
