import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const Request = (url: string, options?: AxiosRequestConfig): AxiosInstance => {
  let headers = {}

  return Axios.create({
    baseURL: url,
    headers: {
      ...(headers || {}),
      ...options?.headers,
    },
  })
}

export default Request
