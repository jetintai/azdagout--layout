<template>
  <div class="searchBar">
    <div class="input-group col-3">
      <input type="search" class="form-control" v-model='searchQuery' placeholder="Tags's Name"
             aria-label="Recipient's username" aria-describedby="button-addon2">
    </div>
  </div>

  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
    <tr>
      <th v-for="field in fields" :key='field' @click="sortTable(field)">
        {{ field }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in filteredList" :key='item'>
      <td v-for="field in fields" :key='field'>{{ item[field] }}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import {computed, ref} from "vue";
// Importing  the lodash library
import {sortBy} from 'lodash';

export default {
  name: 'SimpleTable',
  props: {
    rows: {
      type: Array,
    },
    fields: {
      type: Array,
    }
  },

  setup(props) {
    let sort = ref(false);
    let updatedList = ref([])
    let searchQuery = ref("");

    const sortTable = (col) => {
      sort.value = true
      updatedList.value = sortBy(props.rows, col)
    }
    const sortedList = computed(() => {
      if (sort.value) {
        return updatedList.value
      } else {
        return props.rows;
      }
    });
    const filteredList = computed(() => {
      return sortedList.value.filter((product) => {
        return (
            product.tags.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    return {sortedList, sortTable, searchQuery, filteredList}
  }

}
</script>
<style scoped>
table th:hover {
  background: #f2f2f2;
}
</style>