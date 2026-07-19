/* Log In page */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";;

  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js"
	
  import { getDatabase, ref, update} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

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

  let form_log_in = document.getElementById('form_login');
  form_log_in.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Log in 
      const user = userCredential.user;	
    // ...

    var loginData = new Date()
       update(ref(db, 'users/' + user.uid), {
      lastLogin: loginData
       })
      .then(() => {
      // Data saved successfully!
    alert('User logged successfully')
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
  alert(errorMessage);
});


});



