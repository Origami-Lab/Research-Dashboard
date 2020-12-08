import React from 'react';
import { compose } from 'recompose';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import styled from 'styled-components';
import { Input } from 'antd';
import appImg from 'assets/img/header/app.svg';
import bellImg from 'assets/img/header/bell.svg';
import dropdownImg from 'assets/img/header/drop-down.svg';
import avatarImg from 'assets/img/header/avatar.png';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(119, 119, 124, 0.15);
  z-index: 10;
  padding: 9px 24px;

  .ant-input-search {
    margin-left: 210px;

    input {
      height: 24px;
      background: var(--color-grey1);
      border-radius: 8px;
      font-size: 12px;
      border: none;
    }

    i {
      color: var(--color-blue);
    }
  }
`;

const RightMenuWrapper = styled.div`
  span {
    font-size: 15px;
    color: var(--color-text-secondary);
    margin-left: 8px;
  }

  .bell-icon {
    margin: 0 36px;
  }
`;

const { Search } = Input;

function Header({ intl }) {
  return (
    <HeaderWrapper className="flex align-center just-between scrollbar">
      <Search
        placeholder={intl.formatMessage({ id: 'Search this workspace' })}
        onSearch={value => console.log(value)}
        style={{ width: 180 }}
      />
      <RightMenuWrapper className="flex align-center">
        <img className="pointer" src={appImg} alt="app" />
        <FormattedMessage id="workspace" />
        <img className="bell-icon" src={bellImg} alt="bell" />
        <img src={avatarImg} alt="avatar" />
        <img className="pointer" src={dropdownImg} alt="dropdown" />
      </RightMenuWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  intl: intlShape.isRequired
};

Header.defaultProps = {
};

export default compose(injectIntl)(Header);
