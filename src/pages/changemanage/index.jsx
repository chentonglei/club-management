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
      Change_id: 111,
      Change_old: '萌萌姐',
      Change_new: '陈彤磊',
      Change_reason: '正常换届',
      Change_time: '2021-11-15',
      Change_state: '审核中',
    },
    {
      Change_id: 112,
      Change_old: '雯姐',
      Change_new: '磊哥',
      Change_reason: '磊哥太优秀',
      Change_time: '2021-11-15',
      Change_state: '已拒绝',
    },
    {
      Change_id: 113,
      Change_old: '雯姐',
      Change_new: '磊哥',
      Change_reason: '磊哥真的太优秀！！',
      Change_time: '2021-11-15',
      Change_state: '已成功',
    },
  ];
  const columns = [
    {
      title: '申请人',
      dataIndex: 'Change_old',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '申请时间',
      dataIndex: 'Change_time',
      key: 'Change_time',
    },
    {
      title: '新会长',
      dataIndex: 'Change_new',
    },
    {
      title: '申请原因',
      dataIndex: 'Change_reason',
    },
    {
      title: '状态',
      dataIndex: 'Change_state',
      render: (_, record) => [
        <Tag color={record.Change_state === '审核中' ? 'success' : 'error'} key={'tag'}>
          {record.Change_state}
        </Tag>,
      ],
    },
    {
      title: '操作',
      render: (_, record) => [
        record.Change_state === '审核中' ? (
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
