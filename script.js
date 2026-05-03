
function saveStory() {
  let text = document.querySelector("textarea").value;
  let list = document.getElementById("stories");

  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function submitHealth() {
  let name = document.getElementById("name").value;
  document.getElementById("healthMsg").innerText = "Request submitted for " + name;
}

function submitReport() {
  let report = document.getElementById("report").value;
  document.getElementById("reportMsg").innerText = "Report submitted!";
}
