// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
      ],
    },
    {
      name: 'showclublist',
      path: '/showclublist',
      component: './showclublist',
      access: 'canUser',
    },
    {
      name: 'operatepeople',
      path: '/operatepeople',
      access: 'canAdmin',
      routes: [
        {
          path: '/operatepeople',
          component: './operatepeople/index.jsx',
        },
        {
          name: 'people',
          hideInMenu: true,
          path: '/operatepeople/people',
          component: './operatepeople/people.jsx',
        },
        {
          name: 'money',
          hideInMenu: true,
          path: '/operatepeople/money',
          component: './operatepeople/money.jsx',
        },
        {
          name: 'activelist',
          hideInMenu: true,
          path: '/operatepeople/activelist',
          component: './operatepeople/activelist.jsx',
        },
      ],
    },
    {
      name: 'activelist',
      path: '/activelist',
      access: 'canAdmin',
      routes: [
        {
          path: '/activelist',
          component: './activelist/index.jsx',
        },
      ],
    },
    {
      name: 'clubmanage',
      path: '/clubmanage',
      access: 'canAdmin',
      routes: [
        {
          path: '/clubmanage',
          component: './clubmanage/index.jsx',
        },
      ],
    },
    {
      name: 'changemanage',
      path: '/changemanage',
      access: 'canAdmin',
      routes: [
        {
          path: '/changemanage',
          component: './changemanage/index.jsx',
        },
      ],
    },
    {
      name: 'sitelist',
      path: '/sitelist',
      access: 'canAdmin',
      routes: [
        {
          path: '/sitelist',
          component: './sitelist/index.jsx',
        },
      ],
    },
    {
      name: 'equipmentlist',
      path: '/equipmentlist',
      access: 'canAdmin',
      routes: [
        {
          path: '/equipmentlist/',
          component: './equipmentlist/index.jsx',
        },
      ],
    },
    {
      name: 'registerclub',
      path: '/registerclub',
      access: 'canUser',
      routes: [
        {
          name: 'build',
          path: '/registerclub/build',
          component: './registerclub/index',
        },
        {
          name: 'list',
          path: '/registerclub/list',
          component: './registerclub/list.jsx',
        },
      ],
    },
    {
      name: 'joinedclub',
      path: '/joinedclub',
      access: 'canUser',
      routes: [
        {
          path: '/joinedclub',
          component: './joinedclub/index.jsx',
        },
        {
          name: 'club',
          hideInMenu: true,
          path: '/joinedclub/club',
          component: './joinedclub/club.jsx',
        },
        {
          name: 'money',
          hideInMenu: true,
          path: '/joinedclub/money',
          component: './joinedclub/money.jsx',
        },
        {
          name: 'active',
          hideInMenu: true,
          path: '/joinedclub/active',
          component: './joinedclub/active.jsx',
        },
        {
          name: 'activelist',
          hideInMenu: true,
          path: '/joinedclub/activelist',
          component: './joinedclub/activelist.jsx',
        },
      ],
    },
    {
      name: 'userlist',
      path: '/userlist',
      access: 'canAdmin',
      routes: [
        {
          path: '/userlist',
          component: './userlist/index.jsx',
        },
      ],
    },
    {
      name: 'usersettings',
      path: '/usersettings',
      routes: [
        {
          path: '/usersettings',
          component: './usersettings/index.jsx',
        },
      ],
    },
    {
      name: 'pwdmange',
      path: '/pwdmange',
      routes: [
        {
          path: '/pwdmange',
          component: './pwdmange/index.jsx',
        },
      ],
    },
    {
      path: '/',
      /* redirect: '/dashboard/analysis', */
      redirect: '/user/login',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
