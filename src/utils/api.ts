import qs from "query-string"
import axios from 'axios'

import type { IPut, IGet, IPost, IPatch, IDelete, IPostMultipart } from '@/modules/IAxios'
import { useAuthenticationStore } from '@/modules/auth/store'
import { redirect } from 'next/navigation'


class HttpFacade {
  private http
  private httpMultipart
  private baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  constructor() {
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    })
    this.httpMultipart = axios.create({
      baseURL: this.baseUrl,
      headers: { 'Content-Type': 'multipart/form-data' },
    })



    this.http.interceptors.request.use(
      (config) => {
        if (!config.headers.get('Authorization')) {
          if (typeof window !== 'undefined') {
            // Access the Zustand store only on the client-side
            try {
              const { access } = useAuthenticationStore.getState()
              if (access && access.token) {
                config.headers['Authorization'] = `Bearer ${access?.token}`
              }
            } catch (error) {
              console.log(error)
            }
          }
        }
        return config
      },
      (error) => Promise.reject(error)
    )
    this.httpMultipart.interceptors.request.use(
      (config) => {
        if (!config.headers.get('Authorization')) {
          if (typeof window !== 'undefined') {
            // Access the Zustand store only on the client-side
            try {
              const { access } = useAuthenticationStore.getState()
              if (access && access.token) {
                config.headers['Authorization'] = `Bearer ${access?.token}`
              }
            } catch (error) {
              console.log(error)
            }
          }
        }
        return config
      },
      (error) => Promise.reject(error)
    )


    this.http.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const { response } = error
        return Promise.reject(response.data)
      }
    )

  }

  upload = async ({ url, data, headers = {} }: IPostMultipart) => {
    const response = await this.httpMultipart.post(url, data, { headers })
    return response.data
  };

  post = async ({ url, body, headers = {} }: IPost) => {
    let py = { ...body }
    const response = await this.http.post(url, py, { headers })
    return response.data
  };

  patch = async ({ url, body, headers = {} }: IPatch) => {
    let py = { ...body }
    const response = await this.http.patch(url, py, { headers })
    return response.data
  };

  get = async ({ url, query = {}, body = {}, headers = {} }: IGet) => {
    let py = { ...query }
    const queryString = qs.stringify(py)
    const response = await this.http.get(`${url + '?' + queryString}`, { headers })
    return response.data
  };

  delete = async ({ url, body = {}, headers = {} }: IDelete) => {
    const response = await this.http.delete(url, { headers, data: body })
    return response.data
  };

  put = async ({ url, body, headers = {} }: IPut) => {
    let py = { ...body }
    const response = await this.http.put(url, py, { headers })
    return response.data
  };
}

const http = new HttpFacade()

export default http
