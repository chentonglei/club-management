import { Card, message } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
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
          <ProFormText
            width="md"
            label="活动时间"
            name="Action_time"
            rules={[
              {
                required: true,
                message: '请输入活动时间',
              },
            ]}
            placeholder="活动时间"
          />
          <ProFormText
            width="md"
            label="活动地点"
            name="Action_address"
            rules={[
              {
                required: true,
                message: '请输入活动地点',
              },
            ]}
            placeholder="活动地点"
          />
          <ProFormText
            width="md"
            label="活动场地与资金"
            name="Action_need"
            rules={[
              {
                required: true,
                message: '请输入场地与资金',
              },
            ]}
            placeholder="活动场地与资金"
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
