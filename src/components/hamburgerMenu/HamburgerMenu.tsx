import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.scss';

type Props = {
  className?: string;
};

const HamburgerMenu: FC<Props> = ({ className }) => {
  return (
    <div className={`${styles.hamburgerMenuContainer} ${className}`}>
      <Link to="/myRecord">自分の記録</Link>
      <Link to="/">体重グラフ</Link>
      <Link to="/">目標</Link>
      <Link to="/">選択中のコース</Link>
      <Link to="/column">コラム一覧</Link>
      <Link to="/">設定</Link>
    </div>
  );
};

export default HamburgerMenu;
