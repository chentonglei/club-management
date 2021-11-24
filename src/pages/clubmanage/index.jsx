import React, { useState } from 'react';
import { Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import * as services from './service';
import InformationModal from './components/InformationModal';

const actionRef = {};
const color = {
  审核中: 'processing',
  已通过: 'success',
  已拒绝: 'error',
};
const BanSourceStop = () => {
  // 删除记录
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [region, setRegion] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showmore = (record) => {
    setRegion(record);
    setIsModalVisible(true);
  };
  const columns = [
    {
      title: '申请人',
      dataIndex: 'Re_name',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '申请社团名称',
      dataIndex: 'Dad_name',
      key: 'Dad_name',
    },
    {
      title: '申请时间',
      dataIndex: 'Dad_time',
    },
    {
      title: '建立/操作',
      dataIndex: 'Dad_do',
      render: (_, record) => [
        <Tag color={record.Dad_do === '建立' ? 'success' : 'error'} key={'tag'}>
          {record.Dad_do}
        </Tag>,
      ],
    },
    {
      title: '原因',
      dataIndex: 'Dad_reason',
      ellipsis: true,
    },
    {
      title: '简介',
      dataIndex: 'Dad_introduction',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'Dad_state',
      render: (_, record) => [
        <Tag color={color[record.Dad_state]} key={'tag'}>
          {record.Dad_state}
        </Tag>,
      ],
    },
    {
      title: '操作',
      render: (_, record) => [
        <a key="showmore" onClick={() => showmore(record)}>
          查看更多
        </a>,
        record.Dad_state === '审核中' ? (
          <>
            &nbsp;&nbsp;<a>通过</a>&nbsp;&nbsp;
            <a>拒绝</a>
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
        headerTitle="换届审核列表"
        actionRef={actionRef}
        columns={columns}
        rowKey="Change_id"
        options={false}
        /* search={false} */
        request={() => services.getclubmanage()}
      />
      <InformationModal // component 下 弹窗
        visible={isModalVisible} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk}
        record={region}
      />
    </>
  );
};

export default BanSourceStop;
