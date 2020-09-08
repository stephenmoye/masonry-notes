const addNote = document.querySelector(".note-add");
const noteTitle = document.querySelector(".title");
const noteText = document.querySelector(".text");

noteTitle.innerHTML = localStorage.title || "Note Title";
noteText.innerHTML = localStorage.text || "Note Text";

const addNewNote = function () {
  addNote.insertAdjacentHTML(
    "beforebegin",
    '<div class="note"><div contenteditable="true" class="title">Title</div><div contenteditable="true" class="text">Text</div></div>'
  );
};

addNote.addEventListener("click", addNewNote);

setInterval(() => {
  localStorage.title = noteTitle.innerHTML;
  localStorage.text = noteText.innerHTML;
}, 1000);
