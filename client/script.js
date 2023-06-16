const redBullBtn = document.getElementById('Red-Bull-Btn')
const mercBtn = document.getElementById('Mercedes-Btn')
const astinBtn = document.getElementById('Astin-Martin-Btn')
const fezzerBtn = document.getElementById('Ferrari-Btn')
const alpine = document.getElementById('Alpine-Btn')



///// modal logic /////

/// Red Bull ///
redBullBtn.addEventListener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams/Red%20Bull")
    console.log(response)
    let modalContent = document.querySelector(".content")
    modalContent.innerHTML= ""
    let rbpoints = response.data.points
    modalContent.innerHTML +=rbpoints
    let rbRandk = response.data.current_rank
    modalContent.innerHTML +=rbRandk
    let rbDrivers = response.data.drivers
    modalContent.innerHTML +=rbDrivers
    const modal = document.querySelector('.modal')
    console.log(modal)
    openModal(modal)
})

/// Mercedes ///

mercBtn.addEventListener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams/Mercedes")
    console.log(response)
    let modalContent = document.querySelector(".content")
    modalContent.innerHTML= ""
    let points = response.data.points
    modalContent.innerHTML +=points
    let rank = response.data.current_rank
    modalContent.innerHTML +=rank
    let drivers = response.data.drivers
    modalContent.innerHTML +=drivers
    const modal = document.querySelector('.modal')
    console.log(modal)
    openModal(modal)
})

/// Astin-Martin ///

astinBtn.addEventListener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams/Astin%20Martin")
    console.log(response)
    let modalContent = document.querySelector(".content")
    modalContent.innerHTML= ""
    let points = response.data.points
    modalContent.innerHTML +=points
    let rank = response.data.current_rank
    modalContent.innerHTML +=rank
    let drivers = response.data.drivers
    modalContent.innerHTML +=drivers
    const modal = document.querySelector('.modal')
    console.log(modal)
    openModal(modal)
})

/// Ferrari ///

fezzerBtn.addEventListener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams/Ferrari")
    console.log(response)
    let modalContent = document.querySelector(".content")
    modalContent.innerHTML= ""
    let points = response.data.points
    modalContent.innerHTML +=points
    let rank = response.data.current_rank
    modalContent.innerHTML +=rank
    let drivers = response.data.drivers
    modalContent.innerHTML +=drivers
    const modal = document.querySelector('.modal')
    console.log(modal)
    openModal(modal)
})

/// Alpine ///

alpine.addEventListener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams/Alpine")
    console.log(response)
    let modalContent = document.querySelector(".content")
    modalContent.innerHTML= ""
    let points = response.data.points
    modalContent.innerHTML +=points
    let rank = response.data.current_rank
    modalContent.innerHTML +=rank
    let drivers = response.data.drivers
    modalContent.innerHTML +=drivers
    const modal = document.querySelector('.modal')
    console.log(modal)
    openModal(modal)
})

const modalOpen = document.querySelectorAll('[modalBtns]')
const modalClose = document.querySelectorAll('[clsoe-button]')
const overlay = document.getElementById('overlay')



// modalOpen.forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = document.querySelector(button.dataset.modalTarget)
//       openModal(modal)
//     })
//   })


  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  modalClose.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    // if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    console.log('modal working')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }


//////comment form logic///////






document.querySelector("#comment-btn").addEventListener('click', function(){
    document.querySelector('.popup').classList('active')
})

document.querySelector(".popup .close-btn").addEventListener('click',function(){
    document.querySelector(".popup").classList.remove("active")
})







//   $("#nav-contact-btn").on("click", function () {
//     $(".container-wrapper").children().css("display", "none");
//     $(".contact-container").css("display", "flex");
//     });

// $("#contact-submit-btn").on("click", async function () {
//     let name = $("#input-name").val();
//     let email = $("#input-email").val();
//     let message = $("#input-message").val();
//     if (name && email && message) {
//         axios.post("/api/comments", {
//             name: name,
//             email: email,
//             description: message,
//         });
//         $("#please-fill").css("display", "none");
//         $(".input-div").children().val("");
//         alert("Thank you for submitting your messsage.");
//     } else {
//         $("#please-fill").css("display", "block");
//     }
// });

// $("#admin-login-btn").on("click", function () {
//     $(".container-wrapper").children().css("display", "none");
//     $(".admin-container").css("display", "flex");
//     $(".login-form").css("display", "flex");
//     $(".admin-homepage").css("display", "none");
//     $("#invalid-login").css("display", "none");
//     $("#admin-login-submit").off();
//     $("#admin-username-input").val("");
//     $("#admin-password-input").val("");
//     $("#admin-login-submit").on("click", async function () {
//         let username = $("#admin-username-input").val();
//         let password = $("#admin-password-input").val();
//         if (username == "admin" && password == "admin") {
//             // if (true) {
//             $(".login-form").css("display", "none");
//             $(".admin-homepage").css("display", "flex");
//             $(".admin-content").empty();



//             $("#nav-read-comments").off();
//             $("#nav-read-comments").on("click", async function loadComments() {
//                 $(".admin-content").empty();
//                 const response = await axios.get("/api/comments");
//                 let data = response.data;
//                 for (const comment of data) {
//                     const { name, email, description, _id } = comment;
//                     $(".admin-content").append(`
//                     <div class="comment-item">
//                         <p>Name: ${name}<p>
//                         <p>Email: ${email}</p>
//                         <p>Message: ${description}</p>
//                         <button class="delete-message-button" id="${_id}">Delete Message</button>
//                     </div>
//                     <br>
//                     `);
//                     $(`#${_id}`).on("click", async function () {
//                         await axios.delete(`/api/comments/${_id}`);
//                         loadComments();
//                     });
//                 }
//             });
//         } else {
//             $("#invalid-login").css("display", "block");
//         }
//     });
// });

