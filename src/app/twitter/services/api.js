import { TWITTER_BEARER_TOKEN, TWITTER_API_URL } from 'babel-dotenv'
import axios from 'axios'

class Api {
  constructor () {
    this.client = this.createAxiosClient()
  }

  createAxiosClient () {
    return axios.create({
      baseURL: TWITTER_API_URL,
      headers: { Authorization: `Bearer ${TWITTER_BEARER_TOKEN}` },
      withCredentials: true
    })
  }
}

export default new Api().client
