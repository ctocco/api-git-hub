document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// get local text file data
function getText() {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      document.getElementById("output").innerHTML = err;
    });
}

// get local json data
function getJson() {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(postElement) {
        output += `<li>${postElement.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getJson() {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(postElement) {
        output += `<li>${postElement.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// getting data from an external API

function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.id}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// this gets the input value and output it to getUser function
document.getElementById("button4").addEventListener("click", getUser);
//
function getUser() {
  // by this time putting value in the element you are saying that the value should be updated everytime as opposed to putt it outside the function
  let userGit = document.getElementById("user").value;
  console.log(userGit);
  fetch(
    `https://api.github.com/users/${userGit}/repos?client_id=c521f38a3fe316933134&client_secret=969af97602977ba1ceafe7bad98d76911cc58dc1`
  )
    .then(res => {
      return res.json();
    })
    // below will refresh the results everytime
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(user => {
        output += `<table class="u-full-width"><td>${user.name}</td></table>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => {
      console.log(err);
      output.innerHTML = `<h1><span style="color:#33C3F0">User not Found</h1>`;
    });
}
