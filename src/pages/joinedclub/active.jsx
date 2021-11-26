import React from 'react';
import { Card } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormMoney,
  ProFormText,
  ProFormTextArea,
  ProFormDatePicker,
} from '@ant-design/pro-form';
import { request } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

const BasicForm = () => {
  const onFinish = async (values) => {
    console.log(values);
  };
  return (
    <PageContainer>
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="活动名称"
            name="Action_name"
            rules={[
              {
                required: true,
                message: '请输入活动名称',
              },
            ]}
            placeholder="活动名称"
          />
          <ProFormDatePicker
            width="md"
            name="Action_time"
            label="活动时间"
            rules={[
              {
                required: true,
                message: '请输入活动时间',
              },
            ]}
            placeholder="活动时间"
          />
          <ProFormSelect
            width="md"
            name="Action_address"
            label="活动所需场地"
            placeholder="活动所需场地"
            request={async () =>
              request('http://47.98.122.86/gpi/space/type', {
                method: 'POST',
                /* data: body, */
              })
            }
          />
          <ProFormSelect
            width="md"
            name="Action_need"
            label="活动所需设备"
            placeholder="活动所需设备"
            request={async () =>
              request('http://47.98.122.86/gpi/device/type', {
                method: 'POST',
                /* data: body, */
              })
            }
          />
          <ProFormMoney
            label="活动所需资金"
            width="xd"
            rules={[
              {
                required: true,
                message: '请输入活动所需资金',
              },
            ]}
            name="Action_money"
            initialValue={0}
            min={0}
          />
          <ProFormTextArea
            label="活动内容"
            width="xl"
            name="Action_content"
            rules={[
              {
                required: true,
                message: '请输入活动内容',
              },
            ]}
            placeholder="请输入活动内容"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
