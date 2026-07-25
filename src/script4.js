/* Show students from FireStore */


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
  const dbRef = collection(db, 'Students');

  let block_students = document.querySelector('.block_students');
  let show_students = document.getElementById('show_students');
  show_students.addEventListener('click', showAllStudents);

   function showAllStudents(){
    onSnapshot(dbRef, docsSnap => {
    docsSnap.forEach(doc => {
      let block_new_student = document.createElement('div');
      block_new_student.classList.add('block_new_student');

      
      let new_student_first_name = document.createElement('div');
      new_student_first_name.classList.add('new_student_first_name')
      new_student_first_name.innerHTML = doc.data().student_first_name;

      let new_student_last_name = document.createElement('div');
      new_student_last_name.classList.add('new_student_last_name')
      new_student_last_name.innerHTML = doc.data().student_last_name;

      let new_student_phone = document.createElement('div');
      new_student_phone.classList.add('new_student_phone')
      new_student_phone.innerHTML = doc.data().student_phone;

      let new_student_email = document.createElement('div');
      new_student_email.classList.add('new_student_email')
      new_student_email.innerHTML = doc.data().student_email;

      let new_student_course = document.createElement('div');
      new_student_course.classList.add('new_student_course')
      new_student_course.innerHTML = doc.data().student_course;

      block_new_student.appendChild(new_student_first_name);
      block_new_student.appendChild(new_student_last_name);
      block_new_student.appendChild(new_student_phone);
      block_new_student.appendChild(new_student_email);
      block_new_student.appendChild(new_student_course);
     
      block_students.appendChild(block_new_student);

      setTimeout(()=>{
        location.reload()
      },50000)

      
    })

  })
 
  }