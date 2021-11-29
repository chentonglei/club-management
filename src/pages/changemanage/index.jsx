import React from 'react';
import { Tag, message, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import * as services from './service';

const actionRef = {};
const { Option } = Select;
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
};
const BanSourceStop = () => {
  // 删除记录
  const tongyi = async (record) => {
    // eslint-disable-next-line no-param-reassign
    record.audit = true;
    const msg = await services.doit(record);
    if (msg.result === 'true') message.success('已成功');
    else message.error('同意失败');
    actionRef.current.reload();
  };
  const jujue = async (record) => {
    // eslint-disable-next-line no-param-reassign
    record.audit = false;
    const msg = await services.doit(record);
    if (msg.result === 'false') message.success('已拒绝');
    else message.error('拒绝失败');
    actionRef.current.reload();
  };
  const columns = [
    {
      title: '申请人',
      dataIndex: 'Change_old',
    },
    {
      title: '申请时间',
      dataIndex: 'Change_time',
      key: 'Change_time',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '协会名',
      dataIndex: 'Depart_name',
    },
    {
      title: '新会长',
      dataIndex: 'Change_new',
    },
    {
      title: '申请原因',
      hideInSearch: true, // 在搜索里屏蔽
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
      renderFormItem: () => {
        return (
          <Select allowClear>
            <Option value="审核中">审核中</Option>
            <Option value="已通过">已通过</Option>
            <Option value="已拒绝">已拒绝</Option>
          </Select>
        );
      },
    },
    {
      title: '操作',
      hideInSearch: true, // 在搜索里屏蔽
      render: (_, record) => [
        record.Change_state === '审核中' ? (
          <>
            <a onClick={() => tongyi(record)}>通过</a>&nbsp;&nbsp;
            <a onClick={() => jujue(record)}>拒绝</a>
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
