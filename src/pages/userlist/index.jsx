import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';
import * as services from './service';

import InformationModal from './components/InformationModal';

const { Option } = Select;
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
  const handleOk = async (record) => {
    setIsModalVisible(false);
    console.log(record);
    const msg = await services.setting(record);
    if (msg.result === 'true') {
      message.success('修改成功');
      actionRef.current.reload();
    } else message.error(msg.msg);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showinformation = (record) => {
    setIsModalVisible(true);
    setRegions(record);
  };
  const confirm = async (data) => {
    const msg = await services.initpwd(data);
    if (msg.result === 'true') {
      message.success('初始化成功');
    } else message.error(msg.msg);
  };
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
      renderFormItem: () => {
        return (
          <Select>
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        );
      },
    },
    {
      title: '邮箱',
      dataIndex: 'Re_email',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '电话',
      dataIndex: 'Re_telephone',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '地址',
      dataIndex: 'Re_address',
      hideInSearch: true, // 在搜索里屏蔽
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
            onConfirm={() => confirm(record)}
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
        request={(params) => services.getlist(params)}
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
