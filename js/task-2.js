function calcAverageCalories(days) {
  let sumValue = 0;
  let caloriesDay = [];
  for (let day of days) {
    caloriesDay.push(Object.values(day));
  }
  for (let item of caloriesDay) {
    for (let it of item) {
      if (typeof it === 'number') {
        sumValue += it;
      }
    }
  }
  const rez = sumValue / caloriesDay.length;
  if (rez > 0) {
    return rez;
  } else return 0;
}
console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
