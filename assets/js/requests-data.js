const vacationRequests = [
  {
    name: "Ahmad Al-Ali",
    profileImage: "2.jpeg",
    submittedOn: "2024-07-01",
    duration: "2024-07-10 - 2024-07-15", 
    salary: 50000,
    isSelected: false,
    status: 2, // 0 - Pending, 1 - Approved, 2 - Rejected
  },
  {
    name: "Fatima Al-Hussein",
    profileImage: "1.jpeg",
    submittedOn: "2024-07-05",
    duration: "2024-07-12 - 2024-07-20", 
    salary: 55000,
    isSelected: false,
    status: 1,
  },
  {
    name: "Mohammed Al-Farsi",
    profileImage: "3.jpeg",
    submittedOn: "2024-07-10",
    duration: "2024-07-15 - 2024-07-25", 
    salary: 60000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Layla Al-Mutairi",
    profileImage: "5.jpeg",
    submittedOn: "2024-09-10",
    duration: "2024-09-10 - 2024-09-13", 
    salary: 45000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Omar Al-Khatib",
    profileImage: "4.jpeg",
    submittedOn: "2024-07-25",
    duration: "2024-07-25 - 2024-08-08", 
    salary: 65000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Aisha Al-Jabri",
    profileImage: "5.jpeg",
    submittedOn: "2024-07-25",
    duration: "2024-07-30 - 2024-08-02", 
    salary: 48000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Khalid Al-Mansouri",
    profileImage: "4.jpeg",
    submittedOn: "2024-07-30",
    duration: "2024-08-01 - 2024-08-21", 
    salary: 47000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Omar Al-Khatib",
    profileImage: "4.jpeg",
    submittedOn: "2024-9-5",
    duration: "2024-09-10 - 2024-09-11", 
    salary: 65000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Yasmin Al-Tamimi",
    profileImage: "1.jpeg",
    submittedOn: "2024-08-01",
    duration: "2024-08-05 - 2024-08-25", 
    salary: 52000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Hamza Al-Rashid",
    profileImage: "2.jpeg",
    submittedOn: "2024-08-05",
    duration: "2024-08-10 - 2024-08-24", 
    salary: 53000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Omar Al-Khatib",
    profileImage: "4.jpeg",
    submittedOn: "2024-08-10",
    duration: "2024-08-22 - 2024-09-09", 
    salary: 65000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Noura Al-Salem",
    profileImage: "5.jpeg",
    submittedOn: "2024-08-10",
    duration: "2024-08-15 - 2024-09-05", 
    salary: 56000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Tarek Al-Omari",
    profileImage: "3.jpeg",
    submittedOn: "2024-08-15",
    duration: "2024-08-18 - 2024-08-25", 
    salary: 57000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Omar Al-Khatib",
    profileImage: "4.jpeg",
    submittedOn: "2024-07-20",
    duration: "2024-08-10 - 2024-08-12", 
    salary: 65000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Amal Al-Haddad",
    profileImage: "1.jpeg",
    submittedOn: "2024-08-20",
    duration: "2024-08-22 - 2024-09-05", 
    salary: 49000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Youssef Al-Harbi",
    profileImage: "2.jpeg",
    submittedOn: "2024-08-25",
    duration: "2024-08-30 - 2024-09-12", 
    salary: 58000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Rania Al-Dosari",
    profileImage: "5.jpeg",
    submittedOn: "2024-08-30",
    duration: "2024-09-01 - 2024-09-15", 
    salary: 60000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Mohammad Al-Najjar",
    profileImage: "1.jpeg",
    submittedOn: "2024-09-01",
    duration: "2024-09-05 - 2024-09-08", 
    salary: 61000,
    isSelected: false,
    status: 0,
  },
  {
    name: "Omar Al-Khatib",
    profileImage: "4.jpeg",
    submittedOn: "2024-09-2",
    duration: "2024-09-10 - 2024-09-12", 
    salary: 65000,
    isSelected: false,
    status: 0,
  },
];

const leaveRequests = [];


function selectAll() {
  for (let i = 0; i < vacationRequests.length; i++) {
    vacationRequests[i].isSelected = true;
  }

  console.log("SELECTED ALL");
}

function deselectAll() {
  for (let i = 0; i < vacationRequests.length; i++) {
    vacationRequests[i].isSelected = false;
  }

  console.log("DESELECTED ALL");
}

function declineRequest(name) {
  for (let i = 0; i < vacationRequests.length; i++) {
    if (vacationRequests[i].name == name) {
      vacationRequests[i].isSelected = false;
      vacationRequests[i].status = 2;
    }
  }

  console.log("REQUEST DECLINED");
  console.log(vacationRequests);
}

function approveRequest(name) {
  for (let i = 0; i < vacationRequests.length; i++) {
    if (vacationRequests[i].name == name) {
      vacationRequests[i].isSelected = false;
      vacationRequests[i].status = 1;
    }
  }

  console.log("REQUEST APPROVED");
  console.log(vacationRequests);
}

function getRequestsRange(username, from, to) {
  return vacationRequests
  .filter(request => username? request.name == username : true)
  .sort((a, b) => new Date(b.submittedOn) - new Date(a.submittedOn))
  .slice(from, to);
}

function getPendingRequests(username) {
  return vacationRequests
  .filter(request => request.name == username && request.status == 0 )
  .sort((a, b) => new Date(b.submittedOn) - new Date(a.submittedOn))
  .slice(0, 4);
}

function getUserVacationRequestsCount(username) {
  return vacationRequests
  .filter(request => request.name == username)
  .length;
}

function getUserLeaveRequestsCount(username) {
  return leaveRequests
  .filter(request => request.name == username)
  .length;
}


export {
  vacationRequests,
  getRequestsRange,
  getPendingRequests,
  selectAll,
  deselectAll,
  declineRequest,
  approveRequest,
  getUserVacationRequestsCount,
  getUserLeaveRequestsCount
};
