import { Card, message } from 'antd';
import ProForm, { ProFormUploadButton, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { changeConfirmLocale } from 'antd/lib/modal/locale';

const BasicForm = () => {
  const onFinish = async (values) => {
    console.log(values);
  };
  const onchange = (info) => {
    console.log(info);
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
            label="名称"
            name="Dad_name"
            rules={[
              {
                required: true,
                message: '请输入新社团名称',
              },
            ]}
            placeholder="给新社团起个名字"
          />
          <ProFormTextArea
            label="原因"
            width="xl"
            name="Dad_reason"
            rules={[
              {
                required: true,
                message: '请输入建立社团原因',
              },
            ]}
            placeholder="请输入建立社团原因"
          />
          <ProFormTextArea
            label="社团简介"
            width="xl"
            name="Dad_introduction"
            rules={[
              {
                required: true,
                message: '请输入社团简介',
              },
            ]}
            placeholder="请输入社团简介"
          />
          <ProFormUploadButton
            extra="支持扩展名：.jpg .png"
            label="社团头像"
            name="file.img"
            title="上传头像图片"
            beforeUpload={onchange}
            maxCount={1}
            action=""
          />
          <ProFormUploadButton
            extra="支持扩展名：.jpg .png"
            label="收款二维码"
            name="file.qrcode"
            title="上传二维码"
            maxCount={1}
            action=""
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
