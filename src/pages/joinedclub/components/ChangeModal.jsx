import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { request } from 'umi';

const ChangeModal = (props) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [data, setData] = useState();
  const { visible, closeHandler, onFinish, record } = props;
  useEffect(() => {
    const fetchData = async () => {
      const result = await request('http://47.98.122.86/api/club/people/type', {
        method: 'POST',
        data: record,
      });
      setData(result.data);
    };
    fetchData();
    console.log(data);
  }, []);
  const onOk = () => {
    form.submit();
  };
  return (
    <div>
      <Modal
        title="申请换届"
        visible={visible}
        onOk={onOk}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="下一任会长"
            name="Change_new"
            rules={[{ required: true, message: '请输入下一任会长' }]}
          >
            <Select>
              {data !== undefined
                ? data.map((item) => (
                    <Option values={item.value} key={item.value}>
                      {item.label}
                    </Option>
                  ))
                : ''}
            </Select>
          </Form.Item>
          <Form.Item
            label="换届原因"
            name="Change_reason"
            rules={[{ required: true, message: '请输入原因' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ChangeModal;
