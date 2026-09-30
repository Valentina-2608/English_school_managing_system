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


// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const dbRef = collection(db, 'Courses');

  let block_courses = document.querySelector('.block_courses');
  let show_courses = document.getElementById('show_courses');
  show_students.addEventListener('click', showAllCourses);

  function showAllCourses(){
      onSnapshot(dbRef, docsSnap => {
      docsSnap.forEach(doc => {
        let block_new_course = document.createElement('div');
        block_new_course.classList.add('block_new_course');
  
        
        let new_course_name = document.createElement('div');
        new_course_name.classList.add('new_course_name')
        new_course_name.innerHTML = doc.data().course_name;

        let new_course_name = document.createElement('div');
        new_course_name.classList.add('new_course_name')
        new_course_name.innerHTML = doc.data().course_name;

        let new_course_level = document.createElement('div');
        new_course_level.classList.add('new_course_level')
        new_course_level.innerHTML = doc.data().course_level;
  
        let new_course_duration = document.createElement('div');
        new_course_duration.classList.add('new_course_duration')
        new_course_duration.innerHTML = doc.data().course_duration;

        let new_course_price = document.createElement('div');
        new_course_price.classList.add('new_course_price')
        new_course_price.innerHTML = doc.data().course_price;

        let new_course_teacher = document.createElement('div');
        new_course_teacher.classList.add('new_course_teacher')
        new_course_teacher.innerHTML = doc.data().course_teacher;
  
       
  
        block_new_course.appendChild(new_course_name);
        block_new_course.appendChild(new_course_level);
        block_new_course.appendChild(new_course_duration);
        block_new_course.appendChild(new_course_price);
        block_new_course.appendChild(new_course_teacher);
       
        block_courses.appendChild(block_new_course);
  
        setTimeout(()=>{
          location.reload()
        },50000)
  
        
      })
  
    })
   
    }