import React, { useState } from 'react';
import { Button, Popconfirm, message } from 'antd';
import { history, useModel } from 'umi';
import ProTable from '@ant-design/pro-table';
import ChangeModal from './components/ChangeModal';
import DisbandModal from './components/DisbandModal';
import InformationModal from './components/InformationModal';
import * as services from './service';

const actionRef = {};

const People = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const { initialState } = useModel('@@initialState');
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const moneylist = () => {
    history.push({ pathname: 'money', state: { record } });
  };
  const sendactive = () => {
    history.push({ pathname: 'active', state: { record } });
  };
  const handleOk2 = async (body) => {
    setIsModalVisible2(false);
    // eslint-disable-next-line no-param-reassign
    body.Depart_id = record.Depart_id;
    // eslint-disable-next-line no-param-reassign
    body.Change_old = record.Depart_admin;
    const msg = await services.election(body);
    if (msg.result === 'true') message.success('已提交申请');
    else message.error(msg.msg);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const sendchange = () => {
    setIsModalVisible2(true);
  };
  const cancel = (e) => {
    console.log(e);
  };
  const handleOk3 = async (body) => {
    setIsModalVisible3(false);
    // eslint-disable-next-line no-param-reassign
    body.Dad_name = record.Depart_name;
    // eslint-disable-next-line no-param-reassign
    body.Re_name = record.Depart_admin;
    // eslint-disable-next-line no-param-reassign
    body.Re_id = record.Re_id;
    const msg = await services.cancel(body);
    if (msg.result === 'true') message.success('已提交申请');
    else message.error(msg.msg);
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
  const handleOk5 = async (body) => {
    setIsModalVisible5(false);
    const data = {};
    data.Depart_id = record.Depart_id;
    // eslint-disable-next-line no-param-reassign
    body.Depart_id = record.Depart_id;
    if (record.Re_id === initialState.currentUser.Re_id) {
      const msg = await services.setting(body);
      if (msg.result === 'true') {
        message.success('修改成功');
        // eslint-disable-next-line no-const-assign
        const newdata = await services.show(data);
        record.Depart_notice = newdata.data[0].Depart_notice;
        history.push({ pathname: '/joinedclub/club', state: { record } });
      } else message.error(msg.msg);
    } else {
      message.error('无权修改');
    }
  };
  const handleCancel5 = () => {
    setIsModalVisible5(false);
  };
  const exit = async (body) => {
    const data = {};
    console.log(body);
    data.Re_id = body.Re_id;
    data.Depart_id = record.Depart_id;
    const msg = await services.exit(data);
    if (msg.result === 'true') {
      message.success('已踢出协会');
      actionRef.current.reload();
    } else message.error(msg.msg);
  };
  const exit2 = async () => {
    const data = {};
    data.Re_id = initialState.currentUser.Re_id;
    data.Depart_id = record.Depart_id;
    const msg = await services.exit(data);
    if (msg.result === 'true') {
      message.success('已退出协会');
      history.push('/joinedclub');
    } else message.error(msg.msg);
  };
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
      render: (_, record2) => [
        <>{record.Re_id === record2.Re_id ? <span>会长</span> : <span>成员</span>}</>,
      ],
    },
    {
      title: '操作',
      render: (_, record2) => [
        <>
          {record.Re_id === initialState.currentUser.Re_id &&
          record2.Re_id !== initialState.currentUser.Re_id ? (
            <Popconfirm
              title="是否确定退出协会"
              onConfirm={() => exit(record2)}
              onCancel={cancel}
              okText="确定"
              cancelText="取消"
              key="leave"
            >
              <a key="exitpeople">踢出协会</a>
            </Popconfirm>
          ) : (
            '-'
          )}
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
        request={() => services.getpeople(record)}
        toolBarRender={() => [
          <Button key="information" onClick={() => showinformation()}>
            <a>查看协会信息</a>
          </Button>,
          <Button key="active" onClick={() => showactive()}>
            <a>查看活动</a>
          </Button>,
          record.Re_id === initialState.currentUser.Re_id ? (
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
            onConfirm={exit2}
            onCancel={cancel}
            okText="确定"
            cancelText="取消"
            key="leave"
          >
            <Button key="notice">
              <a>退出协会</a>
            </Button>
          </Popconfirm>,
        ]}
      />
      <ChangeModal // component 下 弹窗
        visible={isModalVisible2} // 可见型
        closeHandler={handleCancel2}
        onFinish={handleOk2}
        record={record}
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
