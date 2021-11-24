import { Space, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang, history } from 'umi';

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');
  const confirm = () => {
    history.push({ pathname: '/user/login' });
  };
  return (
    <div>
      <a>
        {initialState.currentUser?.Re_power === 'admin'
          ? `亲爱的管理员:${initialState.currentUser?.Re_name}欢迎您`
          : `亲爱的用户:${initialState.currentUser?.Re_name}欢迎您`}
      </a>
      <Popconfirm title="是否确认退出?" onConfirm={confirm} okText="Yes" cancelText="No">
        <a>退出登录</a>
      </Popconfirm>
    </div>
  );
};

export default GlobalHeaderRight;
