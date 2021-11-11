import React from 'react';
import { Modal, Form, Input } from 'antd';

const UserModal = (props) => {
  const { visible, closeHandler, onFinish, record } = props;
  return (
    <div>
      {record !== undefined ? (
        <Modal
          title={record}
          visible={visible}
          onOk={onFinish}
          onCancel={closeHandler}
          forceRender /* 预渲染 解决报错 */
        >
          <Form>
            {record === '请输入使用的部门或协会' ? (
              <Form.Item
                label="占用场地或协会名称"
                name="name"
                rules={[{ required: true, message: '请输入场地或协会' }]}
              >
                <Input />
              </Form.Item>
            ) : (
              <Form.Item
                label="新增设备名称"
                name="name"
                rules={[{ required: true, message: '新增设备名称' }]}
              >
                <Input />
              </Form.Item>
            )}
          </Form>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserModal;
