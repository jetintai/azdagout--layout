<template>
  <div class="project-item">
      <a class="project-item__button" data-bs-toggle="collapse"
              :data-bs-target="'#flush-project-' + project.id" aria-expanded="false" aria-controls="flush-collapseOne">
        <span class="col project-item__title">{{ project.name }}</span>
        <div class="col"><span class = "project-item__status">{{ project.status }}</span></div>
        <div class="col project-item__controls">
          <span class="project-item__count">{{ tasks.length }}</span>
          <i class="icon icon-ui-flag project-item__flag"></i>
        </div>
      </a>
    <div :id="'flush-project-'  + project.id" class="project-item__content" aria-labelledby="flush-headingOne"
         data-bs-parent="#accordionFlushExample">
      <div class="project-item__body">
        <p class="project-item__desc">
          {{ project.description }}
        </p>
        <div class="project-tasks">
          <div v-for="(task, index) in tasks" :key="index" class="project-tasks__item">
            <div class="col-4"><span class="project-tasks__title">{{ task.name }}</span></div>
            <div class="col project-tasks__tags">
              <span class="project-tasks__tag" :key="index" v-for="(tag, index) in task.tags.split(',')">{{
                  tag
                }}</span>
            </div>
            <div class="col"><span class="project-tasks__date">{{ dateFormat(task.date) }}</span></div>
            <div class="col-1"><i class="icon icon-ui-flag project-item__flag"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsController from "@/controllers/ProjectsController";

export default {
  name: 'ProjectSpoiler',
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      tasks: ProjectsController.getTasksByProjectId(this.project.id)
    }
  },
  methods: {
    dateFormat(str) {
      let d = Date.parse(str);
      let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      return `${da} ${mo} ${ye}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';

.project-item {
  margin-bottom:40px;

  &__button {
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__title {
    @include font-regular-nembus;
    text-decoration: dotted;
    cursor: pointer;
    color: $c-sangina;
  }

  &__status {
    @include font-regular-almach;
    background-color: $c-malachite;
    color: $c_white;
    padding: 2px 3px;
    border-radius: 5px;
  }

  &__count {
    border: 2px solid $c-sangina;
    padding: 0px 6px;
  }

  &__controls {
    display: flex;
    align-items:center;
    justify-content: flex-end;

    span, i {
      margin: 0 10px;
    }


  }

  &span {
    margin:0 10px;
  }

  &__desc {
    @include font-regular-mirach;
  }

  &__flag {
    @include icon-flag;
  }

}

.project-tasks {
  &__item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: $c-honey-dew;
    border-radius: 3px;
    margin: 10px 0 10px 75px;
    padding: 10px;
    @include font-regular-almach;

    &:before {
      content: '';
      @include az-icon;
      mask-image: url('/src/assets/img/ui/content-exclusive-new-svgrepo-com.svg');
      width: 20px;
      height:20px;
    }
  }

  &__tag {
    @include font-regular-almach;
    display: inline-block;
    background-color: $c-silver;
    border-radius: 3px;
    color: $c_white;
    font-weight: bold;
    padding: 0 6px;
    margin: 5px;
  }

  &__date {
    font-style: italic;
    color: $c-silver;
  }

  &__flag {
    @include icon-flag;
  }
}


</style>
