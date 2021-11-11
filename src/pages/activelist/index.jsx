import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select } from 'antd';
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
      Action_id: 111,
      Action_name: '新老生聚会',
      Action_time: '2021-11-11',
      Action_address: '云香',
      Action_content: '老生和新生的聚会',
      Action_need: '无',
      Depart_name: '排球协会',
      Action_state: '进行中',
    },
    {
      Action_id: 111,
      Action_name: '新老生聚会',
      Action_time: '2021-11-11',
      Action_address: '云香',
      Action_content: '老生和新生的聚会',
      Action_need: '无',
      Depart_name: '排球协会',
      Action_state: '已结束',
    },
  ];
  const columns = [
    {
      title: '活动名称',
      dataIndex: 'Action_name',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '活动时间',
      dataIndex: 'Action_time',
      key: 'Action_time',
    },
    {
      title: '活动地点',
      dataIndex: 'Action_address',
    },
    {
      title: '活动内容',
      dataIndex: 'Action_content',
    },
    {
      title: '所需资金和场地',
      dataIndex: 'Action_need',
    },
    {
      title: '活动社团',
      dataIndex: 'Depart_name',
    },
    {
      title: '活动状态',
      dataIndex: 'Action_state',
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
        headerTitle="社团列表"
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Depart_id"
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

export default BanSourceStop;
