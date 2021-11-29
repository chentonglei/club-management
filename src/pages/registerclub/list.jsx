import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history, useModel } from 'umi';
import * as services from './service';

const actionRef = {};
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
};
const BanSourceStop = () => {
  // 删除记录
  const { initialState } = useModel('@@initialState');
  const data = {};
  data.Re_id = initialState.currentUser.Re_id;
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
      render: (_, record) => [
        <Tag color={record.Dad_do === '建立' ? 'success' : 'error'} key={'tag'}>
          {record.Dad_do}
        </Tag>,
      ],
    },
    {
      title: '状态',
      dataIndex: 'Dad_state',
      render: (item) => [
        <Tag color={color[item]} key={'tag'}>
          {item}
        </Tag>,
      ],
    },
    /* {
      title: '操作',
      render: (_, record) => [
        <a key="config" onClick={() => changeto(record)}>
          撤销
        </a>,
      ],
    }, */
  ];
  return (
    <>
      <ProTable
        headerTitle="操作列表"
        actionRef={actionRef}
        columns={columns}
        rowKey="Dad_id"
        options={false}
        search={false}
        request={() => services.getlist(data)}
      />
    </>
  );
};

export default BanSourceStop;
