import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select, Tag } from 'antd';
import ProTable from '@ant-design/pro-table';
import MoneyModal from './components/MoneyModal';

const actionRef = {};

const Money = (props) => {
  // 删除记录
  const { record } = props.location.state;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const handleDelete = async () => {
    console.log(selectedRowKeys);
    if (selectedRowKeys.length === 0) {
      message.error('请勾选复选框!');
      return;
    }
    const { data } = await services.deleteBanSongSource(selectedRowKeys);
    if (data.errorcode === 0) {
      message.success('删除成功！');
      setSelectedRowKeys([]);
      setSelectedRows([]);
      actionRef.current.reload();
    }
  };
  const rowSelection = {
    // selectedRowKeys,
    onChange: (_selectedRowKeys, _selectedRows) => {
      setSelectedRowKeys(_selectedRowKeys);
      setSelectedRows(_selectedRows);
    },
  };
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
  const data = [
    {
      Expense_id: 1,
      Expense_time: '2021-10-19',
      Expense_method: '支出',
      Expense_charge: '100',
      Expense_notes: '购买器材',
      Expense_surplus: '50',
    },
    {
      Expense_id: 2,
      Expense_time: '2021-10-18',
      Expense_method: '收入',
      Expense_charge: '100',
      Expense_notes: '会费',
      Expense_surplus: '150',
    },
  ];
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
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Expense_id"
        options={false}
        /* search={false} */
        dataSource={data}
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
