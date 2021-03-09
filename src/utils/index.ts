/*
 * @Author       : yuanrunwei
 * @Date         : 2021-02-02 20:45:14
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2021-02-02 20:49:08
 * @FilePath     : \ambre-admin-next\src\utils\index.ts
 */
export default {
  handleSession (param) {
    return sessionStorage.getItem(param)
  }
}
