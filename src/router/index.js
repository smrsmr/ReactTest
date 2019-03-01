/**
 * router 配置文件
 */
import asyncComponent from '../Components/AsyncComponent';
const routes = [
  {
    key: 'home',
    path: '/',
    exact: 'exact',
    component: asyncComponent(()=>import('../Components/Home'))
  },
  {
    key: 'user',
    path: '/user',
    title: {
      icon: 'user',
      span: 'user'
    },
    component: asyncComponent(()=>import('../Components/user/User'))
  },
  {
    key: 'picturesWall',
    path: '/picturesWall',
    title: {
      icon: 'upload',
      span: 'picturesWall'
    },
    component: asyncComponent(()=>import('../Components/PicturesWall/PicturesWall'))
  },
  {
    key: 'barChart',
    path: '/barChart',
    title: {
      icon: 'bar-chart',
      span: 'barChart'
    },
    component: asyncComponent(()=>import('../Components/barChart/index')),
    childrens: [
      {
        key: 'line',
        path: '/barChart/line',
        title: '折线图',
        iconf: '&#xe600;'
      },
      {
        key: 'bar',
        path: '/barChart/bar',
        title: '柱状图',
        iconf: '&#xe601;'
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
    component: asyncComponent(()=>import('../Components/mail/index')),
    childrens: [{
      key: 'write',
      path: '/mail/write',
      title: '写信',
      iconf: '&#xe606;'
    },
    {
      key: 'receiving',
      path: '/mail/receiving',
      title: '收信',
      iconf: '&#xe60f;'
    }]
  },
  {
    key: 'cloudO',
    path: '/cloudO',
    title: {
      icon: 'cloud-o',
      span: 'cloudO'
    },
    component: asyncComponent(()=>import('../Components/PicturesWall/PicturesWall'))
  },
  {
    key: 'appstoreO',
    path: '/appstoreO',
    title: {
      icon: 'appstore-o',
      span: 'appstoreO'
    },
    component: asyncComponent(()=>import('../Components/PicturesWall/PicturesWall'))
  },
  {
    key: 'team',
    path: '/team',
    title: {
      icon: 'team',
      span: 'team'
    },
    component: asyncComponent(()=>import('../Components/PicturesWall/PicturesWall'))
  },
  {
    key: 'shop',
    path: '/shop',
    title: {
      icon: 'shop',
      span: 'shop'
    },
    component: asyncComponent(()=>import('../Components/PicturesWall/PicturesWall'))
  }
];

export default routes;