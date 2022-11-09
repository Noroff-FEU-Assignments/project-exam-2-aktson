export const BASE_URL = process.env.REACT_APP_BASE_URL

export const REGISTER_URL = BASE_URL + "/api/v1/social/auth/register"

export const LOGIN_URL = BASE_URL + "/api/v1/social/auth/login"

export const GET_POSTS_URL = "/api/v1/social/posts?_author=true&_comments=true&_reactions=true"

export const POSTS_URL = "/api/v1/social/posts"

export const GET_PROFILES_URL = "/api/v1/social/profiles?_following=true&_followers=true"

export const PROFILES_URL = "/api/v1/social/profiles"