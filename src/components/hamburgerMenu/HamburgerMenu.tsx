import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsCollapsed } from 'src/features/collapsedMenu/collapsedMenu';
import styles from './HamburgerMenu.module.scss';

type Props = {
  className?: string;
};

const HamburgerMenu: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const onCloseMenu = () => {
    dispatch(setIsCollapsed());
  };

  return (
    <div className={`${styles.hamburgerMenuContainer} ${className}`} onClick={() => onCloseMenu()}>
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
