import { createUserWithEmailAndPassword } from "firebase/auth";

export async function SignUpUser(auth , email , password , patientID) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth , email , password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode , errorMessage);
        console.error("Failing in signing up")
        return null;
    }
    
}