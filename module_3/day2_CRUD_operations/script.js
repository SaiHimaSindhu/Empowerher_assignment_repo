import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

import { 
  getFirestore, collection, addDoc, onSnapshot,
  doc, deleteDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Firebase Config (Replace with yours)
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booksRef = collection(db, "books");

// Add Book
document.getElementById("addBtn").onclick = async function () {
  let book = {
    title: title.value,
    author: author.value,
    price: Number(price.value),
    coverImageURL: imgURL.value
  };

  await addDoc(booksRef, book);

  title.value = "";
  author.value = "";
  price.value = "";
  imgURL.value = "";
};

// Fetch Books (Realtime)
onSnapshot(booksRef, (snapshot) => {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";

  snapshot.forEach((docu) => {
    let data = docu.data();
    let id = docu.id;

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${data.coverImageURL}">
      <h3>${data.title}</h3>
      <p>Author: ${data.author}</p>
      <p>Price: ₹${data.price}</p>

      <button class="btn updateBtn">Update Author</button>
      <button class="btn deleteBtn">Delete</button>
      <button class="btn viewBtn">View Details</button>
    `;

    // Update Author
    card.querySelector(".updateBtn").onclick = async () => {
      let newAuthor = prompt("Enter new author name:");
      if (newAuthor) {
        await updateDoc(doc(db, "books", id), { author: newAuthor });
      }
    };

    // Delete Book
    card.querySelector(".deleteBtn").onclick = async () => {
      await deleteDoc(doc(db, "books", id));
    };

    // View Details (Modal)
    card.querySelector(".viewBtn").onclick = () => {
      document.getElementById("modal").style.display = "flex";
      document.getElementById("mTitle").innerText = data.title;
      document.getElementById("mAuthor").innerText = data.author;
      document.getElementById("mPrice").innerText = data.price;
      document.getElementById("mImg").src = data.coverImageURL;
    };

    container.appendChild(card);
  });
});

// Close Modal
document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};
