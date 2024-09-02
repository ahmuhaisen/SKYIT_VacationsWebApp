import { vacationRequestsHistory } from "./requests-history-data.js";
import { getPendingRequests } from "./requests-data.js";
import {createPendingRequestsCards} from "./request-card.js";

const profileSummaryData = {
    name: "Omar Al-Khatib",
    profileImage: "4.jpeg",
    department: "HR Department",
    position: "Junior HR Manager",
    reportingTo: "Ahmad Muhaisen",
    corporateLevel: 10,
    lifetimeInYears: 2.5,
    vacationDaysLeft: 7,
    sickDaysLeft: 9
}


function createVacationCardCol(vacationReq) {
    // Can be outsourced to a separate function
    const startDate = new Date(vacationReq.startDate);
    const endDate = new Date(vacationReq.endDate);
    const durationInDays = Math.ceil((endDate - startDate + 1) / (1000 * 60 * 60 * 24));
    // -------------------

    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-3 col-md-4 col-sm-6';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card bg-white mb-4 p-3 shadow border-0 rounded-2';

    const titleP = document.createElement('p');
    titleP.className = 'history-card-title';
    titleP.textContent = `${vacationReq.vacationType} Vacation`;
    cardDiv.appendChild(titleP);

    const durationP = document.createElement('p');
    durationP.className = 'history-card-duration';

    const durationSpan = document.createElement('span');
    durationSpan.className = 'duration';
    durationSpan.textContent = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;

    const durationDaysSpan = document.createElement('span');
    durationDaysSpan.className = 'duration-in-days';
    durationDaysSpan.textContent = ` ${durationInDays} days`;

    durationP.appendChild(durationSpan);
    durationP.appendChild(durationDaysSpan);
    cardDiv.appendChild(durationP);

    const approvedByP = document.createElement('p');
    approvedByP.className = 'approved-by';
    approvedByP.textContent = `Approved by: ${vacationReq.approvedBy}`;
    cardDiv.appendChild(approvedByP);

    colDiv.appendChild(cardDiv);

    return colDiv;
}

function displayUserProfileSummaryData() {
    document.querySelector(".user-name-text").textContent = profileSummaryData.name;
    document.querySelector(".user-profile-image").src = `assets/images/${profileSummaryData.profileImage}`;
    document.querySelector(".department-text").textContent = profileSummaryData.department;
    document.querySelector(".position-text").textContent = profileSummaryData.position;
    document.querySelector("#reporting-to").textContent = profileSummaryData.reportingTo;
    document.querySelector("#corporate-level").textContent = `Level ${profileSummaryData.corporateLevel}`;
    document.querySelector("#lifetime-in-years").textContent = `${profileSummaryData.lifetimeInYears} Years`;
    document.querySelector("#vacation-days-left").textContent = `${profileSummaryData.vacationDaysLeft} Days`;
    document.querySelector("#sick-days-left").textContent = `${profileSummaryData.sickDaysLeft} Days`;
}


function displayVacationHistory() {
    const vacationHistoryContainer = document.querySelector('#vacation-history-container');

    vacationRequestsHistory.forEach((vacationReq) => {
        const col = createVacationCardCol(vacationReq);
        vacationHistoryContainer.appendChild(col);
    });
}



displayUserProfileSummaryData();
displayVacationHistory();
createPendingRequestsCards(getPendingRequests(profileSummaryData.name));