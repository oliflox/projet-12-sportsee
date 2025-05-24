import { userData } from '../mock/userData'
import { activityData } from '../mock/activityData'
import { averageSessionsData } from '../mock/averageSessionsData'
import { performanceData } from '../mock/performanceData'

const API_URL = import.meta.env.VITE_API_URL
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true'

export const getUserData = async (userId) => {
  if (USE_MOCK_DATA) {
    return userData
  }
  const response = await fetch(`${API_URL}/user/${userId}`)
  return response.json()
}

export const getActivityData = async (userId) => {
  if (USE_MOCK_DATA) {
    return activityData
  }
  const response = await fetch(`${API_URL}/user/${userId}/activity`)
  return response.json()
}

export const getAverageSessionsData = async (userId) => {
  if (USE_MOCK_DATA) {
    return averageSessionsData
  }
  const response = await fetch(`${API_URL}/user/${userId}/average-sessions`)
  return response.json()
}

export const getPerformanceData = async (userId) => {
  if (USE_MOCK_DATA) {
    return performanceData
  }
  const response = await fetch(`${API_URL}/user/${userId}/performance`)
  return response.json()
}  