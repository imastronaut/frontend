"use strict";

var policyTypes = ["General Insurance", "Life Insurance"];
var policyTitles = {
  "General Insurance": ["Health Insurance", "Motor Insurance", "Home Insurance", "Fire Insurance", "Travel Insurance"],
  "Life Insurance": ["Term Life Insurance", "Whole Life Insurance", "Endownment Plans", "Unit-Linked Insurance Plans", "Child-Plans", "Pension Plans"]
};
var policyTypeTag = document.getElementById("policyType");
var policyTitleTag = document.getElementById('policyTitle');

function updatePolicyTypesTag() {
  for (var i = 0; i < policyTypes.length; i++) {
    var optionTag = document.createElement('option');
    optionTag.value = policyTypes[i];
    optionTag.textContent = policyTypes[i];
    policyTypeTag.appendChild(optionTag);
  }
}

function updatePolicyTitleTag() {
  if (policyTypeTag.value != "") {
    var type = policyTypeTag.value;

    for (var i = 0; i < policyTitles[type].length; i++) {
      var optionTag = document.createElement('option');
      optionTag.value = policyTitles[type][i];
      optionTag.textContent = policyTitles[type][i];
      policyTitleTag.appendChild(optionTag);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updatePolicyTypesTag();
  updatePolicyTitleTag();
});
//# sourceMappingURL=changePolicy.dev.js.map
