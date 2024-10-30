// firebase.js (or wherever you initialize Firebase)
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";


const firebaseConfig = {
    // apiKey: "process.env.API_KEY",
    // authDomain: "process.env.AUTH_DOMAIN",
    // projectId: "process.env.PROJECT_ID",
    // storageBucket: "process.env.STORAGE_BUCKET",
    // messagingSenderId: "process.env.MESSAGING_SENDER_ID",
    // appId: "process.env.APP_ID",
    // measurementId: "process.env.MEASUREMENT_ID"
    apiKey: "AIzaSyBHVY9mEbyoVxnEMobhMQxS79970_wPfrc",
    authDomain: "crmfrontend-6c848.firebaseapp.com",
    projectId: "crmfrontend-6c848",
    storageBucket: "crmfrontend-6c848.appspot.com",
    messagingSenderId: "1028744715490",
    appId: "1:1028744715490:web:269e2608bded8490b552bb",
    measurementId: "G-88CVBBHYVV"

};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export const sendPasswordResetLink = async (email) => {
    const sendCustomPasswordResetEmail = httpsCallable(functions, "sendCustomPasswordResetEmail");
    const resetLink = "http://localhost:3000/reset-password"; // Adjust for production URL

    try {
        const response = await sendCustomPasswordResetEmail({ email, link: resetLink });
        alert("Password reset email sent! Use this link to reset: " + response.data.resetLink);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        alert(error.message);
    }
};
