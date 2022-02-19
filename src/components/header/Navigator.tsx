import React from 'react';
import { MemoIcon } from 'src/icons/MemoIcon';
import { ChallengeIcon } from 'src/icons/ChallengeIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import { MenuIcon } from 'src/icons/MenuIcon';
import { MENU } from 'src/utils/constants';
import styles from './Navigator.module.scss';

function Navigator() {
  return (
    <div className={styles.navigatorWrapper}>
      {MENU?.map((menuItem) => {
        return (
          <div key={menuItem.id} className="item-wrapper">
            <div className="icon-wrapper">
              {menuItem.id === 'myRecord' && <MemoIcon />}
              {menuItem.id === 'challenge' && <ChallengeIcon />}
              {menuItem.id === 'notice' && <InfoIcon />}
            </div>
            <div className="label">{menuItem.label}</div>
          </div>
        );
      })}
      <MenuIcon />
    </div>
  );
}

export default Navigator;
