import Consts from '../Consts';

const actionTypeToFunction = {
    [Consts.ACTION_TYPES.CREATE_TASK]: createTask,
    [Consts.ACTION_TYPES.REMOVE_TASK]: removeTask
};

let initialState = {doneTasks: [], undoneTasks: [], isLoading: true};

function taskReducer(state = initialState, action) {
    if (!actionTypeToFunction[action.type]) {
        return state;
    }

    return actionTypeToFunction[action.type](state, action.payload);
}

function createTask(state, payload) {
    return {...state, undoneTasks: state.undoneTasks.concat(payload.task)};
}

function removeTask(state, payload) {
    return {...state};
}

export default taskReducer;