import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';

const actionRef = {};

const BanSourceStop = () => {
  // 删除记录
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
  const data = [
    {
      Dad_id: '111',
      Dad_name: '排球协会',
      Dad_time: '2021-11-6',
      Dad_do: '建立',
      Dad_state: '进行中',
    },
    {
      Dad_id: '222',
      Dad_name: '羽毛球协会',
      Dad_time: '2021-11-6',
      Dad_do: '建立',
      Dad_state: '已成功',
    },
  ];
  const columns = [
    {
      title: '社团名称',
      dataIndex: 'Dad_name',
    },
    {
      title: '时间',
      dataIndex: 'Dad_time',
      key: 'Dad_time',
    },
    {
      title: '操作',
      dataIndex: 'Dad_do',
    },
    {
      title: '状态',
      dataIndex: 'Dad_state',
      render: (item) => [
        <Tag color={item === '进行中' ? 'success' : 'error'} key={'tag'}>
          {item}
        </Tag>,
      ],
    },
    {
      title: '操作',
      render: (_, record) => [
        <a key="config" onClick={() => changeto(record)}>
          撤销
        </a>,
      ],
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="操作列表"
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Dad_id"
        options={false}
        search={false}
        dataSource={data}
      />
    </>
  );
};

export default BanSourceStop;
