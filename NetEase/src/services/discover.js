import request from "../utils/request";

const host = /localhost/.test(window.location.host)
  ? "http://123.206.55.50:14000"
  : "http://123.206.55.50:14000";
// 获取banner
export function getBanner() {
  return request(`${host}/banner`);
}
//获取搜索
export function search(keywords) {
  return request(`${host}/search?keywords=${keywords}`);
}
//获取推荐歌单
export function recommend() {
  return request(`${host}/personalized`);
}
//获取MV
// export function mv() {
//   return request(`${host}/personalized/mvs`);
// }
