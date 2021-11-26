import React, { useState, useEffect } from 'react';
import { Card, List } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { history, useModel, request } from 'umi';

const CardList = () => {
  const { Meta } = Card;
  const [data, setData] = useState();
  const { initialState } = useModel('@@initialState');
  const body = {};
  body.UserId = initialState.currentUser.Re_id;
  useEffect(() => {
    const fetchData = async () => {
      const result = await request('http://47.98.122.86/api/club/joined', {
        method: 'POST',
        data: body,
      });
      setData(result.data);
    };

    fetchData();
  }, []);
  const showModal = (record) => {
    history.push({ pathname: 'joinedclub/club', state: { record } });
  };
  return (
    <PageContainer>
      {data !== null ? (
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
      ) : (
        <span>暂无</span>
      )}
    </PageContainer>
  );
};

export default CardList;
