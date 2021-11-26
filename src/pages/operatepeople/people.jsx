import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select } from 'antd';
import { history, useModel } from 'umi';
import ProTable from '@ant-design/pro-table';
import DisbandModal from './components/DisbandModal';
import InformationModal from './components/InformationModal';
import * as services from './service';

const actionRef = {};

const People = (props) => {
  // 删除记录
  const { initialState } = useModel('@@initialState');
  const { record } = props.location.state;
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const moneylist = () => {
    history.push({ pathname: 'money', state: { record } });
  };
  const handleOk3 = () => {
    setIsModalVisible3(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible3(false);
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
    const msg = await services.setting(body);
    if (msg.result === 'true') {
      message.success('修改成功');
      // eslint-disable-next-line no-const-assign
      const newdata = await services.show(data);
      record.Depart_notice = newdata.data[0].Depart_notice;
      history.push({ pathname: '/operatepeople/people', state: { record } });
    } else message.error(msg.msg);
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
          {record.Re_id !== record2.Re_id ? (
            <Popconfirm
              title="是否确定退出协会"
              onConfirm={() => exit(record2)}
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
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Re_id"
        options={false}
        /*  rowSelection={rowSelection}
        tableAlertOptionRender={() => (
          <Popconfirm
            title="确定要解散以下社团吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={() => handleDelete()}
          >
            <a>解散社团</a>
          </Popconfirm>
        )} */
        /* search={false} */
        request={() => services.getpeople(record)}
        toolBarRender={() => [
          <Button key="information" onClick={() => showinformation()}>
            <a>查看协会信息</a>
          </Button>,
          <Button key="active" onClick={() => showactive()}>
            <a>查看活动</a>
          </Button>,
          <Button key="notice" onClick={() => moneylist()}>
            <a>查看财务报表</a>
          </Button>,
        ]}
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
