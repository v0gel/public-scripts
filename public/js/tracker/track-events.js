(() => {
    console.log("📦 Tracker Loaded from Cloudflare");
    window.trackEvent = (eventName, data = {}) => {
      console.log(`📊 Event: ${eventName}`, data);
    };
  })();
  