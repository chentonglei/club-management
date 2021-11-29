import React from 'react';
import { Tag, message, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import { useModel } from 'umi';
import * as services from './service';

const actionRef = {};
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
  已结束: 'geekblue',
};
const { Option } = Select;

const BanSourceStop = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const { initialState } = useModel('@@initialState');
  const over = async (record2) => {
    const msg = await services.overaction(record2);
    if (msg.result === 'true') message.success('已完结');
    else message.error(msg.msg);
    actionRef.current.reload();
  };
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
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '活动内容',
      dataIndex: 'Action_content',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '活动地点',
      dataIndex: 'Action_address',
    },
    {
      title: '所需资金',
      dataIndex: 'Action_money',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '所需设备',
      dataIndex: 'Action_need',
    },
    {
      title: '活动社团',
      dataIndex: 'Depart_name',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '活动状态',
      dataIndex: 'Action_state',
      render: (_, record) => [
        <Tag color={color[record.Action_state]} key={'tag'}>
          {record.Action_state}
        </Tag>,
      ],
      renderFormItem: () => {
        return (
          <Select allowClear>
            <Option value="审核中">审核中</Option>
            <Option value="已通过">已通过</Option>
            <Option value="已拒绝">已拒绝</Option>
            <Option value="已结束">已结束</Option>
          </Select>
        );
      },
    },
    {
      title: '操作',
      hideInSearch: true, // 在搜索里屏蔽
      render: (_, record2) => [
        record2.Action_state === '已通过' &&
        record.Depart_admin === initialState.currentUser.Re_name ? (
          <>
            <a onClick={() => over(record2)}>已结束</a>
          </>
        ) : (
          ''
        ),
        record2.Action_state === '已通过' &&
        record.Depart_admin !== initialState.currentUser.Re_name ? (
          <>
            <a>{`参加联系社团会长${record.Depart_admin}`}</a>
          </>
        ) : (
          ''
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
        request={(params) => services.getaction({ ...params, Depart_id: record.Depart_id })}
      />
    </>
  );
};

export default BanSourceStop;
