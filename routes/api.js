export const ROUTES = {
  GET: {
    INDEX: 'api/tweets',
    TWEET: {
      SHOW: 'api/tweet/:id',
    },
  },
  POST: {
    TWEET: {
      CREATE: "api/tweet/",
    },
    COMMENT: {
      CREATE: "api/comment/:id",
    },
    USER: {
      CREATE: "api/user/",
    }
  },
}

export default ROUTES;