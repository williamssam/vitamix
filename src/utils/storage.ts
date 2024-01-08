import Cookies from 'js-cookie'

const cookie_name = ''

export const setAccessToken = (token: string) => Cookies.set(cookie_name, token)
export const getAccessToken = () => Cookies.get(cookie_name)
export const removeAccessToken = () => Cookies.remove(cookie_name)
