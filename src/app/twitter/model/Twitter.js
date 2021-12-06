import Api from '@/app/twitter/services/api'

import { TWITTER_ID } from 'babel-dotenv'

export default class Twitter {
  static async getTimelineTweets () {
    const { data } = await Api.get(`users/${TWITTER_ID}/tweets`)
    return data
  }
}
