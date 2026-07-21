/* Add students to Firestore Database */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

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
  const db = getFirestore(app);
  const dbRef = collection(db, 'Students');


let form_students = document.getElementById('form_students');

form_students.addEventListener('submit', (e) => {
  e.preventDefault();
  var studentFirstName = document.getElementById('student_first_name').value;
  var studentLastName = document.getElementById('student_last_name').value;
  var studentPhone = document.getElementById('student_phone').value;
  var studentEmail = document.getElementById('student_email').value;
  var studentGroup = document.getElementById('student_group').value;
  const dbRef = collection(db, 'Students')
    const data = {
        student_first_name: studentFirstName,
        student_last_name: studentLastName,
        student_phone: studentPhone,
        student_email: studentEmail,
        student_group: studentGroup
      };
     addDoc(dbRef, data)
    .then(()=>{
      alert('Student was added successfully')
    })
    .catch((error)=>{
      alert('Error');
      console.error(error);
    });






})



/* Add information about English courses to Firestore Database */


let form_courses = document.getElementById('form_courses');

form_courses.addEventListener('submit', (e) => {
  e.preventDefault();
  var courseName = document.getElementById('course_name').value;
  var courseLevel = document.getElementById('course_level').value;
  var courseDuration= document.getElementById('course_duration').value;
  var coursePrice = document.getElementById('course_price').value;
  var courseTeacher = document.getElementById('course_teacher').value;
  
  const dbRef = collection(db, 'Courses')
    const data = {
        сourse_name: courseName,
        course_level: courseLevel,
        course_duration: courseDuration,
        course_price: coursePrice,
        course_teacher: courseTeacher
      };
     addDoc(dbRef, data)
    .then(()=>{
      alert('Course was added successfully')
    })
    .catch((error)=>{
      alert('Error');
      console.error(error);
    });

})