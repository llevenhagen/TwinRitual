import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('merch')
  },
  post (merch) {
    return Api().post('merch', merch)
  }
}
