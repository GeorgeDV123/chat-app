import { React } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { signInAnonymously } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { ChatRoom } from "./Messages";
import { auth} from "./firebase"

// Chat Room
function ChatApp() {
  const [user] = useAuthState(auth);

  return (
    <div className="chat">
      <section className="chat-1">
        <div className="heading-box">
          <h2>
            <span className="heading">Cheese Chat</span> 🧀😃🎉
          </h2>
          <SignOut />
        </div>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

// Google sign in
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  // Sign in screen
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
          Welcome!
        </p>
      </section>
    </>
  );
}

// Sign out button
function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default ChatApp;
