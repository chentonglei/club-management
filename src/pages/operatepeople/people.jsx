import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select } from 'antd';
import { history } from 'umi';
import ProTable from '@ant-design/pro-table';
import DisbandModal from './components/DisbandModal';
import ActiveModal from './components/ActiveModal';
import InformationModal from './components/InformationModal';

const actionRef = {};

const People = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  /* const [selectedRows, setSelectedRows] = useState([]); */
  const handleDelete = async () => {
    console.log(selectedRowKeys);
    if (selectedRowKeys.length === 0) {
      message.error('请勾选复选框!');
      return;
    }
    const { data } = await services.deleteBanSongSource(selectedRowKeys);
    if (data.errorcode === 0) {
      message.success('删除成功！');
      setSelectedRowKeys([]);
      setSelectedRows([]);
      actionRef.current.reload();
    }
  };
  /*   const rowSelection = {
    // selectedRowKeys,
    onChange: (_selectedRowKeys, _selectedRows) => {
      setSelectedRowKeys(_selectedRowKeys);
      setSelectedRows(_selectedRows);
    },
  }; */
  const moneylist = (record2) => {
    console.log(record2);
    history.push({ pathname: 'money', state: { record: record2 } });
  };
  const handleOk3 = () => {
    setIsModalVisible3(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };
  const handleOk4 = () => {
    setIsModalVisible4(false);
  };
  const handleCancel4 = () => {
    setIsModalVisible4(false);
  };
  const showactive = () => {
    setIsModalVisible4(true);
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
        dataSource={data}
        toolBarRender={() => [
          <Button key="information" onClick={() => showinformation()}>
            <a>查看协会信息</a>
          </Button>,
          <Button key="active" onClick={() => showactive(record)}>
            <a>查看活动</a>
          </Button>,
          <Button key="notice" onClick={() => moneylist(record)}>
            <a>查看财务报表</a>
          </Button>,
        ]}
      />
      <DisbandModal // component 下 弹窗
        visible={isModalVisible3} // 可见型
        closeHandler={handleCancel3}
        onFinish={handleOk3}
      />
      <ActiveModal // component 下 弹窗
        visible={isModalVisible4} // 可见型
        closeHandler={handleCancel4}
        onFinish={handleOk4}
        record={record}
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
