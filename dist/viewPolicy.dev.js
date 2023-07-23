"use strict";

var policies = {
  "Bhargav": [{
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }, {
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }, {
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }, {
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }, {
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }, {
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }, {
    "Policy No": 12345,
    "Commence Date": new Date(),
    "Status": "Active",
    "Type": "General Insurance",
    "Policy Title": "Health",
    "Premium Amount": 1000,
    "Next Due Date": new Date(),
    "Sum Assured": 8900,
    "Nominee": "Yes"
  }]
};
var paginatedNumber = document.getElementById('number');
var listItems;
var paginationLimit;
var pageCount;
var navigation = document.getElementById('navigation');
console.log("navigation", navigation);
var currpage;

var addPageNumber = function addPageNumber(index) {
  var pagenumber = document.createElement("button");
  pagenumber.innerHTML = index;
  navigation.appendChild(pagenumber);
}; // Updating pagenumbers  


var getPageNumbers = function getPageNumbers() {
  if (pageCount < 2) {
    return;
  }

  var button1 = document.createElement('button');
  button1.id = "prev";
  button1.innerHTML = "&lt&lt&lt";
  navigation.append(button1);

  for (var i = 1; i < pageCount + 1; i++) {
    addPageNumber(i);
  }

  var button2 = document.createElement('button');
  button2.id = "next";
  button2.innerHTML = "&gt&gt&gt";
  navigation.append(button2);
};

document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById('table-body');
  data = policies["Bhargav"];

  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");
    var policyno = document.createElement('td');
    policyno.textContent = data[i]["Policy No"];
    tr.appendChild(policyno);
    var commenceDate = document.createElement('td');
    commenceDate.textContent = data[i]["Commence Date"].toDateString();
    tr.appendChild(commenceDate);
    var status = document.createElement('td');
    status.textContent = data[i]["Status"];
    tr.appendChild(status);
    var type = document.createElement('td');
    type.textContent = data[i]["Type"];
    tr.appendChild(type);
    var title = document.createElement('td');
    title.textContent = data[i]["Policy Title"];
    tr.appendChild(title);
    var premium = document.createElement('td');
    premium.textContent = data[i]["Premium Amount"];
    tr.appendChild(premium);
    var dueDate = document.createElement('td');
    dueDate.textContent = data[i]["Next Due Date"].toDateString();
    tr.appendChild(dueDate);
    var sumAssured = document.createElement('td');
    sumAssured.textContent = data[i]["Sum Assured"];
    tr.appendChild(sumAssured);
    var Nominee = document.createElement('td');
    Nominee.textContent = data[i]["Nominee"];
    tr.appendChild(Nominee);
    table.appendChild(tr);
  }

  paginationLimit = 5;
  listItems = document.getElementsByTagName('tr');
  pageCount = Math.ceil(listItems.length / 5);
  getPageNumbers();
});
//# sourceMappingURL=viewPolicy.dev.js.map
