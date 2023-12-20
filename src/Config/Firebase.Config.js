import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV49tUM2poDjXd7Lb0S1z6gU7GNK-9gKQ",
  authDomain: "task-management-system-92155.firebaseapp.com",
  projectId: "task-management-system-92155",
  storageBucket: "task-management-system-92155.appspot.com",
  messagingSenderId: "520077706882",
  appId: "1:520077706882:web:4fe5a45922828d3fded69b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
