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

const getAuthConfig = (url, method, data = {}, token=null) => {
    let conf = getGenericConfig(url, method, data)
    conf.headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token == null ? JSON.parse(localStorage.getItem('token')) : token}`
    }
    return conf
}

const getUserModelConfig = (method, query={}, data={}, token=null) => (
    getAuthConfig(ROUTER.api.users + parseQuery(query), method, data, token)
)

const getItemModelConfig = (method, query={}, data={}, token=null) => (
    getAuthConfig(ROUTER.api.items + parseQuery(query), method, data, token)
)

const getWishlistModelConfig = (method, query={}, data={}, token=null) => (
    getAuthConfig(ROUTER.api.wish_lists + parseQuery(query), method, data, token)
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