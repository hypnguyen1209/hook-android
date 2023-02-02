Java.perform(function() {
	try {
		var Activity = Java.use("com.learnium.RNDeviceInfo.RNDeviceModule");
		Activity.isEmulator.implementation = function() {
			Promise.resolve(false)
		}
	} catch (error) {
		console.log("[-] Error Detected");
		console.log((error.stack));
	}
});
