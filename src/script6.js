/* Show teachers from FireStore */

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


// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const dbRef = collection(db, 'Teachers');

  let block_teachers = document.querySelector('.block_teachers');
  let show_teachers = document.getElementById('show_teachers');
  show_teachers.addEventListener('click', showAllTeachers);


  function showAllTeachers(){
        onSnapshot(dbRef, docsSnap => {
        docsSnap.forEach(doc => {
            let block_new_teacher = document.createElement('div');
            block_new_teacher.classList.add('block_new_teacher');

            let new_teacher_first_name = document.createElement('div');
            new_teacher_first_name.classList.add('new_teacher_first_name')
            new_teacher_first_name.innerHTML = doc.data().teacher_first_name;

            let new_teacher_last_name = document.createElement('div');
            new_teacher_last_name.classList.add('new_teacher_last_name')
            new_teacher_last_name.innerHTML = doc.data().teacher_last_name;

            let new_teacher_phone = document.createElement('div');
            new_teacher_phone.classList.add('new_teacher_phone')
            new_teacher_phone.innerHTML = doc.data().teacher_phone;

            let new_teacher_email = document.createElement('div');
            new_teacher_email.classList.add('new_teacher_email')
            new_teacher_email.innerHTML = doc.data().teacher_email;

            let new_teacher_specialization = document.createElement('div');
            new_teacher_specialization.classList.add('new_teacher_specialization')
            new_teacher_specialization.innerHTML = doc.data().teacher_specialization;
          
            block_new_teacher.appendChild(new_teacher_first_name);
            block_new_teacher.appendChild(new_teacher_last_name);
            block_new_teacher.appendChild(new_teacher_phone);
            block_new_teacher.appendChild(new_teacher_email);
            block_new_teacher.appendChild(new_teacher_specialization);
     
            block_teachers.appendChild(block_new_teacher);
    
          setTimeout(()=>{
            location.reload()
          },50000)
    
          
        })
    
      })
     
      }