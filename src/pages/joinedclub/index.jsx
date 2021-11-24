import React from 'react';
import { Card, List } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';

const CardList = () => {
  const { Meta } = Card;
  const showModal = (record) => {
    history.push({ pathname: 'joinedclub/club', state: { record } });
  };
  const data = [
    {
      Depart_id: '1',
      Depart_name: '排球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_introduction: '我顶顶顶顶',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      Depart_id: '2',
      Depart_name: 'ACM协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '刘备',
      Depart_introduction: '我顶顶顶顶',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      Depart_id: '3',
      Depart_name: '篮球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_introduction: '我顶顶顶顶',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      Depart_id: '4',
      Depart_name: '羽毛球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      Depart_id: '5',
      Depart_name: 'bmi协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
      Depart_time: '2021-9-22',
      Depart_notice:
        '关于聚餐say一下，我们周五晚上六点在云香饭店（划个重点，要是不会走到时候我们会带你们过去的）群里有改备注的新生同学我已经都问过了，然后没改备注的同学和昨晚投票没有投票的老生，想来的话可以私聊我一下我小小的登记一下，这么晚还发个公告，先说句不好意思了，周五晚上不见不散噢大家',
    },
    {
      Depart_id: '6',
      Depart_name: '法律协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      Depart_id: '7',
      Depart_name: '广告协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      Depart_id: '8',
      Depart_name: '摄影协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      Depart_id: '9',
      Depart_name: '哈哈哈协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      Depart_id: '100',
      Depart_name: '嘻嘻嘻协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
  ];
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
                <div onClick={() => showModal(item)}>
                  <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src={item.img} />}
                    /*  actions={[
                      <span key="edit" onClick={() => showModal(item)}>
                        加入
                      </span>,
                      <span key="ellipsis" onClick={() => showModal2(item)}>
                        查看详情
                      </span>,
                    ]} */
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
    </PageContainer>
  );
};

export default CardList;
