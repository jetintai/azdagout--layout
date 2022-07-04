const projects = [
    {
        id: 1,
        name: 'Test Project #1',
        description: 'This is template project',
        status: 'A-status',
        flag: 'processing'
    },
    {
        id: 2,
        name: 'Around project',
        description: 'Create project for rounded simple numbers in speciefic range.',
        status: 'started',
        flag: 'processing'
    },
];

const tasks = [
    {
        id: 1,
        project_id: 1,
        name: 'Create simple border',
        tags: "sepa, increase",
        date: '2022-12-06 12:13:34',
        flag: 'processing',
    },
    {
        id: 2,
        project_id: 2,
        name: 'Create module for generate numbers',
        tags: "code",
        date: '2022-05-13 08:11:34',
        flag: 'processing',
    },
    {
        id: 3,
        project_id: 2,
        name: 'Design application user interface ',
        tags: "design, ui",
        date: '2022-06-12 08:53:00',
        flag: 'processing',
    },
    {
        id: 4,
        project_id: 2,
        name: 'Integrate application in production',
        tags: "basines",
        date: '2023-03-01 13:00:00',
        flag: 'processing',
    }

];

export {
    projects, tasks
}