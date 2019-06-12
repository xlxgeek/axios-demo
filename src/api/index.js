import http from './public'

export const getStation = (params) => {
    return http.fetchGet('/hydro/login/user', params);
}

export const userLogin = (params) => {
    return http.fetchPost("/hydro/login/login", params);
}
