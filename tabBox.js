const previousTabButton = document.getElementById("previous-button");
const nextTabButton = document.getElementById("next-button");
const regInputs = document.getElementById("reg-inputs");
const regTabs = document.getElementsByClassName("reg-tab");
const bottomBorderString = "2px solid var(--d-blue)";

let currentTab = regTabs[0];
currentTab.style.borderBottom = "none";

let tabIndex = 0;


let user = {
    personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    },

    userPlan: 0,

    creditInfo: {
        cardNumber: 0,
        nameOnCard: "",
        ccv: 0
    }
}

const regTabsStrings = [
                `<form id="info-form">
                     <label class="info-label" for="f-name">First Name</label>
                     <input class="info-input" type="text" id="f-name" value="${user.personalInfo.firstName}">
                     
                     <label class="info-label" for="l-name">Last Name</label>
                     <input class="info-input" type="text" id="l-name" value="${user.personalInfo.lastName}">
                     
                     <label class="info-label" for="email">Email</label>
                     <input class="info-input" type="text" id="email" value="${user.personalInfo.email}">
                     
                     <label class="info-label" for="password">Password</label>
                     <input class="info-input" type="password" id="password" value="${user.personalInfo.password}">
                     
                     <label class="info-label" for="r-password">Repeat Password</label>
                     <input class="info-input" type="password" id="r-password" value="${user.personalInfo.repeatPassword}">
                  </form>`,
                 `<form id="plan-form">
                            <div id="ordinary-plan">
                                <h3>Ordinary plan</h3>
                                <ul>
                                    <li>Description 1</li>
                                    <li>Description 2</li>
                                    <li>Description 3</li>
                                    <li>Description 4</li>
                                </ul>
                                <input id="ordinary-pick" type="radio" name="user-plan" ${user.userPlan === 0 ? "checked" : ""}>
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
                                <input id="premium-pick" type="radio" name="user-plan" ${user.userPlan === 1 ? "checked" : ""}>
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
                                <input id="grandmaster-pick" type="radio" name="user-plan" ${user.userPlan === 2 ? "checked" : ""}>
                                <label for="grandmaster-pick">49.55$ Per month</label>
                            </div>
                        </form>`,
                 `<form id="card-form">
                     <label class="info-label" for="card-number">Card number</label>
                     <input class="info-input" type="number" id="card-number" value="${user.creditInfo.cardNumber}">
                     
                     <label class="info-label" for="name-on-card">Name on the card</label>
                     <input class="info-input" type="text" id="name-on-card" value="${user.creditInfo.nameOnCard}">
                     
                     <label class="info-label" for="ccv">CCV</label>
                     <input class="info-input" type="number" id="ccv" value="${user.creditInfo.ccv}">
                  </form>`,
                  `
                        <div id="confirm-container">
                            <div class="confirm-section">
                                <h4>First Name</h4>
                                <p>${user.personalInfo.firstName}</p>
                                <h4>Last Name</h4>
                                <p>${user.personalInfo.lastName}</p>
                                <h4>Email</h4>
                                <p>${user.personalInfo.email}</p>
                                <h4>Password</h4>
                                <p>${user.personalInfo.password}</p>
                            </div>
                            <div class="confirm-section">
                                <h4>Your plan</h4>
                                <p>${getPlanName(user.userPlan)}</p>
                            </div>
                            <div class="confirm-section">
                                <h4>Payment card</h4>
                                <p>${user.creditInfo.cardNumber}</p>
                                <h4>Payment Amount</h4>
                                <p>${getPlanPrice(user.userPlan)}</p>
                            </div>
                            <button>REGISTER</button>
                        </div>
                    </div>`
                ]


function changeTab(){
    regInputs.innerHTML = "";
    regInputs.innerHTML = regTabsStrings[tabIndex];
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
    if (tabIndex >= regTabsStrings.length){
        tabIndex = 0;
    }

    changeTab();
}

const changeTabBackward = () => {
    --tabIndex;
    if (tabIndex < 0){
        tabIndex = regTabsStrings.length - 1;
    }

    changeTab();
}

previousTabButton.addEventListener("click", changeTabBackward);
nextTabButton.addEventListener("click", changeTabForward);