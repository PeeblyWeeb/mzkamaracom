var lastNotePlaced = Date.now();
var noteVariation = 1;

function newMouseNote(x, y) {
  const note_element = document.createElement("img");
  //   note_element.style.borderRadius = "50%";
  note_element.style.position = "absolute";
  note_element.style.top = `${y}px`;
  note_element.style.left = `${x}px`;
  //   note_element.style.backgroundColor = "white";
  note_element.src = `/src/assets/note${noteVariation}.png`;
  note_element.style.width = "10px";
  note_element.style.height = "10px";
  note_element.classList.add("falling-note");

  setTimeout(() => note_element.remove(), 1000);

  return note_element;
}

window.onmousemove = (e) => {
  rn = Date.now();
  if (rn - lastNotePlaced > 100) {
    lastNotePlaced = rn;
    document.body.append(newMouseNote(e.clientX, e.clientY));
    noteVariation += 1;
    if (noteVariation > 3) {
      noteVariation = 1;
    }
  }
};

window.onload = () => {
  const streambutton = document.getElementById("stream-sources");

  streambutton.onclick = (e) => {
    if (document.getElementById("links-wrapper").style.visibility == "hidden") {
      document.getElementById("links-wrapper").style.visibility = "visible";
    } else {
      document.getElementById("links-wrapper").style.visibility = "hidden";
    }
  };
};
