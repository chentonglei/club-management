import React, { useState, useEffect } from 'react';
import { Card, List, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { history, request } from 'umi';
import MoneyModal from './components/MoneyModal';
import MoreModal from './components/MoreModal';
import * as services from './service';

const CardList = () => {
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState();
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [temp, setTemp] = useState(0);
  const [record, setRecord] = useState();
  /*   useEffect(() => {
    if (temp === 1) setIsModalVisible(true);
    if (temp === 2) setIsModalVisible2(true);
  }, [record]); */
  useEffect(() => {
    const fetchData = async () => {
      const result = await request('http://47.98.122.86/api/showclublist', {
        method: 'POST',
        /* data: body, */
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

  const handleOk = () => {
    setIsModalVisible(false);
    message.success(
      `您已成功加入${record.title}，如未成功缴纳会费请及时联系，否则将会自动退出协会`,
    );
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
  /* const data = [
    {
      title: '排球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      title: 'ACM协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      title: '篮球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      title: '羽毛球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      title: 'bmi协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      title: '法律协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      title: '广告协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      title: '摄影协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      title: '哈哈哈协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      title: '嘻嘻嘻协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
  ]; */
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
