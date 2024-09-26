export function RequestNotificationPermission(countRequested = 1) {
    const permissionGiven = Notification.requestPermission();
    if (permissionGiven === "granted") {
        console.log("Permission granted");
        return true;
    }
    else {
        console.log("Permission not granted");
        alert("Requires notification permission to work");
        if (countRequested < 3) {
            return RequestNotificationPermission(countRequested + 1);
        }
        return false;
    }
}