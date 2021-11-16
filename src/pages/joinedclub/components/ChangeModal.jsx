import React from 'react';
import { Modal, Form, Input } from 'antd';

const ChangeModal = (props) => {
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
            label="下一任会长"
            name="Change_newname"
            rules={[{ required: true, message: '请输入下一任会长' }]}
          >
            <Input />
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
