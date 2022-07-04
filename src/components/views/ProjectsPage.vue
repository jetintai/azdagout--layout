<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="accordion" id="accordionFlushExample">
          <ProjectSpoiler v-for="(project, index) in projects" :key="index" :project="project"></ProjectSpoiler>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsController from "../../controllers/ProjectsController";
import ProjectSpoiler from "@/components/ProjectSpoiler";


export default {
  name: 'ProjectsPage',
  components: {ProjectSpoiler},
  data() {
    return {
      projects: ProjectsController.getProjects(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';

</style>
