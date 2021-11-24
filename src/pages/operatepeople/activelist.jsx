import React from 'react';
import { Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import { useModel } from 'umi';
import * as services from './service';

const actionRef = {};
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
};

const BanSourceStop = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const { initialState } = useModel('@@initialState');
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
      render: (_, record2) => [
        <Tag color={color[record2.Action_state]} key={'tag'}>
          {record2.Action_state}
        </Tag>,
      ],
    },
    {
      title: '操作',
      hideInSearch: true, // 在搜索里屏蔽
      render: (_, record2) => [
        record2.Action_state === '已通过' &&
        record.Depart_admin === initialState.currentUser.Re_name ? (
          <>
            <a>已完结</a>
          </>
        ) : (
          '-'
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
        request={() => services.getaction(record)}
      />
    </>
  );
};

export default BanSourceStop;
