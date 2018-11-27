import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('cart', {
      params: params
    })
  },
  show (params) {
    return Api().get('cart', {
      params: params
    })
  }
}
