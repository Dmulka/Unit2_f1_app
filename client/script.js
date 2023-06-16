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







