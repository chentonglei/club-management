import React from 'react';
import { message, Tag, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import * as services from './service';

const actionRef = {};
const { Option } = Select;
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
  已结束: 'geekblue',
};

const BanSourceStop = () => {
  // 删除记录
  const tongyi = async (record) => {
    // eslint-disable-next-line no-param-reassign
    record.audit = true;
    const msg = await services.doit(record);
    if (msg.msg === '审核通过') message.success('已通过');
    else message.error(msg.msg);
    actionRef.current.reload();
  };
  const jujue = async (record) => {
    // eslint-disable-next-line no-param-reassign
    record.audit = false;
    const msg = await services.doit(record);
    if (msg.msg === '审核未通过') message.success('已拒绝');
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
      render: (_, record) => [
        record.Action_state === '审核中' ? (
          <>
            <a onClick={() => tongyi(record)}>通过</a>&nbsp;&nbsp;
            <a onClick={() => jujue(record)}> 拒绝</a>
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
