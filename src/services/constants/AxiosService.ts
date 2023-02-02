import axios from 'axios';

const API_URL = 'http://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export const setToken = (token: string) => {
    headers['Authorization'] = 'bearer ' + token;
    sessionStorage.setItem('session', token);
}

export const getToken = (): string|null => {
    return sessionStorage.getItem('session');
}

export const getCurrentUser = (): any|null => {
    let token: string|null = getToken();
    if(token) {
        let [header, payload, signature] = token.split('.');
        let user = JSON.parse(atob(payload));
        return user;
    } return null;
}

export function Get<T>(uri: string): Promise<T> {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}${uri}`, {headers}).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

export function Post<T>(uri: string, body: any): Promise<T> {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}${uri}`, body, {headers}).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

export function Put<T>(uri: string, body: any): Promise<T> {
    return new Promise((resolve, reject) => {
        axios.put(`${API_URL}${uri}`, {...body}, {headers}).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

export function Delete<T>(uri: string): Promise<T> {
    return new Promise((resolve, reject) => {
        axios.delete(`${API_URL}${uri}`, {headers}).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.response.data))
    })
}

if(getToken()) {
    setToken(getToken()!);
}