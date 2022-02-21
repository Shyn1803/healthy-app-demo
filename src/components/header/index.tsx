import React from 'react';
import { Logo } from 'src/icons/logo';
import { Link } from 'react-router-dom';
import Navigator from './Navigator';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/">
            <Logo width={109} height={40} className="logo" />
          </Link>
        </div>
        <div className="navigate-wrapper">
          <Navigator />
        </div>
      </div>
    </div>
  );
}

export default Header;
