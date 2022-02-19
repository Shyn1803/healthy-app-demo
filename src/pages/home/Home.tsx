import React from 'react';
import { Progress } from 'antd';
import Image from 'src/components/image/Image';
import BannerPhoto from 'src/assets/photos/banner-photo.png';
import BannerPhoto2x from 'src/assets/photos/banner-photo-2x.png';
import { KnifeIcon } from 'src/icons/KnifeIcon';
import { CupIcon } from 'src/icons/CupIcon';
import HexagonMenu from 'src/components/hexagonMenu';
import FoodComponent from 'src/components/foodComponent';
import { FOOD_DATA } from 'src/utils/data';
import styles from './Home.module.scss';

const HEXAGON_MENU = [
  {
    icon: KnifeIcon,
    label: 'Morning',
  },
  {
    icon: KnifeIcon,
    label: 'Lunch',
  },
  {
    icon: KnifeIcon,
    label: 'Dinner',
  },
  {
    icon: CupIcon,
    label: 'Snack',
  },
];

function Homepage() {
  // const user = useSelector((state: any) => state.collapsed.isCollapsed);

  const onLoadMoreFood = () => {
    console.log('load more food.');
  };

  return (
    <div className={styles.homepageContainer}>
      <div className="banner-container">
        <div className="left">
          <Image source={BannerPhoto} source2x={BannerPhoto2x} alt="banner-photo" isLocal />
          <Progress type="circle" width={181} strokeWidth={3} percent={75} showInfo={false} className="progress" />
          <div className="content">
            <div className="info">
              <span className="index">05/21</span>
              <span className="percent">75%</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="chart-wrapper"></div>
        </div>
      </div>
      <div className="container">
        <div className="hexagon-menu">
          {HEXAGON_MENU.map((item) => {
            return <HexagonMenu key={item.label} label={item.label} icon={item.icon} />;
          })}
        </div>

        <div className="food-list-wrapper">
          {FOOD_DATA?.map(
            (item: { imageUrl: string; date: string; period: string }, index: React.Key | null | undefined) => {
              const { imageUrl, date, period } = item;
              return <FoodComponent key={index} imageUrl={imageUrl} date={date} period={period} />;
            },
          )}
        </div>
        <div className="btn-wrapper">
          <button className="btn-load-more" onClick={onLoadMoreFood}>
            記録をもっと見る
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
