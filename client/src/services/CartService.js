import Api from '@/services/Api'

export default {
  index (item) {
    return Api().get('cart', {
      params: item
    })
  },
  cart (userId) {
    return Api().get(`cart/${userId}`, userId)
  },
  post (item) {
    return Api().post('cart', {
      params: item
    })
  },
  delete (params) {
    return Api().delete(`cart/${params.itemId}`, {
      params: params
    })
  }
}
