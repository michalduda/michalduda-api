import Twitter from '@/app/twitter/model/Twitter'

export const feedController = async (ctx, next) => {
  const tweets = await Twitter.getTimelineTweets()
  ctx.body = tweets
}
