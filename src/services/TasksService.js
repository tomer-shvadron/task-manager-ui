import Consts from '../Consts';
import AjaxService from './AjaxService';

var TasksService = {
    getAllTasks: () => AjaxService.get(`${Consts.BASE_URL}/tasks`),

    addTask: task => AjaxService.post(`${Consts.BASE_URL}/tasks`, task),

    updateTask: task => AjaxService.put(`${Consts.BASE_URL}/tasks`, task)
};

export default TasksService;