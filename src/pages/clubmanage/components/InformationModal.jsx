import React from 'react';
import { Modal } from 'antd';

const UserModal = (props) => {
  const { visible, closeHandler, onFinish, record } = props;
  return (
    <div>
      <Modal
        title={record.title}
        visible={visible}
        onOk={onFinish}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        协会的头像
        {record.img !== '' ? <img style={{ width: 300 }} src={record.img} /> : '暂无'}
        <br />
        入会收款码
        {record.qrcode !== '' ? <img style={{ width: 300 }} src={record.qrcode} /> : '暂无'}
      </Modal>
    </div>
  );
};

export default UserModal;
