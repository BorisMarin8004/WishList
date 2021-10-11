import ROUTER from "./Router";

const getGenericConfig = (url, method, data) => ({
    url: url,
    method: method,
    headers: {
        "Content-Type": "application/json"
    },
    data: data
})

const getLoginConfig = (cred) => (
    getGenericConfig(ROUTER.login, "POST", {
        "username": cred.username,
        "password": cred.password
    })
)

const getSignUpConfig = (cred) => {
    let conf = getLoginConfig(cred)
    conf.url = ROUTER.sign_up
    return conf
}

const getAuthConfig = (url, method, token, data={}) => (
    getGenericConfig(url, method, data).headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
    }
)

export {
    getGenericConfig,
    getLoginConfig,
    getSignUpConfig,
    getAuthConfig
}