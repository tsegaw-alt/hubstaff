import MemberModule from '../../src/store/modules/members-module'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

test('should be an object', async () => {
  const storeConfig = MemberModule
  const store = new Vuex.Store(storeConfig)
  await store.dispatch('fetchMembers')
  expect(typeof store.getters.memberLists).toEqual('object')
})

test('should be equal to John ', async () => {
  const storeConfig = MemberModule
  const store = new Vuex.Store(storeConfig)
  await store.dispatch('fetchMembers')
  expect(store.getters.memberLists[0].name)
    .toEqual('Jared Brown')
})

test('should be equal to Cody Rogers ', async () => {
  const storeConfig = MemberModule
  const store = new Vuex.Store(storeConfig)
  await store.dispatch('fetchMembers')
  expect(store.getters.memberLists[2].name)
    .toEqual('Cody Rogers')
})
