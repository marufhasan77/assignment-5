const noakhaliBtn = document.getElementById("noakhali-submit");

noakhaliBtn.addEventListener("click", function () {
  noakhaliFunction();
});

function noakhaliFunction() {
  const addMoney = document.getElementById("noakhali-input").value;
  const addMoneyNumber = parseFloat(addMoney);
  if (addMoneyNumber <= 0) {
    alert("Invalid input");
    return;
  }

  if (addMoney === "") {
    alert("Invalid input");
    return;
  }

  const balance = document.getElementById("account-balance").innerHTML;
  const balanceNumber = parseFloat(balance);
  if (balanceNumber < addMoneyNumber) {
    alert("You do not have enough balance");
  }

  const newBalance = balanceNumber - addMoneyNumber;
  const noakhaliBalance = document.getElementById("noakhali-balance").innerText;
  const newBalancee = parseFloat(noakhaliBalance) + addMoneyNumber;
  document.getElementById("noakhali-balance").innerText = newBalancee;
  document.getElementById("account-balance").innerText = newBalance;

  const div = document.createElement("div");
  div.innerHTML = `<p class="text-lg font-bold">${addMoneyNumber} Taka is Donated for Flood at Noakhali, Bangladesh</p>
          <p class="text-base font-normal text-gray-400">Date : ${new Date()} </p>`;

  div.classList = "p-5 border border-gray-200 rounded-lg";
  document.getElementById("historySection").appendChild(div);
}

const feniBtn = document.getElementById("feni-submit");

feniBtn.addEventListener("click", function () {
  feniFunction();
});

function feniFunction() {
  const addMoney = document.getElementById("feni-input").value;
  const addMoneyNumber = parseFloat(addMoney);
  if (addMoneyNumber <= 0) {
    alert("Invalid input");
    return;
  }

  if (addMoney === "") {
    alert("Invalid input");
    return;
  }

  const balance = document.getElementById("account-balance").innerHTML;
  const balanceNumber = parseFloat(balance);
  if (balanceNumber < addMoneyNumber) {
    alert("You do not have enough balance");
  }

  const newBalance = balanceNumber - addMoneyNumber;
  const feniBalance = document.getElementById("feni-balance").innerText;
  const newBalancee = parseFloat(feniBalance) + addMoneyNumber;
  document.getElementById("feni-balance").innerText = newBalancee;
  document.getElementById("account-balance").innerText = newBalance;

  const div = document.createElement("div");
  div.innerHTML = `<p class="text-lg font-bold">${addMoneyNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
          <p class="text-base font-normal text-gray-400">Date : ${new Date()} </p>`;

  div.classList = "p-5 border border-gray-200 rounded-lg";
  document.getElementById("historySection").appendChild(div);
}


const QuotaBtn = document.getElementById("Quota-submit");

QuotaBtn.addEventListener("click", function () {
    QuotaFunction();
});

function QuotaFunction() {
  const addMoney = document.getElementById("Quota-input").value;
  const addMoneyNumber = parseFloat(addMoney);
  if (addMoneyNumber <= 0) {
    alert("Invalid input");
    return;
  }

  if (addMoney === "") {
    alert("Invalid input");
    return;
  }

  const balance = document.getElementById("account-balance").innerHTML;
  const balanceNumber = parseFloat(balance);
  if (balanceNumber < addMoneyNumber) {
    alert("You do not have enough balance");
  }

  const newBalance = balanceNumber - addMoneyNumber;
  const QuotaBalance = document.getElementById("Quota-balance").innerText;
  const newBalancee = parseFloat(QuotaBalance) + addMoneyNumber;
  document.getElementById("Quota-balance").innerText = newBalancee;
  document.getElementById("account-balance").innerText = newBalance;

  const div = document.createElement("div");
  div.innerHTML = `<p class="text-lg font-bold">${addMoneyNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
          <p class="text-base font-normal text-gray-400">Date : ${new Date()} </p>`;

  div.classList = "p-5 border border-gray-200 rounded-lg";
  document.getElementById("historySection").appendChild(div);
}

function showSectionId(id){
    document.getElementById('show-donation-btn').classList.add('hidden')
    document.getElementById('historySection').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}