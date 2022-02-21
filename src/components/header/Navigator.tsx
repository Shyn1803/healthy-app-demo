import React from 'react';
import { MemoIcon } from 'src/icons/MemoIcon';
import { ChallengeIcon } from 'src/icons/ChallengeIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import { MenuIcon } from 'src/icons/MenuIcon';
import { MENU } from 'src/utils/constants';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import { setIsCollapsed } from 'src/features/collapsedMenu/collapsedMenu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { MenuCloseIcon } from 'src/icons/MenuCloseIcon';
import styles from './Navigator.module.scss';

function Navigator() {
  const isCollapsed = useSelector((state: RootState) => state.collapsed.isCollapsed);
  const dispatch = useDispatch();

  const onHandleCollapse = () => {
    dispatch(setIsCollapsed());
  };

  return (
    <div className={styles.navigatorWrapper}>
      {MENU?.map((menuItem) => {
        return (
          <Link to={menuItem.link} key={menuItem.id}>
            <div className="item-wrapper">
              <div className="icon-wrapper">
                {menuItem.id === 'myRecord' && <MemoIcon />}
                {menuItem.id === 'challenge' && <ChallengeIcon />}
                {menuItem.id === 'notice' && <InfoIcon />}
              </div>
              <div className="label">{menuItem.label}</div>
            </div>
          </Link>
        );
      })}
      <div className="menu-icon-wrapper">
        {isCollapsed ? <MenuIcon onClick={onHandleCollapse} /> : <MenuCloseIcon onClick={onHandleCollapse} />}
        {!isCollapsed && <HamburgerMenu className="hamburger-menu" />}
      </div>
    </div>
  );
}

export default Navigator;
