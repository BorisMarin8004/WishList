import './App.css';
import {useState} from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const TEST_USERNAME = "admin"
const TEST_PASSWORD = "admin"
const SWITCH = {
    BACKEND_URL: "http://0.0.0.0:8000",
    API: "api"
}
const ROUTER = {
    admin: `${SWITCH.BACKEND_URL}/admin/`,
    login: `${SWITCH.BACKEND_URL}/login/`,
    api: {
        items: `${SWITCH.BACKEND_URL}/${SWITCH.API}/item/`,
        wish_lists: `${SWITCH.BACKEND_URL}/${SWITCH.API}/wish_list/`,
        users: `${SWITCH.BACKEND_URL}/${SWITCH.API}/user/`
    }
}

function App() {
    const [username, setUsername] = useState(TEST_USERNAME)
    const [password, setPassword] = useState(TEST_PASSWORD)
    const [token, setToken] = useState(null)

    function login(){
        console.log({
            "username": username,
            "password": password
        })
        fetch(ROUTER.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(
            data => data.json()
        ).then(
            data => {
                setToken(data.token)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    function getItems(){
        console.log(token)
        axios.get(ROUTER.api.items, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            params: {
                name: "testItem"
            }
        }).then(
            res => console.log(res.data)
        )
        // fetch(ROU TER.api.items, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Token ${token}`
        //     }
        // }).then(
        //     data => data.json()
        // ).then(
        //     data => console.log(data)
        // )
    }

    return (
        <div className="App">
            <h2>Login</h2>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
            </label>
            <br/>
            <button onClick={login}>Login</button>
            <button onClick={getItems}>Get Items</button>
        </div>
    );
}

export default App;
