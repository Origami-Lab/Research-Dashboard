import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as DashboardImg } from 'assets/img/menu/dashboard.svg';
import { ReactComponent as ExperimentImg } from 'assets/img/menu/experiment.svg';
import { ReactComponent as ProtocolsImg } from 'assets/img/menu/protocols.svg';
import { ReactComponent as ReportsImg } from 'assets/img/menu/reports.svg';
import { ReactComponent as InventoryImg } from 'assets/img/menu/inventory.svg';
import { ReactComponent as NotebookImg } from 'assets/img/menu/notebook.svg';

const SidebarWrapper = styled.div`
  width: 200px;
  height: 100%;
  background: var(--color-bg-sidebar);
  box-shadow: 2px 0px 4px rgba(119, 119, 124, 0.15);
  z-index: 9;
  padding: 36px 0px;

  .menu-item {
    position: relative;
    width: 100%;
    height: 47px;
    margin-bottom: 16px;

    svg {
      margin-right: 19px;
      margin-left: 27px;
    }
    span {
      font-weight: 600;
      font-size: 15px;
      color: var(--color-text-secondary);
    }
  }
  .menu-item-active {
    &:before {
      content: ' ';
      position: absolute;
      width: 5px;
      height: 100%;
      left: 0;
      top: 0;
      background: var(--color-blue);
    }

    svg {
      path {
        fill: var(--color-blue);
      }
    }

    span {
      color: var(--color-blue);
    }
  }
`;

function Sidebar() {
  return (
    <SidebarWrapper className="scrollbar">
      <NavLink
        to="/lab/dashboard"
        className="flex align-center pointer menu-item"
        activeClassName="menu-item-active"
      >
        <DashboardImg />
        <FormattedMessage id="dashboard" />
      </NavLink>
      <NavLink
        to="/lab/experiments"
        className="flex align-center pointer menu-item"
        activeClassName="menu-item-active"
      >
        <ExperimentImg />
        <FormattedMessage id="experiments" />
      </NavLink>
      <NavLink
        to="/lab/protocols"
        className="flex align-center pointer menu-item"
        activeClassName="menu-item-active"
      >
        <ProtocolsImg />
        <FormattedMessage id="protocols" />
      </NavLink>
      <NavLink
        to="/lab/reports"
        className="flex align-center pointer menu-item"
        activeClassName="menu-item-active"
      >
        <ReportsImg />
        <FormattedMessage id="reports" />
      </NavLink>
      <NavLink
        to="/lab/inventory"
        className="flex align-center pointer menu-item"
        activeClassName="menu-item-active"
      >
        <InventoryImg />
        <FormattedMessage id="inventory" />
      </NavLink>
      <NavLink
        to="/lab/notebook"
        className="flex align-center pointer menu-item"
        activeClassName="menu-item-active"
      >
        <NotebookImg />
        <FormattedMessage id="notebook" />
      </NavLink>
    </SidebarWrapper>
  );
}

export default Sidebar;
