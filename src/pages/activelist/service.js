import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

export async function getactivelist(body) {
  return request('http://47.98.122.86/gpi/action', {
    method: 'POST',
    data: body,
  });
}
export async function doit(body) {
  return request('http://47.98.122.86/api/manage/verify/action', {
    method: 'POST',
    data: body,
  });
}
