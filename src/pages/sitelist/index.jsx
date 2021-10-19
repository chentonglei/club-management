import React from 'react';
import { Card, List, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const CardList = () => {
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
  const changestate = (record) => {
    let result = '空闲';
    if (record.material_state === '空闲') result = '占用';
    else result = '空闲';
    console.log(result);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      if (data[i].material_title === record.material_title) data[i].material_state = result;
    }
    console.log(data);
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
                <div onClick={() => changestate(item)}>
                  <Card
                    style={{ width: 300 }}
                    title={item.material_title}
                    /*  cover={<img alt="example" src={item.img} />}
                    actions={[
                      <span key="edit" onClick={() => showModal(item)}>
                        加入
                      </span>,
                      <span key="ellipsis" onClick={() => showModal2(item)}>
                        查看详情
                      </span>,
                    ]} */
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
    </PageContainer>
  );
};

export default CardList;
