import { createStore } from 'redux';
import moment from 'moment/src/moment';
import { convertDateToFormat } from '../utils/Date';

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

const getDate = (offset, date = moment()) => {
  return { date: convertDateToFormat(date.add(offset, 'days')), name: 'Name' };
};

const generateDates = () => {
  return [getDate(-2), getDate(-1), getDate(0), getDate(1), getDate(2)];
};

const store = createStore(workoutReducer, {
  workouts: generateDates()
});

export default store;
