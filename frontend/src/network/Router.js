
const SWITCH = Object.freeze({
    BASE: "http://localhost:8000",
    API: "api"
})

const ROUTER = {
    admin: `${SWITCH.BASE}/admin/`,
    login: `${SWITCH.BASE}/login/`,
    sign_up: `${SWITCH.BASE}/sign_up/`,
    api: {
        items: `${SWITCH.BASE}/${SWITCH.API}/item/`,
        wish_lists: `${SWITCH.BASE}/${SWITCH.API}/wish_list/`,
        users: `${SWITCH.BASE}/${SWITCH.API}/user/`
    }
}

export default ROUTER
