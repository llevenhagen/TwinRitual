import Api from '@/services/Api'

export default {
  index () {
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
  },
  delete (item) {
    return Api().delete(`merch/${item.id}`)
  }
}
