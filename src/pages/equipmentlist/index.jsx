import React, { useState, useEffect } from 'react';
import { Card, List, Tag, Button, Popconfirm, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { request } from 'umi';
import EquipModal from './components/EquipModal';
import * as services from './service';

const CardList = () => {
  const [data, setData] = useState();
  const [region, setRegion] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await request('http://47.98.122.86/gpi/device/list', {
        method: 'POST',
        /* data: body, */
      });
      setData(result.data);
    };

    fetchData();
  }, []);
  useEffect(() => {
    setIsModalVisible(true);
  }, [region]);
  const handleOk = async (body) => {
    setIsModalVisible(false);
    // eslint-disable-next-line no-param-reassign
    body.material_type = '设备';
    const msg = await services.adddevice(body);
    if (msg.result === 'true') {
      message.success('添加成功');
    } else message.error(msg.msg);
    setRegion();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setRegion();
  };
  const setModal = () => {
    setRegion('请输入新增的设备');
  };
  const confirm = async (body) => {
    const msg = await services.deldevice(body);
    if (msg.result === 'true') {
      message.success('删除成功');
    } else message.error(msg.msg);
  };
  const cancel = () => {};
  return (
    <PageContainer>
      <Button type="primary" onClick={() => setModal('添加')} className={styles.button}>
        添加设备
      </Button>
      <div className={styles.card2}>
        <List
          rowKey="id"
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={data}
          renderItem={(item) => {
            return (
              <List.Item key={item.id}>
                <div>
                  <Card
                    style={{ width: 300 }}
                    title={item.material_title}
                    actions={[
                      <Popconfirm
                        key="delete"
                        title="是否确认删除"
                        onConfirm={() => confirm(item)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <span key="delete">删除</span>
                      </Popconfirm>,
                    ]}
                  >
                    <Tag color={item.material_state === '空闲' ? 'success' : 'error'} key={'tag'}>
                      {item.material_state}
                    </Tag>
                  </Card>
                  ,
                </div>
              </List.Item>
            );
          }}
        />
      </div>
      <EquipModal // component 下 弹窗
        visible={isModalVisible} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk}
        record={region}
      />
    </PageContainer>
  );
};

export default CardList;
