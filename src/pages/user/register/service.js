import { request } from 'umi';

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}
export async function register(params) {
  return request('http://47.98.122.86/user/register', {
    method: 'POST',
    data: params,
  });
}
