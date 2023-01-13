import { React, useRef, useState } from "react";

import "firebase/compat/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { signInAnonymously } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDExTGrAXK0KrDGCVfBj9PZzBrUemegq1U",
  authDomain: "chat-app-164e0.firebaseapp.com",
  projectId: "chat-app-164e0",
  storageBucket: "chat-app-164e0.appspot.com",
  messagingSenderId: "1072635573296",
  appId: "1:1072635573296:web:d0df3d49f3c482c3dd69f5",
  measurementId: "G-983H8L01ZW",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();

function ChatApp() {
  const [user] = useAuthState(auth);

  return (
    <div className="chat">
      <section className="chat-1">
        <div className="heading">
          <h2>
            <span className="cheese">Cheese Chat</span> 🧀😃🎉
          </h2>
          <SignOut />
        </div>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <section className="login-area">
        <button className="sign-in" onClick={signInWithGoogle}>
          <img src="/imgs/google-logo.svg" />
          Sign in with Google
        </button>
        <button className="sign-in" onClick={() => signInAnonymously(auth)}>
          <img src="/imgs/person.svg" />
          Sign in as Guest
        </button>
        <p>
          Welcome! Feel free to chat, but remeber not to say anything bad about
          cheese (this will result in an instant ban!).
        </p>
      </section>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(200);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="main-app">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </section>

      <form className="chat-form" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="'I love cheese because...'"
        />

        <button type="submit" disabled={!formValue}>
          🧀 Send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="img1"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatApp;
