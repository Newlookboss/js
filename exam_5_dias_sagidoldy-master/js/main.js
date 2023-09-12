document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const userProfileName = document.querySelector(".name");
  const userProfileLastName = document.querySelector(".last-name");
  const messageText = document.querySelector(".what-doing");
  const post = document.querySelector(".post");
  const posts = document.querySelector(".posts");
  const save = document.querySelector(".save-info");
  const loginName = document.querySelector(".login-name");
  const loginLastName = document.querySelector(".login-lastname");
  const subscribe = document.querySelector(".subscribe");
  const subscribeInput = document.querySelector(".subscribe-text");
  const modal = document.querySelector(".error");
  const myModal = new bootstrap.Modal(modal);
  const loader = document.querySelector(".loader");

  subscribe.addEventListener("click", () => {
    const subscribeData = {
      email: subscribeInput.value,
    };

    const encodedMessageData = new URLSearchParams(subscribeData);

    fetch(`http://146.185.154.90:8000/blog/dias.sgdld@bk.ru/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodedMessageData,
    });
  });

  const createLoginElement = (objectLogin) => {
    userProfileName.innerHTML = objectLogin.firstName;
    userProfileLastName.innerHTML = objectLogin.lastName;
  };

  save.addEventListener("click", () => {
    const loginData = {
      firstName: loginName.value,
      lastName: loginLastName.value,
    };

    const encodedMessageData = new URLSearchParams(loginData);

    fetch("http://146.185.154.90:8000/blog/dias.sgdld@bk.ru/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodedMessageData,
    });
  });

  let lastDataTime;

  const createMessage = (objectMessage) => {
    const messageAuthor = document.createElement("h2");
    const dateParagraph = document.createElement("h4");
    const messageParagraph = document.createElement("p");
    messageParagraph.classList.add("user-message");
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    messageAuthor.innerHTML = `<b>Author:</b>${objectMessage.user.firstName} ${objectMessage.user.lastName} said`;
    dateParagraph.innerHTML = `<b>When: </b>${Intl.DateTimeFormat().format(
      new Date(objectMessage.datetime)
    )}`;
    messageParagraph.innerHTML = `<b>Message:</b>${objectMessage.message}`;
    post.prepend(infoBlock);
    infoBlock.prepend(dateParagraph, messageAuthor, messageParagraph);
  };

  const getDataTime = (dataTime) => {
    if (dataTime)
      return fetch(
        `http://146.185.154.90:8000/blog/dias.sgdld@bk.ru/posts?datetime=${datetime}`
      );
    return "";
  };

  const getDataFrom = () => {
    loader.style.display = "block";
    fetch(`http://146.185.154.90:8000/blog/dias.sgdld@bk.ru/profile`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        createLoginElement(result);
        loader.style.display = "none";
      });
  };

  getDataFrom();

  const getMessageFrom = () => {
    loader.style.display = "block";
    fetch(
      `http://146.185.154.90:8000/blog/dias.sgdld@bk.ru/posts ` +
        getDataTime(lastDataTime)
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.length !== 0) {
          lastDataTime = result.at(-1).datetime;
          result.map((val) => {
            createMessage(val);
            loader.style.display = "none";
          });
        }
      });
  };

  getMessageFrom();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (messageText.value !== "") {
      const messageData = {
        message: messageText.value,
      };
      const encodedMessageData = new URLSearchParams(messageData);
      fetch("http://146.185.154.90:8000/blog/dias.sgdld@bk.ru/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedMessageData,
      });
    } else {
      myModal.show();
    }
  });
});
