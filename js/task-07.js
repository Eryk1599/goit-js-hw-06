const fontSizeControl = document.getElementById("font-size-control");
const content = document.getElementById("text");
fontSizeControl.addEventListener("input", () => {
    const fontSize = fontSizeControl.value;
    content.style.fontSize = `${fontSize}px`;
});
