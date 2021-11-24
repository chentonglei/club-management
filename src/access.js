/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.Re_power === 'admin',
    canUser: currentUser && currentUser.Re_power === 'user',
  };
}
