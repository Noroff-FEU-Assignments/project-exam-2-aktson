export const BASE_URL = process.env.REACT_APP_BASE_URL

export const REGISTER_URL = BASE_URL + "/api/v1/social/auth/register"

export const LOGIN_URL = BASE_URL + "/api/v1/social/auth/login"

export const GET_POSTS_URL = BASE_URL + "/api/v1/social/posts?_author=true&_comments=true&_reactions=true"

export const POSTS_URL = BASE_URL + "/api/v1/social/posts"

export const POSTS_PEOPLE_FOLLOWING = BASE_URL + "/api/v1/social/posts/following?_author=true&_comments=true&_reactions=true"

export const GET_PROFILES_URL = BASE_URL + "/api/v1/social/profiles?_following=true&_followers=true"

export const PROFILES_URL = BASE_URL + "/api/v1/social/profiles"

export const POSTS_FLAGS = "?_author=true&_comments=true&_reactions=true"

export const PROFILES_FLAG = "?_following=true&_followers=true"

export const CLOUD_KEY = process.env.REACT_APP_CLOUD_KEY

export const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME