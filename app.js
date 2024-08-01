const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function CreateDate(monthsDays, perMonth, perWeek) {
  let ans = [];
  let currentWeek = [];
  let weeks = [];

  // Generate weeks
  for (let i = 0; i < monthsDays; i++) {
    const dayIndex = i % 7;
    currentWeek.push({
      day: days[dayIndex],
      date: i + 1,
    });

    if (dayIndex === 6 || i === monthsDays - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Generate unique random week indices
  let uniqueWeekIndices = new Set();
  while (uniqueWeekIndices.size < perWeek) {
    const randomWeekNum = Math.floor(Math.random() * weeks.length);
    uniqueWeekIndices.add(randomWeekNum);
  }

  let selectedDays = [];
  
  // For each selected week, pick random days
  uniqueWeekIndices.forEach(weekIndex => {
    const week = weeks[weekIndex];
    let uniqueDayIndices = new Set();
    
    while (uniqueDayIndices.size < perMonth) {
      const randomDayNum = Math.floor(Math.random() * week.length);
      uniqueDayIndices.add(randomDayNum);
    }
    
    uniqueDayIndices.forEach(dayIndex => {
      selectedDays.push(week[dayIndex]);
    });
  });

  // Shuffle the days to randomize their order
  for (let i = selectedDays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedDays[i], selectedDays[j]] = [selectedDays[j], selectedDays[i]];
  }

  return selectedDays;
}

console.log(CreateDate(31, 3, 1));
