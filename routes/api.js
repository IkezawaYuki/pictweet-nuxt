export const ROUTES = {
  GET: {
    INDEX: 'api/tweets',
    TWEET: {
      SHOW: 'api/tweet/:id',
    },
    COMMENT:{

    },
  },
  POST: {
    TWEET: {
      CREATE: "api/tweet/"
    }
  },
}

export default ROUTES;