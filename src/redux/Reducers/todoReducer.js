import { v4 as uuidv4 } from 'uuid';

const initialState ={
    tasks: [
        { id: uuidv4(), Task: 'Task 1', Done: true },
        { id: uuidv4(), Task: 'Task 2', Done: false },
        { id: uuidv4(), Task: 'Task 3', Done: false },
      ],
      Show: 'All',
}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_TODO':
            return{...state,
                tasks: [...state.tasks, { id: uuidv4(), Task: payload, Done: false }],
     
            }

        case 'DELETE':
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== payload.id)
        }
        
        case 'TASK_State':
            return {
                tasks: [...state.tasks].map((task) => task.id === payload.id ? {...task, Done: !task.Done} : task),
                show:state.show
            }
        case 'EDIT':
            return{
                tasks:[...state.tasks].map((task) => task.id === payload.id ? { ...task, Task: payload.tsk} : task),
                show:state.show
            }

            case 'SHOW':
                return{
                    ...state, Show: payload
                }
        default:
           return state
    }
}

export default todoReducer
