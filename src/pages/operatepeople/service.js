import { request } from 'umi';
import ip from '../../pages/ip/ipconfig.js';
/** 获取当前的用户 GET /api/currentUser */

export async function getshowclublist() {
  return request('http://47.98.122.86/api/showclublist', {
    method: 'POST',
  });
}
export async function getclubmoeny(body) {
  return request('http://47.98.122.86/api/club/money', {
    method: 'POST',
    data: body,
  });
}
export async function getaction(body) {
  return request('http://47.98.122.86/api/club/action', {
    method: 'POST',
    data: body,
  });
}
