import { signInWithEmailAndPassword } from "firebase/auth";
import { RequestNotificationPermission } from "./RequestNotificationPermission";
import { getCurrentRegistrationToken } from "./MessageServiceWorker";

export async function SigninUser(auth , email , password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth , email , password);
        const user = userCredential.user;

        const notificationPermission = RequestNotificationPermission();
        const usertoken = await getCurrentRegistrationToken(); // return null | key
        if (usertoken === null) { 
            alert("Error in initializing notification service");
            return user;
        }
        // store token in db
        console.log("Token is ", usertoken);

        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode , errorMessage);
        console.error("Failing in signing in")
        return null;
    }
}