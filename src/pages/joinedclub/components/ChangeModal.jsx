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
            name="New_id"
            rules={[{ required: true, message: '请输入下一任会长' }]}
          >
            {data !== undefined ? (
              <Select>
                {data?.map((item) => (
                  <Option values={item.value} key={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            ) : (
              '无人选'
            )}
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
