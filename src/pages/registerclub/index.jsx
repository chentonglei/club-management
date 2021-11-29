import React, { useState } from 'react';
import { Card, message } from 'antd';
import ProForm, { ProFormUploadButton, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { useRequest, useModel } from 'umi';

import { PageContainer } from '@ant-design/pro-layout';
import { changeConfirmLocale } from 'antd/lib/modal/locale';
import * as services from './service';

const BasicForm = () => {
  const { initialState } = useModel('@@initialState');
  const onFinish = async (values) => {
    console.log(values);
    const data = await services.registerclub({
      ...values,
      Re_id: initialState.currentUser.Re_id,
      Re_name: initialState.currentUser.Re_name,
      img: values.img[0].thumbUrl,
      qrcode: values.qrcode[0].thumbUrl,
    });
    if (data.result === 'false') message.error('提交失败');
    if (data.result === 'true') message.success('提交成功');
    console.log(data);
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
            name="img"
            title="上传头像图片"
            beforeUpload={onchange}
            maxCount={1}
            action=""
          />
          <ProFormUploadButton
            extra="支持扩展名：.jpg .png"
            label="收款二维码"
            name="qrcode"
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
