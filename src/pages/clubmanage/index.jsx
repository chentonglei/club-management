import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';

const actionRef = {};
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
};
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
  const rowSelection = {
    // selectedRowKeys,
    onChange: (_selectedRowKeys, _selectedRows) => {
      setSelectedRowKeys(_selectedRowKeys);
      setSelectedRows(_selectedRows);
    },
  };
  const changeto = (record) => {
    history.push({ pathname: 'operatepeople/people', state: { record } });
  };
  const data = [
    {
      Dad_id: 111,
      Re_name: '陈彤磊',
      Dad_name: '无语协会',
      Dad_time: '2021-11-17',
      Dad_do: '建立',
      Dad_reason: '我很无语',
      Dad_introduction: '无语的协会',
      Dad_state: '审核中',
    },
    {
      Dad_id: 112,
      Re_name: '陈彤磊',
      Dad_name: '无语协会',
      Dad_time: '2021-11-17',
      Dad_do: '注销',
      Dad_reason: '我很无语',
      Dad_introduction: '无语的协会',
      Dad_state: '审核中',
    },
    {
      Dad_id: 111,
      Re_name: '陈彤磊',
      Dad_name: '无语协会',
      Dad_time: '2021-11-17',
      Dad_do: '建立',
      Dad_reason: '我很无语',
      Dad_introduction: '无语的协会',
      Dad_state: '已通过',
    },
    {
      Dad_id: 112,
      Re_name: '陈彤磊',
      Dad_name: '无语协会',
      Dad_time: '2021-11-17',
      Dad_do: '注销',
      Dad_reason: '我很无语',
      Dad_introduction: '无语的协会',
      Dad_state: '已拒绝',
    },
  ];
  const columns = [
    {
      title: '申请人',
      dataIndex: 'Re_name',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '申请社团名称',
      dataIndex: 'Dad_name',
      key: 'Dad_name',
    },
    {
      title: '申请时间',
      dataIndex: 'Dad_time',
    },
    {
      title: '建立/操作',
      dataIndex: 'Dad_do',
      render: (_, record) => [
        <Tag color={record.Dad_do === '建立' ? 'success' : 'error'} key={'tag'}>
          {record.Dad_do}
        </Tag>,
      ],
    },
    {
      title: '原因',
      dataIndex: 'Dad_reason',
    },
    {
      title: '简介',
      dataIndex: 'Dad_introduction',
    },
    {
      title: '状态',
      dataIndex: 'Dad_state',
      render: (_, record) => [
        <Tag color={color[record.Dad_state]} key={'tag'}>
          {record.Dad_state}
        </Tag>,
      ],
    },
    {
      title: '操作',
      render: (_, record) => [
        record.Dad_state === '审核中' ? (
          <>
            <a>通过</a>&nbsp;&nbsp;
            <a>拒绝</a>
          </>
        ) : (
          '---'
        ),
      ],
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="换届审核列表"
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Change_id"
        options={false}
        rowSelection={rowSelection}
        /* search={false} */
        dataSource={data}
      />
    </>
  );
};

export default BanSourceStop;
