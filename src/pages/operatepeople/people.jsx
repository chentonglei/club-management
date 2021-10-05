import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select } from 'antd';
import ProTable from '@ant-design/pro-table';

const actionRef = {};

const people = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const [regions, setRegions] = useState([]);
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
  const changeto = (record) => {
    setRegions(record);
    console.log(record);
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
      render: (_, record) => [
        <a key="config" onClick={() => changeto(record)}>
          查看详情
        </a>,
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
        rowSelection={rowSelection}
        tableAlertOptionRender={() => (
          <Popconfirm
            title="确定要解散以下社团吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={() => handleDelete()}
          >
            <a>解散社团</a>
          </Popconfirm>
        )}
        /* search={false} */
        dataSource={data}
      />
    </>
  );
};

export default people;
