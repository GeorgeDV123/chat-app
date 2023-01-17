import { React, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {firestore, auth} from "./firebase"
import firebase from "firebase/compat/app";

export function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(200);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  // Send message + add to firebase collection
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    // Scroll to bottom on send
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    //List of messages
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

// Individual message
 function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img className="img1" src={photoURL} />
        <p>{text}</p>
      </div>
    </>
  );
}