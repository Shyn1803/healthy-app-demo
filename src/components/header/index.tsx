import React from 'react';
import { Logo } from 'src/icons/logo';
import Navigator from './Navigator';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className="container">
        <div className="logo-wrapper">
          <Logo width={109} height={40} className="logo" />
        </div>
        <div className="navigate-wrapper">
          <Navigator />
        </div>
      </div>
    </div>
  );
}

export default Header;
