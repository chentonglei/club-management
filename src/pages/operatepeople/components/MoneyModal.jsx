import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

const { Option } = Select;
const MoneyModal = (props) => {
  const [form] = Form.useForm();
  const { visible, closeHandler, onFinish } = props;
  const onOk = () => {
    console.log('okokoko');
    form.submit();
  };
  return (
    <div>
      <Modal
        title="新增报表"
        visible={visible}
        onOk={onOk}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="金额"
            name="Expense_charge"
            rules={[{ required: true, message: '请输入金额' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="用途/来源"
            name="Expense_notes"
            rules={[{ required: true, message: '请输入原因' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="收入/支出"
            name="Expense_method"
            rules={[{ required: true, message: '请输入原因' }]}
          >
            {/* <Input /> */}
            <Select defaultValue=" ">
              <Option value="收入">收入</Option>
              <Option value="支出">支出</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MoneyModal;
