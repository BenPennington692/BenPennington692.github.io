function getBigger(){
    document.getElementById("my-textarea").style.fontSize = "24pt";
}

function applyStylesToTextArea(isFancy) {
    var textArea = document.getElementById("my-textarea");
  
    if (isFancy) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      textArea.style.fontWeight = "";
      textArea.style.color = "black";
      textArea.style.textDecoration = "";
    }
}

function goMoo() {
    var textArea = document.getElementById("my-textarea");
    var text = textArea.value;
    text = text.toUpperCase();
    var parts = text.split(".");
    textArea.value = parts.join("-Moo.");
}