/* Show courses from FireStore */


// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCHbc9r1xeUYt0Mz09vk3Tvf-1Zp9J_vNk",
    authDomain: "english-school-managing-system.firebaseapp.com",
    projectId: "english-school-managing-system",
    storageBucket: "english-school-managing-system.firebasestorage.app",
    messagingSenderId: "292022942256",
    appId: "1:292022942256:web:c129c711f179e74c098bf5"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const dbRef = collection(db, 'Courses');

  let english_course = document.getElementById('english_course');

  function loadCourses(){
    english_course.innerHTML = '<option value="">Select course</option>';
        onSnapshot(dbRef, docsSnap => {
        docsSnap.forEach(doc => {
            let option = document.createElement('option');
            option.value = doc.id;
            option.innerHTML = doc.data().сourse_name;
            english_course.appendChild(option);
          
        })
    })
}


loadCourses();