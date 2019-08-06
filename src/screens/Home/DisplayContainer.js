import React, { Fragment } from 'react';

import { ScrollView } from 'react-native';
import DisplayItem from './components/DisplayItem';

const DisplayContainer = ({ selectedDate, workouts }) => {
  getSelectedWorkout = () =>
    Object.values(workouts).find(workout => workout.date === selectedDate);

  return (
    <Fragment>
      <ScrollView>
        {selectedDate
          ? getSelectedWorkout().exercises.map(exercise => (
              <DisplayItem key={Math.random()} exercise={exercise} />
            ))
          : workouts.map(workout => (
              <DisplayItem
                key={workout.date}
                exercise={workout.exercises[0].exercises[0]}
              />
            ))}
      </ScrollView>
    </Fragment>
  );
};

export default DisplayContainer;
