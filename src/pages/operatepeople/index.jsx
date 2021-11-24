import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';
import * as services from './service';

const actionRef = {};

const BanSourceStop = () => {
  // 删除记录
  const changeto = (record) => {
    history.push({ pathname: 'operatepeople/people', state: { record } });
  };
  const columns = [
    {
      title: '社团编号',
      dataIndex: 'Depart_id',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '社团名称',
      dataIndex: 'Depart_name',
      key: 'Depart_name',
    },
    {
      title: '成立时间',
      dataIndex: 'Depart_time',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '负责人',
      dataIndex: 'Depart_admin',
    },
    {
      title: '操作',
      hideInSearch: true, // 在搜索里屏蔽
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
        actionRef={actionRef}
        columns={columns}
        rowKey="Depart_id"
        options={false}
        request={(params) => services.getshowclublist(params)}
        /* dataSource={data} */
      />
    </>
  );
};

export default BanSourceStop;
