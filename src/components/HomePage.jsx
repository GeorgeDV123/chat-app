import ChatApp from "./ChatApp";

export function HomePage() {
  return (
    <>
      <section className="spacer layer2">
        <header>
          <h1>Cheese Chat</h1>
          <img src="/imgs/cheese-wedge1.svg" />
          <p>
            The newest in cheese chatting programs, our fully functional chat
            room allows eveyone to talk and share the love for cheese! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </header>
      </section>

      <section>
        <article className="main1">
          <div>
            <h2>Dont you love Cheese?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              dolorem iste dolores qui voluptatibus autem excepturi, impedit
              minus quae debitis accusamus error ut labore maxime! Nemo pariatur
              veritatis accusantium voluptates!
            </p>
            <button>
              <a href="#login">↓ Start chatting now ↓</a>
            </button>
          </div>
          <img src="/imgs/chatting.svg" alt="woman chatting" />
        </article>
      </section>

      <section className="spacer layer1">
        <div className="curve">
          <img src="/imgs/dark-waves.svg" />
        </div>
        <article className="main2">
          <div>
            <h2>Follow rules</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              dolorem iste dolores qui voluptatibus autem excepturi, impedit
              minus quae debitis accusamus error ut labore maxime! Nemo pariatur
              veritatis accusantium voluptates!
              <br />
              <br /> Atque dolorem iste dolores qui voluptatibus autem
              excepturi, impedit minus quae debitis accusamus error ut labore
              maxime! Nemo pariatur veritatis accusantium voluptates!
            </p>
          </div>
          <div>
            <h2>Have fun</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              dolorem iste dolores qui voluptatibus autem excepturi, impedit
              minus quae debitis accusamus error ut labore maxime! Nemo pariatur
              veritatis accusantium voluptates!
            </p>
          </div>
          <div>
            <h2>More Info</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              dolorem iste dolores qui voluptatibus autem excepturi, impedit
              minus quae debitis accusamus error ut labore maxime!
              <br /><br /> Nemo pariatur veritatis accusantium voluptates! Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. <br /> <br />
              Atque dolorem iste dolores qui voluptatibus autem excepturi,
              impedit minus quae debitis.
            </p>
          </div>
          <img
            src="/imgs/chatting-10.svg"
            className="hide"
            alt="man chatting"
          />
        </article>
      </section>

      <section className="spacer layer3">
        <ChatApp />
        <div id="login"></div>
      </section>
    </>
  );
}
