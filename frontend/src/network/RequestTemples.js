import ROUTER from "./Router";
import _ from 'underscore';

const parseQuery = (query) => {
    let parsedQuery = ""
    if (!_.isEmpty(query)) {
        parsedQuery += "?"
        for (const [ queryKey, queryElement ] of Object.entries(query)) {
            parsedQuery += queryKey + "=" + queryElement + "&"
        }
    }
    return parsedQuery
}

const getGenericConfig = (url, method, data) => ({
    url: url,
    method: method,
    headers: {
        "Content-Type": "application/json"
    },
    data: data,
})

const getLoginConfig = (cred) => (
    getGenericConfig(ROUTER.login, "POST", cred)
)

const getSignUpConfig = (cred) => {
    let conf = getLoginConfig(cred)
    conf.url = ROUTER.sign_up
    return conf
}

const getAuthConfig = (url, method, token, data = {}) => {
    let conf = getGenericConfig(url, method, data)
    conf.headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
    }
    return conf
}

const getUserModelConfig = (method, token, query={}, data={}) => (
    getAuthConfig(ROUTER.api.users + parseQuery(query), method, token, data)
)

const getItemModelConfig = (method, token, data={}) => (
    getAuthConfig(ROUTER.api.items, method, token, data)
)

const getWishlistModelConfig = (method, token, data={}) => (
    getAuthConfig(ROUTER.api.wish_lists, method, token, data)
)

export {
    getGenericConfig,
    getLoginConfig,
    getSignUpConfig,
    getAuthConfig,
    getUserModelConfig,
    getItemModelConfig,
    getWishlistModelConfig
}