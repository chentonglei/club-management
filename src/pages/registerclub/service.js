import { request } from 'umi';
import ip from '../../pages/ip/ipconfig.js';
/** 获取当前的用户 GET /api/currentUser */

export async function registerclub(body) {
  console.log(body);
  return request('http://47.98.122.86/api/registerclub', {
    method: 'POST',
    data: body,
  });
}
