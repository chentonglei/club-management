import { PageLoading } from '@ant-design/pro-layout';
import { history, Link, useModel } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { Popconfirm } from 'antd';
import { currentUser as queryCurrentUser, login } from './services/ant-design-pro/api';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
/* import cookie from 'react-cookies'; */

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */

export const initialStateConfig = {
  loading: <PageLoading />,
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState() {
  /*  return {
    currentUser: {},
    settings: {},
  }; */
  const fetchUserInfo = async () => {
    try {
      const id = localStorage.getItem('UserId');
      /* const id = cookie.load('UserId'); */
      console.log(id);
      const data = {
        UserId: id,
      };
      const currentUser = await queryCurrentUser(data);
      return currentUser.data;
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  }; // 如果是登录页面，不执行

  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }

  return {
    fetchUserInfo,
    settings: {},
  };
} // ProLayout 支持的api https://procomponents.ant.design/components/layout

const right = () => {
  const confirm = () => {
    history.push({ pathname: '/user/login' });
  };
  return (
    <div>
      <Popconfirm title="是否确认退出?" onConfirm={confirm} okText="Yes" cancelText="No">
        <a>退出登录</a>
      </Popconfirm>
    </div>
  );
};

export const layout = ({ initialState }) => {
  return {
    /* rightContentRender: () => <RightContent />,, */
    rightContentRender: right,
    disableContentMargin: false,
    /* waterMarkProps: {
      content: initialState?.currentUser?.Re_name,
    }, */
    footerRender: () => <Footer />,
    /*  onPageChange: () => {
      if ((<Exception type="404" />)) history.push(loginPath);
    }, */
    /*   links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [], */
    menuHeaderRender: undefined,
    collapsedButtonRender: false, // 去掉回弹栏
    // 自定义 403 页面
    /* unAccessible: history.push(loginPath), */
    ...initialState?.settings,
  };
};
