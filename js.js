const save = document.querySelector(".save");
const close = document.querySelector(".close");
const add = document.querySelector(".add-card");
const deletAll = document.querySelector(".delet-card");
const fillForm = document.querySelector(".container");
const qst = document.querySelector(".input-1");
const ansr = document.querySelector(".input-2");
const main = document.querySelector("main");
const ul = document.querySelector(".ull");
let sflashcards = localStorage.getItem("flashcard")
  ? JSON.parse(localStorage.getItem("flashcard"))
  : [];
add.addEventListener("click", () => {
  fillForm.classList.remove("dd");
});
close.addEventListener("click", () => {
  fillForm.classList.add("dd");
});
sflashcards.forEach(div_maker);
function div_maker(card) {
  const qstshow = document.createElement("h3");
  const answrshow = document.createElement("p");
  const li = document.createElement("li");
  const delett = document.createElement("button");
  delett.textContent = "Edit Answer";
  delett.style.background = "blue";
  delett.style.color = "white";
  delett.style.border = "none";
  qstshow.textContent = card.qstshow_my;
  answrshow.textContent = card.answrshow_my;
  answrshow.style.color = "red";
  ul.append(li);
  answrshow.classList.add("dd");

  li.append(qstshow, answrshow, delett);

  li.addEventListener("click", () => {
    answrshow.classList.toggle("dd");
  });
  delett.addEventListener("click", () => {
    const newinput = document.createElement("input");
    const newbtn = document.createElement("button");
    newbtn.textContent = "done";
    newbtn.style.color = "white";
    newbtn.style.background = "green";
    newbtn.style.padding = "8px 24px";
    newbtn.style.display = "float";

    li.append(newbtn, newinput);
    newbtn.addEventListener("click", () => {
      answrshow.textContent = newinput.value;
      card.answrshow_my = newinput.value;
      localStorage.setItem("flashcard", JSON.stringify(sflashcards));
      newinput.style.display = "none";
      newbtn.style.display = "none";
    });
  });
}
save.addEventListener("click", () => {
  let info = { qstshow_my: qst.value, answrshow_my: ansr.value };
  sflashcards.push(info);
  localStorage.setItem("flashcard", JSON.stringify(sflashcards));
  div_maker(sflashcards[sflashcards.length - 1]);
  qst.value = "";
  ansr.value = "";
});

deletAll.addEventListener("click", () => {
  localStorage.removeItem("flashcard");
});
