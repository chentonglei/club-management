import React, { useState } from 'react';
import { Button, Popconfirm, message } from 'antd';
import { history, useModel } from 'umi';
import ProTable from '@ant-design/pro-table';
import ChangeModal from './components/ChangeModal';
import DisbandModal from './components/DisbandModal';
import InformationModal from './components/InformationModal';

const actionRef = {};

const People = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const { initialState } = useModel('@@initialState');
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  /* const [selectedRows, setSelectedRows] = useState([]); */
  /*   const rowSelection = {
    // selectedRowKeys,
    onChange: (_selectedRowKeys, _selectedRows) => {
      setSelectedRowKeys(_selectedRowKeys);
      setSelectedRows(_selectedRows);
    },
  }; */
  const moneylist = () => {
    history.push({ pathname: 'money', state: { record } });
  };
  const sendactive = () => {
    history.push({ pathname: 'active', state: { record } });
  };
  const handleOk2 = () => {
    setIsModalVisible2(false);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const sendchange = () => {
    setIsModalVisible2(true);
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  const handleOk3 = () => {
    setIsModalVisible3(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };
  const senddisband = () => {
    setIsModalVisible3(true);
  };
  const showactive = () => {
    history.push({ pathname: 'activelist', state: { record } });
  };
  const showinformation = () => {
    console.log(record);
    setIsModalVisible5(true);
  };
  const handleOk5 = () => {
    setIsModalVisible5(false);
  };
  const handleCancel5 = () => {
    setIsModalVisible5(false);
  };
  const data = [
    {
      Re_id: '123',
      Re_name: '陈彤磊',
      Re_email: '382023278@qq.com',
      Re_sex: '男',
      Re_age: 'age',
      Re_telephone: '18859144927',
      Re_address: '福建工程学院',
      Re_role: '会长',
    },
    {
      Re_id: '321',
      Re_name: '陈彤磊',
      Re_email: '382023278@qq.com',
      Re_sex: '男',
      Re_age: '18',
      Re_telephone: '18859144927',
      Re_address: '福建工程学院',
      Re_role: '干事',
    },
  ];
  const columns = [
    {
      title: '账号',
      dataIndex: 'Re_id',
      key: 'Re_id',
      /*       hideInSearch: true, // 在搜索里屏蔽 */
    },
    {
      title: '姓名',
      dataIndex: 'Re_name',
      key: 'Re_name',
    },
    {
      title: '邮箱',
      dataIndex: 'Re_email',
    },
    {
      title: '性别',
      dataIndex: 'Re_sex',
    },
    {
      title: '年龄',
      dataIndex: 'Re_age',
    },
    {
      title: '电话',
      dataIndex: 'Re_telephone',
    },
    {
      title: '地址',
      dataIndex: 'Re_address',
    },
    {
      title: '职位',
      dataIndex: 'Re_role',
    },

    {
      title: '操作',
      render: (_, record2) => [
        <>
          <a key="config">踢出协会</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a key="information">查看个人信息</a>
        </>,
      ],
    },
  ];
  return (
    <>
      <ProTable
        headerTitle={record.Depart_name}
        actionRef={actionRef}
        columns={columns}
        rowKey="Re_id"
        options={false}
        /* search={false} */
        dataSource={data}
        toolBarRender={() => [
          <Button key="information" onClick={() => showinformation()}>
            <a>查看协会信息</a>
          </Button>,
          <Button key="active" onClick={() => showactive()}>
            <a>查看活动</a>
          </Button>,
          record.Depart_admin === initialState.currentUser.Re_name ? (
            <>
              <Button key="notice" onClick={() => moneylist()}>
                <a>查看财务报表</a>
              </Button>

              <Button key="sendchange" onClick={() => sendchange()}>
                <a>申请换届</a>
              </Button>

              <Button key="active" onClick={() => sendactive()}>
                <a>申请活动</a>
              </Button>

              <Button key="sendchange" onClick={() => senddisband()}>
                <a>解散社团</a>
              </Button>
            </>
          ) : (
            ''
          ),
          <Popconfirm
            title="是否确定退出协会"
            onConfirm={confirm}
            onCancel={cancel}
            okText="确定"
            cancelText="取消"
            key="leave"
          >
            <Button key="notice">
              <a>退出协会</a>
            </Button>
            ,
          </Popconfirm>,
        ]}
      />
      <ChangeModal // component 下 弹窗
        visible={isModalVisible2} // 可见型
        closeHandler={handleCancel2}
        onFinish={handleOk2}
      />
      <DisbandModal // component 下 弹窗
        visible={isModalVisible3} // 可见型
        closeHandler={handleCancel3}
        onFinish={handleOk3}
      />
      <InformationModal // component 下 弹窗
        visible={isModalVisible5} // 可见型
        closeHandler={handleCancel5}
        onFinish={handleOk5}
        record={record}
      />
    </>
  );
};

export default People;
