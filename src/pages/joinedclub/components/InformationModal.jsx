import React, { useEffect } from 'react';
import { Modal, Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const InformationModal = (props) => {
  const [form] = Form.useForm();
  const { visible, record, closeHandler, onFinish } = props;
  const img = {};
  const img2 = {};
  useEffect(() => {
    /* 解决点edit报错 异步 跟生命周期有关 */
    console.log(record);
    img.url = record.img;
    img.status = 'done';
    img.thumbUrl = record.img;
    img2.url = record.qrcode;
    img2.status = 'done';
    img2.thumbUrl = record.qrcode;
    form.setFieldsValue({
      ...record,
    });
  }, [visible]);
  const onOk = () => {
    form.submit();
  };
  return (
    <div>
      <Modal
        title={`${record.Depart_name}基本信息`}
        visible={visible}
        onOk={onOk}
        onCancel={closeHandler}
        forceRender /* 预渲染 解决报错 */
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="协会负责人"
            name="Depart_admin"
            rules={[{ required: true, message: '请输入协会负责人' }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="协会成立时间"
            name="Depart_time"
            rules={[{ required: true, message: '协会成立时间' }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="协会简介"
            name="Depart_introduction"
            rules={[{ required: true, message: '协会简介' }]}
          >
            <Input.TextArea autoSize />
          </Form.Item>
          <Form.Item
            label="协会公告"
            name="Depart_notice"
            rules={[{ required: true, message: '协会公告' }]}
          >
            <Input.TextArea autoSize />
          </Form.Item>
          <Form.Item label="协会头像" name="img" rules={[{ required: true, message: '协会头像' }]}>
            <Upload listType="picture" defaultFileList={[img]} maxCount={1} accept=".jpg, .png">
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="收款码"
            name="qrcode"
            rules={[{ required: true, message: '协会收款码' }]}
          >
            <Upload listType="picture" defaultFileList={[img2]} maxCount={1} accept=".jpg, .png">
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InformationModal;
