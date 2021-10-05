import React, { useState } from 'react';
import { Button, Popconfirm, Alert, message, Cascader, Form, Select } from 'antd';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';

const actionRef = {};

const BanSourceStop = () => {
  // 删除记录
  const [regions, setRegions] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const handleDelete = async () => {
    console.log(selectedRowKeys);
    if (selectedRowKeys.length === 0) {
      message.error('请勾选复选框!');
      return;
    }
    const { data } = await services.deleteBanSongSource(selectedRowKeys);
    if (data.errorcode === 0) {
      message.success('删除成功！');
      setSelectedRowKeys([]);
      setSelectedRows([]);
      actionRef.current.reload();
    }
  };
  const rowSelection = {
    // selectedRowKeys,
    onChange: (_selectedRowKeys, _selectedRows) => {
      setSelectedRowKeys(_selectedRowKeys);
      setSelectedRows(_selectedRows);
    },
  };
  const changeto = (record) => {
    history.push({ pathname: 'operatepeople/people', state: { record } });
  };
  const data = [
    {
      Depart_id: '1',
      Depart_name: '排球协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      Depart_admin: '陈彤磊',
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
      Depart_admin: '陈彤磊',
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
      Depart_id: '10',
      Depart_name: '嘻嘻嘻协会',
      qrcode:
        'https://test-evideo-iot-file.oss-cn-shenzhen.aliyuncs.com/song-source/20210922/%E4%BA%8C%E7%BB%B4%E7%A0%81.png?uploads=',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
  ];
  const columns = [
    {
      title: '社团编号',
      dataIndex: 'Depart_id',
      hideInSearch: true, // 在搜索里屏蔽
    },
    {
      title: '社团名称',
      dataIndex: 'Depart_name',
      key: 'Depart_name',
    },
    {
      title: '成立时间',
      dataIndex: 'Depart_time',
    },
    {
      title: '负责人',
      dataIndex: 'Depart_admin',
    },
    {
      title: '操作',
      render: (_, record) => [
        <a key="config" onClick={() => changeto(record)}>
          查看详情
        </a>,
      ],
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="社团列表"
        onReset={() => setRegions([])}
        actionRef={actionRef}
        columns={columns}
        rowKey="Depart_id"
        options={false}
        rowSelection={rowSelection}
        tableAlertOptionRender={() => (
          <Popconfirm
            title="确定要解散以下社团吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={() => handleDelete()}
          >
            <a>解散社团</a>
          </Popconfirm>
        )}
        /* search={false} */
        dataSource={data}
      />
    </>
  );
};

export default BanSourceStop;
