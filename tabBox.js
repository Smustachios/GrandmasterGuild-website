const previousTabButton = document.getElementById("previous-button");
const nextTabButton = document.getElementById("next-button");
const regInputs = document.getElementById("reg-inputs");
const regTabs = document.getElementsByClassName("reg-tab");
const bottomBorderString = "2px solid var(--d-blue)";

let currentTab = regTabs[0];
let tabIndex = 0;
let user = {
    firstName: "John",
    lastName: "Doe",
    email: "john@test.com",
    password: "1234",
    repeatPassword: "1234",
    userPlan: 0,
    cardNumber: 1234123412341234,
    nameOnCard: "Armin",
    ccv: 123
}

const getTabHTML = (userData, tabIndex) => {
    switch (tabIndex) {
        case 0:
            return `<form id="info-form">
                     <label class="info-label" for="firstName">First Name</label>
                     <input class="info-input user-input" type="text" id="firstName" value="${userData.firstName}">
                     
                     <label class="info-label" for="lastName">Last Name</label>
                     <input class="info-input user-input" type="text" id="lastName" value="${userData.lastName}">
                     
                     <label class="info-label" for="email">Email</label>
                     <input class="info-input user-input" type="text" id="email" value="${userData.email}">
                     
                     <label class="info-label" for="password">Password</label>
                     <input class="info-input user-input" type="password" id="password" value="${userData.password}">
                     
                     <label class="info-label" for="repeatPassword">Repeat Password</label>
                     <input class="info-input user-input" type="password" id="repeatPassword" value="${userData.repeatPassword}">
                  </form>`;
        case 1:
            return `<form id="plan-form">
                        <div id="ordinary-plan">
                            <h3>Ordinary plan</h3>
                                <ul>
                                    <li>Description 1</li>
                                    <li>Description 2</li>
                                    <li>Description 3</li>
                                    <li>Description 4</li>
                                </ul>
                                <input class="user-input" id="ordinary-pick" type="radio" name="user-plan" ${userData.userPlan === 0 ? "checked" : ""}>
                                <label for="ordinary-pick">5.99$ Per month</label>
                            </div>
                            <div id="premium-plan">
                                <h3>Premium plan</h3>
                                <ul>
                                    <li>Description 1</li>
                                    <li>Description 2</li>
                                    <li>Description 3</li>
                                    <li>Description 4</li>
                                </ul>
                                <input class="user-input" id="premium-pick" type="radio" name="user-plan" ${userData.userPlan === 1 ? "checked" : ""}>
                                <label for="premium-pick">24.99$ Per month</label>
                            </div>
                            <div id="grandmaster-plan">
                                <h3>Grandmaster plan</h3>
                                <ul>
                                    <li>Description 1</li>
                                    <li>Description 2</li>
                                    <li>Description 3</li>
                                    <li>Description 4</li>
                                </ul>
                                <input class="user-input" id="grandmaster-pick" type="radio" name="user-plan" ${userData.userPlan === 2 ? "checked" : ""}>
                                <label for="grandmaster-pick">49.55$ Per month</label>
                            </div>
                        </div>
                    </form>`;
        case 2:
            return `<form id="card-form">
                        <label class="info-label" for="cardNumber">Card number</label>
                        <input class="info-input user-input" type="number" id="cardNumber" value="${userData.cardNumber}">
                        <label class="info-label" for="nameOnCard">Name on the card</label>
                        <input class="info-input user-input" type="text" id="nameOnCard" value="${userData.nameOnCard}">
                        <label class="info-label" for="ccv">CCV</label>
                        <input class="info-input user-input" type="number" id="ccv" value="${userData.ccv}">
                    </form>`;
        case 3:
            return `<div id="confirm-container">
                            <div class="confirm-section">
                                <h4>First Name</h4>
                                <p>${userData.firstName}</p>
                                <h4>Last Name</h4>
                                <p>${userData.lastName}</p>
                                <h4>Email</h4>
                                <p>${userData.email}</p>
                                <h4>Password</h4>
                                <p>${userData.password}</p>
                            </div>
                            <div class="confirm-section">
                                <h4>Your plan</h4>
                                <p>${getPlanName(userData.userPlan)}</p>
                            </div>
                            <div class="confirm-section">
                                <h4>Payment card</h4>
                                <p>${user.cardNumber}</p>
                                <h4>Payment Amount</h4>
                                <p>${getPlanPrice(userData.userPlan)}</p>
                            </div>
                            <button id="reg-button" onclick="regUser()">REGISTER</button>
                        </div>
                    </div>`;
        default:
            console.log("tab does not exist");
            return "";
    }
}

currentTab.style.borderBottom = "none";
regInputs.innerHTML = getTabHTML(user, tabIndex);

function changeTab(){
    regInputs.innerHTML = "";
    regInputs.innerHTML = getTabHTML(user, tabIndex);
    currentTab.style.borderBottom = bottomBorderString;
    currentTab = regTabs[tabIndex];
    currentTab.style.borderBottom = "none";
}

function getPlanName(planIndex){
    if (planIndex === 0)
        return "Ordinary plan"
    else if (planIndex === 1)
        return "Premium plan"
    else if (planIndex === 2)
        return "Grandmaster plan"
}

function getPlanPrice(planIndex){
    if (planIndex === 0)
        return "$5.99"
    else if (planIndex === 1)
        return "$24.99"
    else if (planIndex === 2)
        return "$49.99"
}

const changeTabForward = () => {
    ++tabIndex;
    if (tabIndex >= regTabs.length){
        tabIndex = 0;
    }

    let value = fetchFields();
    if (value > 0) {
        --tabIndex;
        return;
    }

    changeTab();
}

const changeTabBackward = () => {
    --tabIndex;
    if (tabIndex < 0){
        tabIndex = regTabs.length - 1;
    }

    let value = fetchFields();
    if (value > 0){
        ++tabIndex;
        return;
    }
    
    changeTab();
}

const fetchFields = () => {
    if (tabIndex >= regTabs.length)
        return 0;

    const userInputs = regInputs.children[0].getElementsByClassName("user-input");

    if (tabIndex === 2){
        for (let i = 0; i < userInputs.length; ++i){
            if (userInputs[i].checked){
                user.userPlan = i;
                return 0;
            }
        }
    }

    for (let i = 0; i < userInputs.length; ++i){
        if (userInputs[i].value === null || userInputs[i].value === ""){
            alert(`${userInputs[i].id} cant be empty`);
            return 1;
        }

        user[userInputs[i].id] = userInputs[i].value;
        console.log(user[userInputs[i].id]);
    }

    return 0;
}

function regUser(){
    alert("user registered");
}

previousTabButton.addEventListener("click", changeTabBackward);
nextTabButton.addEventListener("click", changeTabForward);