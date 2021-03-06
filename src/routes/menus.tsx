import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import React from 'react';
import { PATH } from 'src/routes/path';

export const menus = [
  {
    key: PATH.HOME,
    name: 'Dashboard',
    hasChild: false,
    path: PATH.HOME,
    icon: <PieChartOutlined />,
    children: [],
    breadcrumbName: 'Dashboard',
    hidden: false,
  },
  {
    key: PATH.SCHEDULE_MANAGEMENT,
    name: 'Schedules',
    hasChild: true,
    path: PATH.SCHEDULE_MANAGEMENT,
    icon: <PieChartOutlined />,
    breadcrumbName: 'Schedule management',
    hidden: false,
    children: [
      {
        key: PATH.SCHEDULE_LIST,
        name: 'Schedule list',
        hasChild: false,
        path: PATH.SCHEDULE_LIST,
        breadcrumbName: 'Schedule list',
        hidden: false,
      },
      {
        key: PATH.SCHEDULE_DETAIL,
        name: 'Schedule Detail',
        hasChild: false,
        path: PATH.SCHEDULE_DETAIL.replace('/:id', '').replace('/:abc', ''),
        breadcrumbName: 'Schedule Detail',
        hidden: true,
      },
    ],
  },
];
