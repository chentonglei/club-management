import React from 'react';
import { Modal } from 'antd';

const UserModal = (props) => {
  const { visible, closeHandler, onFinish, record } = props;
  return (
    <div>
      {record !== undefined ? (
        <Modal
          title={record.title}
          visible={visible}
          onOk={onFinish}
          onCancel={closeHandler}
          forceRender /* 预渲染 解决报错 */
        >
          <span>{`加入${record.title}需扫描下方二维码缴纳30会费`}</span>
          <img style={{ width: 400, height: 400 }} src={record.qrcode} />
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserModal;
