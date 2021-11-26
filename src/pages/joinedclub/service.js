import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

export async function getequipmentlist(body) {
  return request('http://47.98.122.86/api/equipmentlist', {
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
export async function getjoined(body) {
  return request('http://47.98.122.86/api/club/joined', {
    method: 'POST',
    data: body,
  });
}
export async function election(body) {
  return request('http://47.98.122.86/api/club/election', {
    method: 'POST',
    data: body,
  });
}
export async function cancel(body) {
  return request('http://47.98.122.86/api/club/cancel', {
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
export async function join(body) {
  return request('http://47.98.122.86/api/club/join', {
    method: 'POST',
    data: body,
  });
}
