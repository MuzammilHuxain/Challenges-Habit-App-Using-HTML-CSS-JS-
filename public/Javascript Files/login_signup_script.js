
//slider Sign in button
let signinbtn = document.querySelectorAll("#signin")[1];

//slider Sign up button
let signupbtn = document.querySelectorAll("#signup")[0];

//creating account (Sign up) button
let signupbtn_02 = document.querySelectorAll("#signup")[1];

//signing into account (Sign In) button

let signinbtn_02 = document.querySelectorAll("#signin")[0];
let email = document.querySelectorAll("#email")[0];
let password = document.querySelectorAll("#password")[0];
let login_error = document.querySelector(".login-error");
console.log(email);
console.log(password);



let signincontainer = document.getElementsByClassName("singin-container")[0]
let signupcontainer = document.getElementsByClassName("signup-container")[0]
let line = document.querySelector(".line");


signupbtn.addEventListener("click", (e) => {
    line.style.transform = "translateY(-100%)";
    signincontainer.style.transform = "translateY(200%)";
    signupcontainer.style.transform = "translateX(5%)";
    signinbtn.classList.add("signin-inactive")
    signinbtn.style.width = "55%";
    signupbtn_02.style.background = "white"
    signupbtn_02.style.color = "black"
    setTimeout(() => {
        line.style.transform = "translateY(0%)";
        line.style.left = "49%";
    }, 1000)

    setTimeout(() => {
        line.style.transform = "skewX(7deg)";
    }, 2000)
})



signinbtn.addEventListener("click", async (e) => {
    line.style.transform = "translateY(100%)";
    line.style.left = "50%";


    signupbtn_02.style.background = "transparent"
    signupbtn_02.style.color = "white"
    signinbtn.style.width = "90%";


    signincontainer.style.transform = "translateY(0%)";
    signupcontainer.style.transform = "translateX(-100%)";
    setTimeout(() => {
        line.style.transform = "translateY(0%)";
        signinbtn.classList.remove("signin-inactive")
    }, 1000)

    setTimeout(() => {
        line.style.transform = "skewX(7deg)";
    }, 2000)
})


signinbtn_02.addEventListener("click", async (e) => {
   

    e.preventDefault()
    let email = document.querySelectorAll("#email")[0].value;
    let password = document.querySelectorAll("#password")[0].value;
  
    let response = await axios.post("/login", {
        email,
        password
    });
    if (response.data.isLogin) {
        window.location.href("/")
    }
    else {

        console.log(response.data.message);
        login_error.style.display = "block";

        setTimeout(() => {
            login_error.style.display = "none";

        }, 2000)
    }

})


// signupbtn_02.addEventListener("click", (e) => {
//     alert("Sign up failed")
// })