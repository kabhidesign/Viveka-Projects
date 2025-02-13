// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, push, set } from "firebase/database";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0LlCeP9Rs900qpQxTxiJLDr3uzzOpHb0",
  authDomain: "viveka-project.firebaseapp.com",
  databaseURL: "https://viveka-project-default-rtdb.firebaseio.com",
  projectId: "viveka-project",
  storageBucket: "viveka-project.appspot.com",
  messagingSenderId: "747831972911",
  appId: "1:747831972911:web:758010714cb928c070e2da",
  measurementId: "G-89SBG6KPNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore Database
const db = getFirestore(app);

// Realtime Database
const rtdb = getDatabase(app);

// Function to get a list of cities from Firestore
export async function getCities() {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  return citySnapshot.docs.map((doc) => doc.data());
}

// Function to store form data in Realtime Database correctly
export async function saveContactData(name, email, message) {
  try {
    const contactRef = ref(rtdb, `contacts/${Date.now()}`); // Unique key using timestamp
    await set(contactRef, {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error saving message: ", error);
    return { success: false, error };
  }
}

export { db, rtdb, analytics };
