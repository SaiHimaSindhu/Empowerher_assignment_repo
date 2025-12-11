let btn = document.getElementById("signup-btn");

btn.addEventListener("click", () => {
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");

    window.location.href = "login.html";
});
