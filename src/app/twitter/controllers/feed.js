import Twitter from '@/app/twitter/model/Twitter'

export const feedController = async (ctx, next) => {
  const tweets = await Twitter.getTimelineTweets()
  console.log(tweets)
  ctx.body = tweets
}
