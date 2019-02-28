/**
 * router 配置文件
 */
import Home from '../Components/home';
import User from '../Components/user/User';
import PicturesWall from '../Components/PicturesWall/PicturesWall';
import Mail from '../Components/mail/mail';
import barChart from '../Components/barChart/index';
const routes = [
  {
    key: 'home',
    path: '/',
    exact: 'exact',
    component: Home
  },
  {
    key: 'user',
    path: '/user',
    title: {
      icon: 'user',
      span: 'user'
    },
    component: User
  },
  {
    key: 'picturesWall',
    path: '/picturesWall',
    title: {
      icon: 'upload',
      span: 'picturesWall'
    },
    component: PicturesWall
  },
  {
    key: 'barChart',
    path: '/barChart',
    title: {
      icon: 'bar-chart',
      span: 'barChart'
    },
    component: barChart,
    routes: [
      {
        key: 'barChart1',
        path: '/barChart/barChart1',
        title: 'barChart1'
      },
      {
        key: 'barChart2',
        path: '/barChart/barChart2',
        title: 'barChart2'
      }
    ]
  },
  {
    key: 'mail',
    path: '/mail',
    title: {
      icon: 'mail',
      span: 'mail'
    },
    component: Mail,
    routes: [{
      key: 'mail1',
      path: '/mail/mail1',
      title: 'mail1'
    },
    {
      key: 'mail2',
      path: '/mail/mail2',
      title: 'mail2'
    },
    {
      key: 'mail3',
      path: '/mail/mail3',
      title: 'mail3'
    },
    {
      key: 'mail4',
      path: '/mail/mail4',
      title: 'mail4'
    }]
  },
  {
    key: 'cloudO',
    path: '/cloudO',
    title: {
      icon: 'cloud-o',
      span: 'cloudO'
    },
    component: ''
  },
  {
    key: 'appstoreO',
    path: '/appstoreO',
    title: {
      icon: 'appstore-o',
      span: 'appstoreO'
    },
    component: ''
  },
  {
    key: 'team',
    path: '/team',
    title: {
      icon: 'team',
      span: 'team'
    },
    component: ''
  },
  {
    key: 'shop',
    path: '/shop',
    title: {
      icon: 'shop',
      span: 'shop'
    },
    component: ''
  }
];

export default routes;