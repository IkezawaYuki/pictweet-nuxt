export const ROUTES = {
  GET: {
    INDEX: 'api/tweets',
    TWEET: {
      SHOW: 'api/tweet/:id',
    },
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
    },
    FAVORITE: 'api/favorites',
  },
}

export default ROUTES;