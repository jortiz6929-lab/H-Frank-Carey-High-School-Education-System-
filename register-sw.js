"use strict";

/**
 * Points directly to the worker in your main folder.
 * This fixes the "looping" by making sure the file is actually found.
 */
const stockSW = "/sw.js"; 

/**
 * Global utility used to register the worker.
 */
async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !["localhost", "127.0.0.1"].includes(location.hostname)
    )
      throw new Error("Secure connection required for resources.");

    throw new Error("Legacy browser detected; please update for portal access.");
  }

  // Registers the worker so the search bar actually "goes" somewhere
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}
