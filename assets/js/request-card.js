import { declineRequest, approveRequest } from "./requests-data.js";

function createRequestCard(request) {
  const cardContainer = createCardContainer();
  const card = createCard();

  card.appendChild(createCardHeader(request.isSelected));
  card.appendChild(createProfileImage(request.profileImage));
  card.appendChild(createCardBody(request));

  cardContainer.appendChild(card);
  return cardContainer;
}

function createCardContainer() {
  const container = document.createElement("div");
  container.className = "col-lg-3 col-md-6 mb-2";
  return container;
}

function createCard() {
  const card = document.createElement("div");
  card.className = "card rounded-0 shadow-sm";
  return card;
}

function createCardHeader(isSelected) {
  const header = document.createElement("div");
  header.className = "card-header";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "vacation-request-select";
  checkbox.id = "vacation-request-select";
  checkbox.className = "select";
  checkbox.checked = isSelected;

  header.appendChild(checkbox);
  return header;
}

function createProfileImage(profileImage) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "text-center mt-3";

  const img = document.createElement("img");
  img.src = `assets/images/${profileImage}`;
  img.className = "rounded-circle";
  img.alt = "Profile Image";
  img.width = 85;
  img.height = 85;

  imgContainer.appendChild(img);
  return imgContainer;
}

function createCardBody(request) {
  const body = document.createElement("div");
  body.className = "card-body text-center";

  body.appendChild(createTextElement("h6", "card-title", request.name));
  body.appendChild(
    createDataGroup(
      "Submitted on:",
      new Date(request.submittedOn).toLocaleDateString()
    )
  );
  body.appendChild(
    createDataGroup("Duration:", formatDuration(request.duration))
  );
  body.appendChild(createDataGroup("Salary:", `${request.salary} JOD`));
  body.appendChild(createActionButtons(request));

  return body;
}

function createPendingCaredFooter(request) {
  const footerLabel = createTextElement("p", "text-muted fw-bold", "Currently at:");
  footerLabel.style.fontSize = "0.8rem";
  const footerValue = createTextElement("p", "text-success fw-bold", "Omar Ahmad");
  footerValue.style.fontSize = "1rem";

  const footer = document.createElement("div");
  footer.className = "text-start mt-5";
  footer.appendChild(footerLabel);
  footer.appendChild(footerValue);

  return footer;
}

function createPendingCardBody(request) {
  const body = document.createElement("div");
  body.className = "card-body text-center";

  body.appendChild(createTextElement("h6", "card-title", request.name));
  body.appendChild(
    createDataGroup(
      "Submitted on:",
      new Date(request.submittedOn).toLocaleDateString()
    )
  );
  body.appendChild(
    createDataGroup("Duration:", formatDuration(request.duration))
  );

  body.appendChild(createPendingCaredFooter(request));

  return body;
}

function createTextElement(tag, className, textContent) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = textContent;
  return element;
}

function createDataGroup(label, value) {
  const group = document.createElement("div");
  group.className = "data-group";

  group.appendChild(createTextElement("p", "label text-muted", label));
  group.appendChild(
    createTextElement("p", "submitted-on-value text-muted fw-bold", value)
  );

  return group;
}

function formatDuration(duration) {
  const dates = duration.split(" - ");
  const startDate = new Date(dates[0]);
  const endDate = new Date(dates[1]);
  const durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  const durationText =
    durationInDays > 7
      ? `${Math.ceil(durationInDays / 7)} Weeks`
      : `${durationInDays} Days`;

  return `${durationText} (${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()})`;
}

function createActionButtons(request) {
  const row = document.createElement("div");
  row.className = "row mt-2";

  const declineButton = createButton(
    request.status === 2 ? "Declined" : "Decline",
    request.status === 2 ? "btn-outline-danger" : "btn-outline-success",
    request.status === 2,
    request.status !== 1,
    () => handleDecline(request.name)
  );
  const approveButton = createButton(
    request.status === 1 ?"Approved" : "Approve",
    "btn-success",
    request.status === 1,
    true,
    () => handleApprove(request, declineButton)
  );

  appendButtonToRow(row, declineButton, "col-md-6");
  appendButtonToRow(row, approveButton, "col-md-6");

  return row;
}

function createButton(text, baseClass, isDisabled, isVisible, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `btn btn-sm ${baseClass} w-100`;
  button.textContent = text;
  button.disabled = isDisabled;
  button.style.display = isVisible ? "block" : "none";
  button.onclick = onClick;

  return button;
}

function appendButtonToRow(row, button, colClass) {
  const col = document.createElement("div");
  col.className = colClass;
  col.appendChild(button);
  row.appendChild(col);
}

function handleDecline(requestName) {
  const declineButton = event.currentTarget;
  declineButton.textContent = "Declined";
  declineButton.className = `btn btn-sm btn-outline-danger w-100`;
  declineButton.disabled = true;
  declineRequest(requestName);
}

function handleApprove(request, declineButton) {
  if (window.confirm("Are you sure you want to approve this request?")) {
    const approveButton = event.currentTarget;
    approveButton.textContent = "Approved";
    approveButton.className = `btn btn-sm btn-outline-success w-100`;
    approveButton.disabled = true;
    declineButton.style.display = "none";
    approveRequest(request.name);
  }
}

function createRequestsCards(requests) {
  let requestsContainer = document.querySelector(".requests-container");
  requestsContainer.innerHTML = "";

  for (const request of requests) {
    requestsContainer.appendChild(createRequestCard(request));
  }
}

function createPendingRequestCard(request) {
  const cardContainer = createCardContainer();
  const card = createCard();

  card.appendChild(createProfileImage(request.profileImage));
  card.appendChild(createPendingCardBody(request));

  cardContainer.appendChild(card);
  return cardContainer;
}

function createPendingRequestsCards(requests) {
  let requestsContainer = document.querySelector("#pending-requests-container");
  requestsContainer.innerHTML = "";

  for (const request of requests) {
    requestsContainer.appendChild(createPendingRequestCard(request));
  }
}

export { createRequestCard, createRequestsCards, createPendingRequestsCards };