<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SimpleTable :fields='fields' :rows="tasks"></SimpleTable>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleTable from "@/components/SimpleTable";
import ProjectsController from "@/controllers/ProjectsController";

export default {
  name: 'TagsPage',
  components: {SimpleTable},
  setup() {
    const tasks = ProjectsController.getTasks();
    const fields = [
      'id', 'status', 'name', 'project_id', 'tags', 'date', 'flag'
    ];
    return {tasks, fields}
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';

</style>
