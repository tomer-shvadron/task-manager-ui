import Consts from '../Consts';

export function createTask(task) {
    return {type: Consts.ACTION_TYPES.CREATE_TASK, payload: {task}};
}

export function removeTask(id) {
    return {type: Consts.ACTION_TYPES.REMOVE_TASK, payload: {id}};
}