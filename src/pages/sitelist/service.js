import { request } from 'umi';
import ip from '../../pages/ip/ipconfig.js';
/** 获取当前的用户 GET /api/currentUser */

export async function getclubmanage(body) {
  return request('http://47.98.122.86/api/clubmanage', {
    method: 'POST',
    data: body,
  });
}
export async function addspace(body) {
  return request('http://47.98.122.86/api/manage/space/add', {
    method: 'POST',
    data: body,
  });
}
export async function delspace(body) {
  return request('http://47.98.122.86/api/manage/space/del', {
    method: 'POST',
    data: body,
  });
}
