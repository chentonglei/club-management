import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

export async function getclubmanage(body) {
  return request('http://47.98.122.86/api/clubmanage', {
    method: 'POST',
    data: body,
  });
}
export async function adddevice(body) {
  return request('http://47.98.122.86/api/manage/device/add', {
    method: 'POST',
    data: body,
  });
}
export async function deldevice(body) {
  return request('http://47.98.122.86/api/manage/device/del', {
    method: 'POST',
    data: body,
  });
}
