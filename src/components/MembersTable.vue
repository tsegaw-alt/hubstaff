<template>
  <div class="member-table">
    <b-table-simple borderless responsive>
      <b-thead head-variant="none">
        <b-tr>
          <b-th>
            <input type="checkbox" />
          </b-th>
          <b-th>Name</b-th>
          <b-th>Role</b-th>
          <b-th>Projects</b-th>
          <b-th>Payment</b-th>
          <b-th>Limit</b-th>
          <b-th>Time Tracking</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr class="table-row-data" v-for="item in filterMember" :key="item.id">
          <b-th>
            <b-form-group>
              <input type="checkbox" />
            </b-form-group>
          </b-th>
          <b-td>
            <b-avatar class="px-2" variant="success" padding="45px" size="2em"><br /></b-avatar>
            {{ item.name }}
          </b-td>
          <b-td class="table-row-data-role">{{ item.role }}
            <span class="table-row-data-icon">
              <b-icon icon="pencil"></b-icon>
            </span>
          </b-td>
          <b-td>{{ item.projects }}
            <span class="table-row-data-icon">
              <b-icon icon="pencil"></b-icon>
            </span>
          </b-td>
          <b-td><span class="item-notavalible-style">{{ item.payment }}</span>
            <span class="table-row-data-icon">
              <b-icon icon="pencil"></b-icon>
            </span>
          </b-td>
          <b-td>
            <span v-if="item.limits.weekly == 'No weekly limit'" class="item-notavalible-style">{{ item.limits.weekly
            }}<br /></span>
            <span v-else>{{ item.limits.weekly }}<br /></span>
            <span v-if="item.limits.daily == 'No daily limit'" class="item-notavalible-style">{{ item.limits.daily
            }}</span>
            <span v-else> {{ item.limits.daily }}</span>
            <span class="table-row-data-icon">
              <span class="p-5">
                <b-icon icon="pencil"></b-icon>
              </span>
            </span>
          </b-td>
          <b-td>
            <h5>
              <b-badge variant="success" size="lg">{{
                  item.time_tracking | capitalize
              }}</b-badge>
            </h5>
          </b-td>
          <b-td>
            <b-dropdown text=" Actions " @click="row.item;" variant="light">
            </b-dropdown>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  props: {
    filterMember: Array,
    fields: Array
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.member-table {
  margin-top: 2em;
}

.member-cell:hover {
  color: #0069d9;
}

.table-row-data {
  .item-notavalible-style {
    color: #6c757d;
  }

  .table-row-data-icon {
    display: none;
  }
}

.table-row-data:hover {
  background-color: #ffffff;
  opacity: 0.6;

  .table-row-data-role {
    color: #0069d9;

    .table-row-data-icon {
      color: #0069d9;
    }
  }

  .table-row-data-icon {
    display: inline-block;
  }
}
</style>
