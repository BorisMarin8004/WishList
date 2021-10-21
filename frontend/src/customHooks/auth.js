import {useState} from 'react';

function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return JSON.parse(tokenString)
    };

    const [token, setToken] = useState(getToken());

    const saveToken = newToken => {
        localStorage.setItem('token', JSON.stringify(newToken));
        setToken(newToken);
    };

    return {
        setToken: saveToken,
        token
    }
}

function useId() {
    const getId = () => {
        const id = localStorage.getItem('id');
        return JSON.parse(id)
    };

    const [id, setId] = useState(getId());

    const saveId = newId => {
        localStorage.setItem('id', JSON.stringify(newId));
        setId(newId);
    };

    return {
        setId: saveId,
        id
    }
}

function useUsername() {
  const getUsername = () => {
      const username = localStorage.getItem('username');
      return JSON.parse(username)
  };

  const [username, setUsername] = useState(getUsername());

  const saveUsername = newUsername => {
      localStorage.setItem('username', JSON.stringify(newUsername));
      setUsername(newUsername);
  };

  return {
      setUsername: saveUsername,
      username
  }
}

function usePassword() {
  const getPassword = () => {
      const password = localStorage.getItem('password');
      return JSON.parse(password)
  };

  const [password, setPassword] = useState(getPassword());

  const savePassword = newPassword => {
      localStorage.setItem('password', JSON.stringify(newPassword));
      setPassword(newPassword);
  };

  return {
      setPassword: savePassword,
      password
  }
}

export {
    useToken,
    useId,
    useUsername,
    usePassword
}