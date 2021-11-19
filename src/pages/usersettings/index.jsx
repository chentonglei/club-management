import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, Upload, message, Card } from 'antd';
import ProForm, {
  ProFormDependency,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';

const BaseView = () => {
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });
  const data = {
    Re_id: '3181911220',
    Re_name: '陈彤磊',
    Re_sex: '男',
    Re_email: '382023278@qq.com',
    Re_age: '1999-11-20',
    Re_telephone: '18859144927',
    Re_address: '福建省福州市闽侯县福建工程学院旗山北校区',
  };
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }

      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }

    return '';
  };

  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };

  return (
    <PageContainer>
      {loading ? null : (
        <>
          <Card>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              style={{
                margin: 'auto',
                marginTop: 8,
                maxWidth: 600,
              }}
              submitter={{
                resetButtonProps: {
                  style: {
                    display: 'none',
                  },
                },
                submitButtonProps: {
                  children: '更新基本信息',
                },
              }}
              /* initialValues={{ ...currentUser, phone: currentUser?.phone.split('-') }} */
              initialValues={{ ...data }}
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="Re_id"
                label="账号"
                disabled
                rules={[
                  {
                    required: true,
                    message: '请输入您的账号!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="Re_name"
                label="姓名"
                rules={[
                  {
                    required: true,
                    message: '请输入您的姓名!',
                  },
                ]}
              />
              <ProFormText width="md" name="Re_email" label="邮箱" />
              <ProFormSelect
                width="sm"
                name="Re_sex"
                label="性别"
                options={[
                  {
                    label: '男',
                    value: '男',
                  },
                  {
                    label: '女',
                    value: '女',
                  },
                ]}
              />
              <ProFormText width="md" name="Re_age" label="生日" />
              <ProFormText width="md" name="Re_telephone" label="电话" />
              <ProFormTextArea name="Re_address" label="住址" />
            </ProForm>
          </Card>
        </>
      )}
    </PageContainer>
  );
};

export default BaseView;
