import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const FOOTER_NAVIGATE = [
  {
    label: '会員登録',
    link: '/',
  },
  {
    label: '運営会社',
    link: '/',
  },
  {
    label: '利用規約',
    link: '/',
  },
  {
    label: '個人情報の取扱について',
    link: '/',
  },
  {
    label: '特定商取引法に基づく表記',
    link: '/',
  },
  {
    label: 'お問い合わせ',
    link: '/',
  },
];

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className="container">
        {FOOTER_NAVIGATE?.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
