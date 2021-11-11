import React, { useState, useEffect } from 'react';
import { Card, List, Tag, Button, Popconfirm } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import SiteModal from './components/SiteModal';
import styles from './index.less';

const CardList = () => {
  const [region, setRegion] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setIsModalVisible(true);
  }, [region]);
  const data = [
    {
      material_title: '南区体育馆',
      material_state: '空闲',
    },
    {
      material_title: '北区硬排场',
      material_state: '空闲',
    },
    {
      material_title: '北区风雨篮球场',
      material_state: '校体育部占用',
    },
    {
      material_title: '南区风雨篮球场',
      material_state: '空闲',
    },
    {
      material_title: '北区网球场',
      material_state: '空闲',
    },
  ];
  const handleOk = () => {
    setIsModalVisible(false);
    setRegion();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setRegion();
  };
  const setModal = (record) => {
    console.log(record);
    if (record === '空闲') setRegion('请输入使用的部门或协会');
    else {
      console.log(1111);
      setRegion('请输入新增的场地');
    }
  };
  const confirm = () => {};
  const cancel = () => {};
  return (
    <PageContainer>
      <Button type="primary" onClick={() => setModal('添加')} className={styles.button}>
        添加场地
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
                      item.material_state === '空闲' ? (
                        <Popconfirm
                          title="是否确认空出"
                          onConfirm={confirm}
                          onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <span key="use">占用</span>
                        </Popconfirm>
                      ) : (
                        <span key="use" onClick={() => setModal('空闲')}>
                          空闲
                        </span>
                      ),
                      <Popconfirm
                        key="delete"
                        title="是否确认删除"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <span key="delete">删除</span>,
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
      <SiteModal // component 下 弹窗
        visible={isModalVisible} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk}
        record={region}
      />
    </PageContainer>
  );
};

export default CardList;
