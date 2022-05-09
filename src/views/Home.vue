<template>
  <div class="content">
    <div>
      <h4 class="member-title">Members</h4>
    </div>
    <div class="search">
      <b-col col="">
        <b-input-group>
          <b-input-group-prepend is-text>
            <span class="search-icon"><b-icon icon="search"></b-icon></span>
          </b-input-group-prepend>
          <b-form-input
            id="input-live"
            class="input-form"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Search members"
            trim
            v-model="searchTerm"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </div>

    <section class="tab-content">
      <b-tabs no-nav-style>
        <b-tab title="MEMBERS (3)" active>
          <b-card-text>
            <h6 class="sub-title">
              1 of 2 members counts towards your pricing plan
              <b-icon
                id="popover-target-1"
                icon="info-circle-fill"
                scale="1"
                variant="secondary"
              ></b-icon>
            </h6>

            <b-popover
              custom-class="my-popover-class"
              target="popover-target-1"
              triggers="hover"
              placement="top"
            >
              <p>{{ PricingPopOver }}</p>
            </b-popover>

            <div class="filter">
              <b-row>
                <b-col cols="3">
                  <label for="input-live">ROLE</label>

                  <b-form-select v-model="selectedRole" :options="roles">
                    <template #first>
                      <b-form-select-option :value="all">
                        All roles
                      </b-form-select-option>
                    </template>
                  </b-form-select>
                </b-col>
                <b-col cols="3">
                  <label for="input-live">TIME TRACKING</label>
                  <b-form-select
                    v-model="selectedTimeTracking"
                    :options="timeTracking"
                  >
                    <b-form-select-option :value="all">
                      All Time Tracking
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
                <b-col class="btn">
                  <b-button variant="primary">Invite Member</b-button>
                </b-col>
              </b-row>
            </div>
            <div class="content">
              <MembersTable :fields="fields" :filterMember="filterMember" />
            </div>
          </b-card-text>
        </b-tab>
        <b-tab disabled title="INVITES (4)">
          <b-card-text></b-card-text>
        </b-tab>
      </b-tabs>
    </section>
    <p class="members-count">
      Showing {{ filterMember.length }} of {{ members.length }} members
    </p>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import MembersTable from '@/components/MembersTable.vue'
export default {
  name: 'Home',
  components: { MembersTable },
  data () {
    return {
      PricingPopOver:
        "Viewers don't count towards your team of 10 ( Premium ) plan",
      fields: [
        { key: 'checkbox', label: '' },
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'projects', label: 'Projects' },
        { key: 'payment', label: 'Payment' },
        { key: 'limit', label: 'Limits' },
        { key: 'edit', label: '' },
        { key: 'time_tracking', label: 'Time tracking' },
        { key: 'actions', label: 'Actions' }
      ],
      timeTracking: ['Enabled', 'Disabled'],
      search: '',
      selectedRole: '',
      selectedTimeTracking: '',
      searchTerm: '',
      all: ''
    }
  },
  created () {
    this.loadMembers()
  },
  methods: {
    ...mapActions(['fetchMembers']),
    async loadMembers () {
      await this.fetchMembers()
    }
  },

  computed: {
    ...mapState({
      members: state => state.membersModule.members,
      roles: state => state.membersModule.roles
    }),
    filterMember () {
      if (this.searchTerm) {
        return this.members.filter(member =>
          member.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      }
      if (this.selectedRole) {
        return this.members.filter(member =>
          member.role.toLowerCase().includes(this.selectedRole.toLowerCase())
        )
      }
      if (this.selectedTimeTracking) {
        return this.members.filter(member =>
          member.time_tracking
            .toLowerCase()
            .includes(this.selectedTimeTracking.toLowerCase())
        )
      } else {
        return this.members
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.member-title {
  margin-top: 2em;
  color: #7a7777;
}
.search {
  float: right;
  border-radius: 30%;
  margin-top: 2em;
  margin-right: 2em;
}
#input-live {
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  width: 20em;
  border-left: none;
}
.input-group-text {
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  border-right-color: aliceblue;
  background-color: white;
}
.tab-content {
  margin-top: 2em;
  margin-left: 1em;
}
.member-tab {
  margin-left: 2.5em;
}
.nav-link :active {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: underline;
}
.sub-title {
  margin-left: 1.4em;
  margin-top: 1em;
  margin-bottom: 2em;
  color: #7a7777;
}
.btn {
  float: right;
  margin-right: 1.5em;
  margin-top: 0.8em;
}
.filter {
  margin-left: 1.2em;
}
.members-count {
  margin-left: 2em;
  color: #7a7777;
  font-size: small;
}
</style>
