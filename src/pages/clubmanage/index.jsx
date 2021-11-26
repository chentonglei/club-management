import React, { useState } from 'react';
import { Tag, message, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import * as services from './service';
import InformationModal from './components/InformationModal';

const actionRef = {};
const { Option } = Select;
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
      title: '申请人',
      dataIndex: 'Re_name',
    },
    {
      title: '社团名称',
      dataIndex: 'Dad_name',
      key: 'Dad_name',
    },
    {
      title: '申请时间',
      dataIndex: 'Dad_time',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '建立/注销',
      dataIndex: 'Dad_do',
      render: (_, record) => [
        <Tag color={record.Dad_do === '建立' ? 'success' : 'error'} key={'tag'}>
          {record.Dad_do}
        </Tag>,
      ],
      renderFormItem: () => {
        return (
          <Select>
            <Option value="建立">建立</Option>
            <Option value="注销">注销</Option>
          </Select>
        );
      },
    },
    {
      title: '原因',
      dataIndex: 'Dad_reason',
      ellipsis: true,
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '简介',
      dataIndex: 'Dad_introduction',
      ellipsis: true,
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '状态',
      dataIndex: 'Dad_state',
      render: (_, record) => [
        <Tag color={color[record.Dad_state]} key={'tag'}>
          {record.Dad_state}
        </Tag>,
      ],
      renderFormItem: () => {
        return (
          <Select>
            <Option value="审核中">审核中</Option>
            <Option value="已通过">已通过</Option>
            <Option value="已通过">已拒绝</Option>
          </Select>
        );
      },
    },
    {
      title: '操作',
      hideInSearch: true, // 在搜索里屏蔽
      render: (_, record) => [
        record.Dad_do === '建立' ? (
          <a key="showmore" onClick={() => showmore(record)}>
            查看更多
          </a>
        ) : (
          ''
        ),
        record.Dad_state === '审核中' ? (
          <>
            &nbsp;&nbsp;<a onClick={() => tongyi(record)}>通过</a>&nbsp;&nbsp;
            <a onClick={() => jujue(record)}>拒绝</a>
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
        headerTitle="社团成立/注销审核列表"
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
