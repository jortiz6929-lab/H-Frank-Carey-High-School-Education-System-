"use strict";

const stockSW = "/sw.js"; 

async function registerSW() {
  if (!navigator.serviceWorker) {
    throw new Error("Your browser does not support the required curriculum tools.");
  }

  // Registering the worker in the main folder using our hidden prefix
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}

// Automatically start the connection when the page loads
registerSW().catch(console.error);
