import React from 'react';
import { Modal, Form, Input } from 'antd';

const DisbandModal = (props) => {
  const { visible, closeHandler, onFinish } = props;
  return (
    <div>
      <Modal
        title="申请换届"
        visible={visible}
        onOk={onFinish}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        <Form>
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
