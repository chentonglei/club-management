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
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '活动社团',
      dataIndex: 'Depart_name',
    },
    {
      title: '活动状态',
      dataIndex: 'Action_state',
      render: (_, record) => [
        <Tag color={color[record.Action_state]} key={'tag'}>
          {record.Action_state}
        </Tag>,
      ],
    },
    {
      title: '操作',
      hideInSearch: true, // 在搜索里屏蔽
      render: (_, record) => [
        record.Action_state === '审核中' ? (
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
        headerTitle="活动审核列表"
        actionRef={actionRef}
        columns={columns}
        rowKey="Action_id"
        options={false}
        /* search={false} */
        request={(params) => services.getactivelist(params)}
      />
    </>
  );
};

export default BanSourceStop;
