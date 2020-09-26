export let sampleData: Object[] = [
  {
    taskID: 1,
    taskName: "planning",
    startDate:new Date("05/09/2055"),
    endDate:new Date("02/05/2056"),
    progress:10,
    duration:5,
    priority:"normal",
    approved:false,
    isInExpandedState: true,
    subtasks: [{ taskID: 1, taskName: "planning", startDate: new Date("05/09/2025"), endDate: new Date("02/02/2020"), progress: 100, duration: 5, priority: "critical", approved: false, isInExpandedState: true },
      { taskID: 2, taskName: "commiting", startDate: new Date("05/09/2520"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
      { taskID: 3, taskName: "formy", startDate: new Date("05/09/2520"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "high", approved: false, isInExpandedState: true },
      { taskID: 4, taskName: "new", startDate: new Date("05/09/2880"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "low", approved: false, isInExpandedState: true },
      { taskID: 5, taskName: "bmw", startDate: new Date("05/09/2550"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "some", approved: false, isInExpandedState: true }

    ]
  },
  {
    taskID: 2,
    taskName: "devlopment",
    startDate: new Date("05/06/2022"),
    endDate: new Date("02/08/2050"),
    progress: 70,
    duration: 8,
    priority: "critical",
    approved: false,
    isInExpandedState: true,
    subtasks: [{ taskID: 1, taskName: "planning", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 6, taskName: "fetching", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 7, taskName: "dreoning", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 8, taskName: "any state", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 9, taskName: "hell", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true }
  ]
  }, {
    taskID: 3,
    taskName: "status",
    startDate: new Date("05/09/2020"),
    endDate: new Date("02/08/2020"),
    progress: 100,
    duration: 5,
    priority: "normal",
    approved: false,
    isInExpandedState: true,
    subtasks: [{ taskID: 10, taskName: "anty", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 11, taskName: "aau", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 12, taskName: "kay", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 13, taskName: "ghnati", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true },
    { taskID: 14, taskName: "bjau", startDate: new Date("05/09/2020"), endDate: new Date("02/08/2020"), progress: 100, duration: 5, priority: "normal", approved: false, isInExpandedState: true }
  ]
  }
]
