import React from 'react';
import { Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import * as services from './service';

const actionRef = {};
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
};
const BanSourceStop = () => {
  // 删除记录
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
        <Tag color={color[record.Change_state]} key={'tag'}>
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
        actionRef={actionRef}
        columns={columns}
        rowKey="Change_id"
        options={false}
        /* search={false} */
        request={(params) => services.getchangemanage(params)}
      />
    </>
  );
};

export default BanSourceStop;
