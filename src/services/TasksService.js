import AjaxService from './AjaxService';

var url = 'tasks';

var TasksService = {
    getAllTasks: () => AjaxService.get(url),

    addTask: task => AjaxService.post(url, task),

    updateTask: task => AjaxService.put(url, task),

    removeTask: taskId => AjaxService.delete(`${url}/${taskId}`),

    createNewTask: description => ({description: description, isDone: false})
};

export default TasksService;