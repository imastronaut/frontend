"use strict";

function checknewUser() {
  var person = localStorage.getItem('person') ? JSON.parse(localStorage.getItem('person')) : null;
}

document.addEventListener("DOMContentLoaded", function () {
  checknewUser();
});
//# sourceMappingURL=registration201.dev.js.map
