import { getMessaging, getToken } from "firebase/messaging";
const messaging = getMessaging();

export async function getCurrentRegistrationToken() {
    try{
        const currentRegistrationToken = await getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY });
        if (currentRegistrationToken) 
            return currentRegistrationToken;
        return null;
    }
    catch (error) {
        console.error("Error in getting current registration token");
        return null;
    }
}

