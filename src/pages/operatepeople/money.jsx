import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import MoneyModal from './components/MoneyModal';
import * as services from './service';

const actionRef = {};

const Money = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = (values) => {
    setIsModalVisible(false);
    console.log(values);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const addmoney = () => {
    setIsModalVisible(true);
  };
  const columns = [
    {
      title: '金额',
      dataIndex: 'Expense_charge',
      key: 'Expense_charge',
      hideInSearch: true,
    },
    {
      title: '时间',
      dataIndex: 'Expense_time',
      key: 'Expense_time',
    },
    {
      title: '收/支',
      dataIndex: 'Expense_method',
      render: (tags) => (
        <>
          {
            <Tag color={tags === '收入' ? 'success' : 'error'} key={'tag'}>
              {tags}
            </Tag>
          }
        </>
      ),
    },
    {
      title: '剩余金额',
      dataIndex: 'Expense_surplus',
      hideInSearch: true,
    },
    {
      title: '用途',
      dataIndex: 'Expense_notes',
      hideInSearch: true,
    },
  ];
  return (
    <>
      <ProTable
        headerTitle={`${record.Depart_name}的财务报表`}
        actionRef={actionRef}
        columns={columns}
        rowKey="Expense_id"
        options={false}
        /* search={false} */
        /* dataSource={data} */
        request={() => services.getclubmoeny(record)}
        toolBarRender={() => [
          <Button key="addmoney" onClick={() => addmoney()}>
            <a>添加财务</a>
          </Button>,
        ]}
      />
      <MoneyModal // component 下 弹窗
        visible={isModalVisible} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk}
      />
    </>
  );
};

export default Money;
