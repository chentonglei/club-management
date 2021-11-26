import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

export async function getshowclublist() {
  return request('http://47.98.122.86/api/club/show', {
    method: 'POST',
    /* data: body, */
  });
}
export async function join(body) {
  return request('http://47.98.122.86/api/club/join', {
    method: 'POST',
    data: body,
  });
}
