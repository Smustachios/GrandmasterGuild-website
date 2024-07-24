const previousTabButton = document.getElementById("previous-button");
const nextTabButton = document.getElementById("next-button");
const regInputs = document.getElementById("reg-inputs");
let i = 0;

const regTabs = [
                `<form id="info-form">
                     <label class="info-label" for="f-name">First Name</label>
                     <input class="info-input" type="text" id="f-name">
                     
                     <label class="info-label" for="l-name">Last Name</label>
                     <input class="info-input" type="text" id="l-name">
                     
                     <label class="info-label" for="email">Email</label>
                     <input class="info-input" type="text" id="email">
                     
                     <label class="info-label" for="password">Password</label>
                     <input class="info-input" type="password" id="password">
                     
                     <label class="info-label" for="r-password">Repeat Password</label>
                     <input class="info-input" type="password" id="r-password">
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
                                <input id="ordinary-pick" type="radio" checked>
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
                                <input id="premium-pick" type="radio">
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
                                <input id="grandmaster-pick" type="radio">
                                <label for="grandmaster-pick">5.99$ Per month</label>
                            </div>
                        </form>`,
                 `<form id="card-form">
                     <label class="info-label" for="card-number">Card number</label>
                     <input class="info-input" type="number" id="card-number">
                     
                     <label class="info-label" for="name-on-card">Name on the card</label>
                     <input class="info-input" type="text" id="name-on-card">
                     
                     <label class="info-label" for="ccv">CCV</label>
                     <input class="info-input" type="number" id="ccv">
                  </form>`
                ]

const changeTab = (isForward) => {
    isForward ? i++ : i--;
    if (i >= regTabs.length){
        i = 0;
    }
    else if (i < 0){
        i = regTabs.length - 1;
    }

    regInputs.innerHTML = "";

    regInputs.innerHTML = regTabs[i];

    console.log("change tab");
}

previousTabButton.addEventListener("click", changeTab.bind(false));
nextTabButton.addEventListener("click", changeTab.bind(true));