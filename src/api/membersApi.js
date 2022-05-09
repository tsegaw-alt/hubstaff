import api from './api'
const URLS = {
  fetchMembersUrl: 'members'
}
export const fetchMembers = () => {
  return api.get(URLS.fetchMembersUrl, { baseURL: 'https://run.mocky.io/v3/34234632-e36c-450d-a0a5-63249d1fa3ad' })
}
