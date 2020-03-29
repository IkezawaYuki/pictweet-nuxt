export const ROUTES = {
  GET: {
    INDEX: 'api/tweets',
    TWEET: {
      SHOW: 'api/tweet/:id',
    },
    FAVORITE: 'api/favorite',
  },
  POST: {
    TWEET: {
      CREATE: "api/tweet",
    },
    COMMENT: {
      CREATE: "api/comment",
    },
    USER: {
      CREATE: "api/user",
    }
  },
}

export default ROUTES;