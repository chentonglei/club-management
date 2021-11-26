import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

export async function registerclub(body) {
  console.log(body);
  return request('http://47.98.122.86/api/club/register', {
    method: 'POST',
    data: body,
  });
}
export async function getlist(body) {
  return request('http://47.98.122.86/api/user/app_record', {
    method: 'POST',
    data: body,
  });
}
export async function setting(body) {
  return request('http://47.98.122.86/api/club/setting', {
    method: 'POST',
    data: body,
  });
}
export async function show(body) {
  return request('http://47.98.122.86/api/club/show', {
    method: 'POST',
    data: body,
  });
}
