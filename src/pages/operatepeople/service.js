import { request } from 'umi';
import ip from '../../pages/ip/ipconfig.js';
/** 获取当前的用户 GET /api/currentUser */

export async function getshowclublist() {
  const body = {};
  return request('http://47.98.122.86/api/club/show', {
    method: 'POST',
    data: body,
  });
}
export async function getclubmoeny(body) {
  return request('http://47.98.122.86/api/club/money', {
    method: 'POST',
    data: body,
  });
}
export async function getaction(body) {
  return request('http://47.98.122.86/gpi/action', {
    method: 'POST',
    data: body,
  });
}
export async function getpeople(body) {
  return request('http://47.98.122.86/api/club/people', {
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
export async function exit(body) {
  return request('http://47.98.122.86/gpi/secede', {
    method: 'POST',
    data: body,
  });
}
