import axios from 'axios'

// Create instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
})

// 🔥 Attach access token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// 🔥 Auto refresh token when expired
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refreshToken')

        const response = await axios.post(
          'http://127.0.0.1:8000/api/v1/token/refresh/',
          { refresh: refreshToken }
        )

        const newAccess = response.data.access

        // Save new token
        localStorage.setItem('accessToken', newAccess)

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`
        return api(originalRequest)

      } catch (err) {
        // Refresh failed → logout
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api