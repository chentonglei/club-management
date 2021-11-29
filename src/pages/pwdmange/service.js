import { request } from 'umi';

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}
export async function register(params) {
  return request('http://47.98.122.86/api/user/regist', {
    method: 'POST',
    data: params,
  });
}
export async function pwd(params) {
  return request('http://47.98.122.86/api/user/setting/pwd', {
    method: 'POST',
    data: params,
  });
}
