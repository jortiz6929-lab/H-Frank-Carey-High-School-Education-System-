"use strict";

/**
 * Path to the internal curriculum worker.
 */
const stockSW = "/sw.js"; 

/**
 * Registers the background secure connection.
 */
async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !["localhost", "127.0.0.1"].includes(location.hostname)
    )
      throw new Error("Secure connection required.");

    throw new Error("Browser update required for portal access.");
  }

  // This registers the 'brain' of the proxy using your config prefix
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}

// CRITICAL FIX: This line actually turns the engine on when the page loads
registerSW().catch(console.error);
