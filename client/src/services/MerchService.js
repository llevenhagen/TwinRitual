import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('merch')
  },
  show (itemId) {
    return Api().get(`merch/${itemId}`)
  },
  post (merch) {
    return Api().post('merch', merch)
  },
  put (item) {
    return Api().put(`merch/${item.id}`, item)
  }
}
