/* Registration page */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";;

  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js"
	
  import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
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
  const auth = getAuth();
  const db = getDatabase();




  function registerUser(){
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;

    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        // ...
        set(ref(db, 'users/' + user.uid), {
                first_name:first_name,
                last_name:last_name,
                email: email,
                password:password,
                
          })
        .then(() => {
          // Data saved successfully!
            alert('User was added successfully')
            window.location.replace("admin.html");
        })
        .catch((error) => {
          // The write failed...
          alert('Error')
});
  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
     alert(errorMessage);
});

};

