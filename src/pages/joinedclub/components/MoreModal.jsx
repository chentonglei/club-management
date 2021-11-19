import React from 'react';
import { Modal, Descriptions } from 'antd';

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
          <Descriptions bordered column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}>
            <Descriptions.Item label="负责人">
              {record.Depart_admin ? record.Depart_admin : '--'}
            </Descriptions.Item>
            <Descriptions.Item label="成立时间">
              {record.Depart_time ? record.Depart_time : '--'}
            </Descriptions.Item>
            <Descriptions.Item label="社团简介">
              {record.Depart_notice ? record.Depart_notice : '--'}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserModal;
