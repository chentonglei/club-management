import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';
import InformationModal from './components/InformationModal';

const actionRef = {};

const Userlist = () => {
  // 删除记录
  const [regions, setRegions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
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
  const rowSelection = {
    // selectedRowKeys,
    onChange: (_selectedRowKeys, _selectedRows) => {
      setSelectedRowKeys(_selectedRowKeys);
      setSelectedRows(_selectedRows);
    },
  };
  const handleOk = (record) => {
    setIsModalVisible(false);
    console.log(record);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showinformation = (record) => {
    setIsModalVisible(true);
    setRegions(record);
  };
  const confirm = () => {};
  const data = [
    {
      Re_id: '3181911220',
      Re_name: '陈彤磊',
      Re_sex: '男',
      Re_email: '382023278@qq.com',
      Re_age: '1999-11-20',
      Re_telephone: '18859144927',
      Re_address: '福建省福州市闽侯县福建工程学院旗山北校区',
    },
    {
      Re_id: '3181911222',
      Re_name: '李志诚',
      Re_sex: '男',
      Re_email: '1008611@qq.com',
      Re_age: '1999-11-20',
      Re_telephone: '18859144927',
      Re_address: '福建省福州市闽侯县福建工程学院旗山北校区',
    },
    {
      Re_id: '3181911223',
      Re_name: '宏宏',
      Re_sex: '',
      Re_email: '382023278@qq.com',
      Re_age: '1999-11-20',
      Re_telephone: '18859144927',
      Re_address: '福建省福州市闽侯县福建工程学院旗山北校区',
    },
  ];
  const columns = [
    {
      title: '账号',
      dataIndex: 'Re_id',
    },
    {
      title: '姓名',
      dataIndex: 'Re_name',
    },
    {
      title: '性别',
      dataIndex: 'Re_sex',
    },
    {
      title: '邮箱',
      dataIndex: 'Re_email',
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
      title: '操作（初始密码为123456）',
      hideInSearch: true, // 在搜索里屏蔽
      render: (_, record) => [
        <>
          <a onClick={() => showinformation(record)}>修改信息</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Popconfirm
            key="delete"
            title="是否确认初始化"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <a>初始化密码</a>
          </Popconfirm>
        </>,
      ],
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="用户信息表"
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Re_id"
        options={false}
        rowSelection={rowSelection}
        /* search={false} */
        tableAlertOptionRender={() => (
          <Popconfirm
            title="确定要删除以下用户吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={() => handleDelete()}
          >
            <a>删除用户</a>
          </Popconfirm>
        )}
        dataSource={data}
      />
      <InformationModal // component 下 弹窗
        visible={isModalVisible} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk}
        record={regions}
      />
    </>
  );
};

export default Userlist;
