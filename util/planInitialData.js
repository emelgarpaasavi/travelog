const initialPlans = {
  plans: [
    {
      id: 1,
      plan: "Bora Bora",
      startDate: "2025-12-25",
      endDate: "2025-12-29",
      budget: 10000,
      totalExpenses: 8750,
      activities: [
        {
          id: 1,
          date: "2025-12-25",
          activity: "Lunch",
          location: "Cafe",
          time: "12:30",
          expense: 250,
          type: "food",
        },
        {
          id: 2,
          date: "2025-12-25",
          activity: "Snorkling",
          location: "Bora Bora Beach",
          time: "11:30",
          expense: 2500,
          type: "entertainment",
        },
        {
          id: 3,
          date: "2025-12-25",
          activity: "Kayak",
          location: "Bora Bora Beach",
          time: "4:30",
          expense: 1000,
          type: "entertainment",
        },
        {
          id: 4,
          date: "2025-12-29",
          activity: "Go to airport",
          location: "Bora Bora Airport",
          time: "1:30",
          expense: 5000,
          type: "transportation",
        },
      ],
    },
  ],
  isSelected: false,
  selectedId: null,
  isBudgetEdited: false,
  isError: false, 
};

export { initialPlans };
