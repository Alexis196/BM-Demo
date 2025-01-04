// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDv-YzAtMilMo9GAmNAPtNfew6JHoJ2NAc",
    authDomain: "bm-demo-e6d8c.firebaseapp.com",
    projectId: "bm-demo-e6d8c",
    storageBucket: "bm-demo-e6d8c.firebasestorage.app",
    messagingSenderId: "580982869953",
    appId: "1:580982869953:web:5be0f3d2831443dec4e940",
    measurementId: "G-HGNDQFLH6Y"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener Firestore y Analytics
const db = firebase.firestore();
const analytics = firebase.analytics();

// Exportar si es necesario
console.log("Firebase inicializado correctamente");
