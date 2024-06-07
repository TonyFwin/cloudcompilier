import axios, { AxiosError } from 'axios'
import { baseUrl } from '@/config'

const axiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
