let createUser = null;
const notes = {};

function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) return;
  createUser = username;
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("editor").style.display = "block";

  restoreNote();
}

function restoreNote() {
  const savedNotes = localStorage.getItem("createUser");
  if (savedNotes) {
    Object.assign(notes, JSON.parse(savedNotes));
  }

  const note = notes[createUser];
  if (note !== undefined) {
    document.getElementById("note").value = note;
  } else if (note === undefined) {
    document.getElementById("note").value = "";
  }
}

function saveNote() {
  const note = document.getElementById("note").value;
  notes[createUser] = note;
  localStorage.setItem("notes", JSON.stringify(notes));
  if (!username) {
    document.getElementById("note").value = "";
    notes[createUser] = "";
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}

function clearNote() {
  document.getElementById("note").value = "";
  notes[createUser] = "";
  localStorage.setItem("notes", JSON.stringify(notes));
}

function logout() {
  saveNote();
  // currentUser = null;
  document.getElementById("editor").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("username").value = "";
}
