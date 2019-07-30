import { createStore } from 'redux';
import { getCurrentDate, getDate } from '../utils/Date';

const initialState = {
  workouts: [
    {
      date: getCurrentDate(),
      exercises: [
        {
          exercise: 'Bench Press',
          sets: [
            { reps: 8, restTime: 60, weight: 100 },
            { reps: 10, restTime: 120, weight: 200 }
          ]
        }
      ]
    },
    {
      date: getDate(-1),
      exercises: [
        {
          exercise: 'Squat',
          sets: [
            { reps: 8, restTime: 60, weight: 100 },
            { reps: 10, restTime: 120, weight: 200 }
          ]
        }
      ]
    }
  ]
};

function workoutReducer(state = {}, action) {
  switch (action.payload) {
    case 'addWorkout':
      return { ...state, workouts: [...action.payload, ...state.workouts] };
  }
  return state;
}

function addWorkoutAction(date, name) {
  return {
    type: 'addWorkout',
    payload: { date, name }
  };
}

const store = createStore(workoutReducer, initialState);

export default store;
