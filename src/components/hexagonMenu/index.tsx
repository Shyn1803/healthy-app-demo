import React, { ComponentType, FC } from 'react';
import { HexagonIcon } from 'src/icons/Hexagon';
import styles from './styles.module.scss';

type Props = {
  label: string;
  icon?: ComponentType<any>;
};

const HexagonMenu: FC<Props> = ({ label, icon: Icon }) => {
  return (
    <div className={styles.hexagonMenuContainer}>
      <HexagonIcon />
      <div className="content">
        {Icon && <Icon />}
        <div className="label">{label}</div>
      </div>
    </div>
  );
};

export default HexagonMenu;
