import {createRequestsCards} from "./request-card.js";
import {getRequestsRange, getUserVacationRequestsCount, getUserLeaveRequestsCount} from "./requests-data.js";
import {userSummary} from "./user-summary.js";

createRequestsCards(getRequestsRange('Omar Al-Khatib', 0, 4));


function loadProfileInfo(userSummary) {
    document.getElementById('profile-image').src = `assets/images/${userSummary.profileImage}`
    document.getElementById('user-name').innerText = userSummary.name;
    document.getElementById('user-position').innerText = userSummary.position;
    document.getElementById('corporate-level').innerText = `Level ${userSummary.corporateLevel}`;
    document.getElementById('reporting-to').innerText = `${userSummary.reportingTo}`;

    document.getElementById('user-short-name').innerText = userSummary.name.split(' ')[0];

    document.getElementById('vacation-requests-count').innerText = getUserVacationRequestsCount(userSummary.name);
    document.getElementById('leave-requests-count').innerText = getUserLeaveRequestsCount(userSummary.name);
}



const headers = document.querySelectorAll(".card-header");
headers.forEach((header) => {
    header.style.display = "none";
});

loadProfileInfo(userSummary);