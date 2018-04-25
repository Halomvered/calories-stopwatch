import caloriesBurned from './caloriesBurned';

export default function totalCalories(activitiesArr, userWeight) {
    
    return activitiesArr
    .reduce((acc, curr) => acc + caloriesBurned(curr.activityMET, userWeight, curr.activityTime), 0)
    .toFixed(1);
}