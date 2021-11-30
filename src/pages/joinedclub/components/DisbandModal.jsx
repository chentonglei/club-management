import React from 'react';
import { Modal, Form, Input } from 'antd';

const DisbandModal = (props) => {
  const [form] = Form.useForm();
  const { visible, closeHandler, onFinish } = props;
  const onOk = () => {
    form.submit();
  };
  return (
    <div>
      <Modal
        title="解散社团"
        visible={visible}
        onOk={onOk}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="解散原因"
            name="Dad_reason"
            rules={[{ required: true, message: '请输入原因' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DisbandModal;
