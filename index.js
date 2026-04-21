"use strict";

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    // This uses the search logic from search.js
    const url = search(address.value, searchEngine.value);
    
    // This redirects you into the "cloaked" proxy environment
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  } catch (err) {
    error.textContent = "Module failed to load. Please try again.";
    errorCode.textContent = err.toString();
  }
});
