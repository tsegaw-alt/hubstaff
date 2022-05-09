import { fetchMembers } from '@/api/membersApi'
import { formatMembers, removeDuplicates } from '../../_helpers/helper'
import { GET_MEMBERS, GET_ROLES } from './mutation-types'

export default {
  state: {
    members: [],
    roles: [],
    timeTracking: []
  },
  mutations: {
    [GET_MEMBERS] (state, members) {
      state.members = members
    },
    [GET_ROLES] (state, roles) {
      state.roles = roles
    }
  },
  actions: {
    async fetchMembers ({ commit }) {
      const membersApi = await fetchMembers()
      const members = membersApi.data.members

      const clonedMembers = formatMembers(members)

      const clonedMembersRole = members.map(function (member) {
        return member.role
      })
      commit(GET_MEMBERS, clonedMembers)
      commit(GET_ROLES, removeDuplicates(clonedMembersRole))
    }
  },
  getters: {
    memberLists: state => state.members
  }
}
