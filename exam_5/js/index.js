const blogURL = `http://146.185.154.90:8000/blog/`;
const email = "argynka.2610@mail.com";
const apiURL = `${blogURL}${email}`;

const userNameElement = document.getElementById("userName");
const profileButton = document.getElementById("profile");
const subscribeButton = document.getElementById("subscribe");

const messageForm = document.getElementById("messageForm");
const newPostInputElement = document.getElementById("message");
const sendButton = document.getElementById("send");
const messagesDiv = document.getElementById("messages");

const postListElement = document.getElementById("post-list");
const postAuthorElement = postListElement.querySelector(".post-author");
const postMessageElement = document.getElementById("post-message");

let profile;

async function fetchProfile() {
  const response = await fetch(`${apiURL}/profile`);
  return await response.json();
}

async function updateProfile(firstName, lastName) {
  const response = await fetch(`${apiURL}/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName }),
  });
  return await response.json();
}

async function fetchPosts(datetime) {
  const url = datetime
    ? `${apiURL}/posts?datetime=${datetime}`
    : `${apiURL}/posts`;
  const response = await fetch(url);
  const data = await response.json();
  const posts = data.posts ? data.posts : [];
  return posts;
}

async function createPost(message) {
  const response = await fetch(`${apiURL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return await response.json();
}

async function subscribe(email) {
  const response = await fetch(`${apiURL}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to subscribe.");
  }

  return await response.json();
}

function displayPosts(posts) {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";

  if (posts.length === 0) {
    const noPostsElement = document.createElement("p");
    noPostsElement.textContent = "Сообщений нет.";
    messagesDiv.appendChild(noPostsElement);
  } else {
    for (const post of posts) {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const authorElement = document.createElement("p");
      authorElement.classList.add("post-author");
      authorElement.textContent = `${post.author.firstName} ${post.author.lastName}`;

      const messageElement = document.createElement("p");
      messageElement.classList.add("post-message");
      messageElement.textContent = post.message;

      postElement.appendChild(authorElement);
      postElement.appendChild(messageElement);
      messagesDiv.appendChild(postElement);
    }
  }
}

async function main() {
  profile = await fetchProfile();
  userNameElement.innerText = `${profile.firstName} ${profile.lastName}`;
  const posts = await fetchPosts();
  displayPosts(posts);

  setInterval(async () => {
    const latestPostDatetime = posts.length > 0 ? posts[0].datetime : null;

    if (latestPostDatetime) {
      const newPosts = await fetchPosts(latestPostDatetime);
      displayPosts(newPosts.concat(posts));
      posts.unshift(...newPosts);
    } else {
      const updatedPosts = await fetchPosts();
      displayPosts(updatedPosts);
      posts.splice(0, posts.length, ...updatedPosts);
    }
  }, 2000);
  profileButton.addEventListener("click", async () => {
    const firstName = prompt("Введите ваше имя:", profile.firstName);
    const lastName = prompt("Введите вашу фамилию:", profile.lastName);
    if (firstName && lastName) {
      const updatedProfile = await updateProfile(firstName, lastName);
      profile = updatedProfile;
      userNameElement.textContent = `${firstName} ${lastName}`;
    }
  });
  subscribeButton.addEventListener("click", async () => {
    const subscriberEmail = prompt(
      "Введите адрес электронной почты пользователя, на которого вы хотите подписаться:"
    );
    if (subscriberEmail) {
      try {
        await subscribe(subscriberEmail);
        alert("Подписка выполнена успешно.");
      } catch (error) {
        alert("Ошибка при подписке на пользователя.");
      }
    }
  });
  messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = newPostInputElement.value;
    if (message) {
      try {
        await createPost(message);
        newPostInputElement.value = "";
        const updatedPosts = await fetchPosts();
        displayPosts(updatedPosts);
        posts.splice(0, posts.length, ...updatedPosts);
      } catch (error) {
        alert("Ошибка при создании нового сообщения.");
      }
    }
  });
}
main();
