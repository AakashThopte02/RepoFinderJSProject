function getRepos() {
  if (document.querySelector("#user").value == "") {
    alert("Please enter username");
  }
  const username = document.querySelector("#user").value;
  console.log(username);
  const xhr = new XMLHttpRequest();
  // xhr.open("GET", "./movies.json");
  xhr.open("GET", `https://api.github.com/users/${username}/repos`);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      if (data.length == 0) {
        alert("Data not found..!!!");
      }
      data.forEach((repo) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
        document.querySelector(".allrepos").appendChild(li);
      });
    }
  };
  xhr.send();
}
const button = document
  .querySelector("#submit")
  .addEventListener("click", getRepos);

document.querySelector("#user").addEventListener("click", () => {
  document.querySelector(".allrepos").innerHTML = "";
});
