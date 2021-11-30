import React, { useState } from 'react';
import { Button, Tag, message, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import MoneyModal from './components/MoneyModal';
import * as services from './service';

const actionRef = {};
const { Option } = Select;
const Money = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = async (values) => {
    setIsModalVisible(false);
    // eslint-disable-next-line no-param-reassign
    values.Depart_id = record.Depart_id;
    // eslint-disable-next-line no-param-reassign
    values.Expense_charge = parseInt(values.Expense_charge, 10);
    const msg = await services.addmoney(values);
    if (msg.result === 'true') {
      message.success('添加成功!');
    } else message.error(msg.msg);
    actionRef.current.reload();
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
      hideInSearch: true,
    },
    {
      title: '收/支',
      dataIndex: 'Expense_method',
      renderFormItem: () => {
        return (
          <Select allowClear>
            <Option value="收入">收入</Option>
            <Option value="支出">支出</Option>
          </Select>
        );
      },
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
        request={(params) => services.getclubmoeny({ Depart_id: record.Depart_id, ...params })}
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
