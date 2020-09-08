const addNote = document.querySelector(".note-add");

const addNewNote = function () {
  addNote.insertAdjacentHTML(
    "beforebegin",
    '<div class="note"><div contenteditable="true" class="title">Title</div><div contenteditable="true" class="text">Text</div></div>'
  );
};

addNote.addEventListener("click", addNewNote);
