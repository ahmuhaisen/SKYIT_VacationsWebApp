import { vacationRequestsHistory } from "./requests-history-data.js";
import { getPendingRequests } from "./requests-data.js";
import { createPendingRequestsCards } from "./request-card.js";
import {userSummary} from "./user-summary.js";


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
    document.querySelector(".user-name-text").textContent = userSummary.name;
    document.querySelector(".user-profile-image").src = `assets/images/${userSummary.profileImage}`;
    document.querySelector(".department-text").textContent = userSummary.department;
    document.querySelector(".position-text").textContent = userSummary.position;
    document.querySelector("#reporting-to").textContent = userSummary.reportingTo;
    document.querySelector("#corporate-level").textContent = `Level ${userSummary.corporateLevel}`;
    document.querySelector("#lifetime-in-years").textContent = `${userSummary.lifetimeInYears} Years`;
    document.querySelector("#vacation-days-left").textContent = `${userSummary.vacationDaysLeft} Days`;
    document.querySelector("#sick-days-left").textContent = `${userSummary.sickDaysLeft} Days`;
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
createPendingRequestsCards(getPendingRequests(userSummary.name));