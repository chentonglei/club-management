import React from 'react';
import { Modal } from 'antd';

const UserModal = (props) => {
  const { visible, closeHandler, onFinish, record } = props;
  return (
    <div>
      <Modal
        title={`${record.Depart_name}群公告`}
        visible={visible}
        onOk={onFinish}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        &nbsp;&nbsp;{record.Depart_notice ? record.Depart_notice : '暂无公告'}
      </Modal>
    </div>
  );
};

export default UserModal;
