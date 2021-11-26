import React from 'react';
import { Modal, Form, Input } from 'antd';

const UserModal = (props) => {
  const [form] = Form.useForm();
  const { visible, closeHandler, onFinish, record } = props;
  const onOk = () => {
    form.submit();
  };
  return (
    <div>
      {record !== undefined ? (
        <Modal
          title={record}
          visible={visible}
          onOk={onOk}
          onCancel={closeHandler}
          forceRender /* 预渲染 解决报错 */
        >
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              label="新增设备名称"
              name="material_title"
              rules={[{ required: true, message: '新增设备名称' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserModal;
