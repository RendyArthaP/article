import axios from 'axios';

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_FAILED = "AUTH_FAILED"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const authRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  }
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}

export const authFailed = (err) => {
  return {
    type: AUTH_FAILED,
    err
  }
}

export const logoutAction = () => {
  return {
    type: LOGOUT
  }
}

export const registerAction = (e, data, setRegister, setAlert, history) => {
  e.preventDefault();
  return function(dispatch) {
    dispatch(authRequest())

    axios
      .get(`${process.env.GET_USER}/${data.name}`)
      .then((result) => {
        if(result.data.length > 0) {
          setRegister({
            ...data,
            password: ""
          })
          setAlert("Username or email already taken")
          dispatch(authFailed("Invalid"))
        } else {
          axios
            .post(process.env.REGISTER, data)
            .then((result) => {
              dispatch(registerSuccess(result.data))
              history.push('/login')
            })
            .catch((error) => dispatch(authFailed(error)))
        }
      })
  }
}

export const loginAction = (e, data, history, setLogin) => {
  e.preventDefault();
  return function(dispatch) {
    dispatch(authRequest())

    axios
      .post(process.env.LOGIN, data)
      .then((result) => {
        if(result.data.token !== undefined) {
          localStorage.token = result.data.token
          localStorage.payload = JSON.stringify(result.data.data);
          dispatch(loginSuccess(result.data.token))

          history.push('/')
        } else {
          setLogin({
            ...data,
            password: ""
          })
          dispatch(authFailed("Invalid"))
        }
      })
      .catch((error) => dispatch(authFailed(error)))
  }
}