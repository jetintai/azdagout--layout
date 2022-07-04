import  {projects, tasks} from '../orm/data';

// FIXME Controller for psevdo-data
class ProjectsController {
    static getTags() {
        let tags = [];
        if (Array.isArray(tasks) && tasks.length !== 0) {
            tags = tasks.map((item) => item.tags);
            const tagsString = tags.join(',');
            tags = tagsString.split(',');
            tags = [...new Set(tags)];
            return tags;
        }
        return [];
    }

    static getTasks() {
        if (Array.isArray(tasks) && tasks.length !== 0)
            return tasks;
        return [];
    }

    static getProjects() {
        if (Array.isArray(projects) && projects.length !== 0)
            return projects;
        return [];
    }

    static testFunction() {
        console.log(projects);
    }

    static getTasksByProjectId(id : number) {
        let projectTasks = [];
        if (id <= 0)
            return [];
        if (Array.isArray(tasks) && tasks.length !== 0) {
            projectTasks = tasks.filter((item) => {
                if (item.project_id == id)
                    return true;
            });
            return projectTasks;
        }

        return [];
    }
}

export default ProjectsController;