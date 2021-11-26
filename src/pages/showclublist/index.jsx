import React, { useState, useEffect } from 'react';
import { Card, List, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { history, request, useModel } from 'umi';
import MoneyModal from './components/MoneyModal';
import MoreModal from './components/MoreModal';
import * as services from './service';

const CardList = () => {
  const { Meta } = Card;
  const { initialState } = useModel('@@initialState');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState();
  const [record2, setRegion2] = useState();
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [temp, setTemp] = useState(0);
  const [record, setRecord] = useState();
  /*   useEffect(() => {
    if (temp === 1) setIsModalVisible(true);
    if (temp === 2) setIsModalVisible2(true);
  }, [record]); */
  useEffect(() => {
    const body = {};
    const fetchData = async () => {
      const result = await request('http://47.98.122.86/api/club/show', {
        method: 'POST',
        data: body,
      });
      setData(result.data);
    };

    fetchData();
    console.log(data);
  }, []);

  const showModal = (item) => {
    setRecord(item);
    setTemp(1);
    setIsModalVisible(true);
    console.log(item);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    const region = {};
    region.Re_id = initialState.currentUser.Re_id;
    region.Depart_id = record.Depart_id;
    const msg = await services.join(region);
    if (msg.result === 'true') {
      message.success(
        `您已成功加入${record.Depart_name}，如未成功缴纳会费请及时联系，否则将会自动退出协会`,
      );
    } else message.error(msg.msg);
  };
  const showModal2 = (item) => {
    setRecord(item);
    setTemp(2);
    setIsModalVisible2(true);
    console.log(item);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };
  return (
    <PageContainer>
      <div>
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
                    cover={<img alt="example" src={item.img} />}
                    actions={[
                      <span key="edit" onClick={() => showModal(item)}>
                        加入
                      </span>,
                      <span key="ellipsis" onClick={() => showModal2(item)}>
                        查看详情
                      </span>,
                    ]}
                  >
                    <Meta title={item.Depart_name} />
                  </Card>
                  ,
                </div>
              </List.Item>
            );
          }}
        />
      </div>
      <MoneyModal // component 下 弹窗
        visible={isModalVisible} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk}
        record={record}
      />
      <MoreModal // component 下 弹窗
        visible={isModalVisible2} // 可见型
        closeHandler={handleCancel}
        onFinish={handleOk2}
        record={record}
      />
    </PageContainer>
  );
};

export default CardList;
