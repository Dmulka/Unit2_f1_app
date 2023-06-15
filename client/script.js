const redBullBtn = document.getElementById('Red-Bull-Btn')

redBullBtn.addEventListener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams/Red%20Bull")
    console.log(response)
    let modalContent = document.querySelector(".content")
    let rbpoints = response.data.points
    modalContent.innerHTML +=rbpoints
    let rbRandk = response.data.current_rank
    modalContent.innerHTML += rbRandk
    let rbDrivers = response.data.drivers
    modalContent.innerHTML += rbDrivers
})










const modalClose = document.querySelectorAll('[clsoe-button]')

const overlay = document.getElementById('overlay')


// redBullBtn.addEventListener('click', () => {
      
//       openModal(redBullBtn)
//     })


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
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    rb-modal.classList.remove('active')
    overlay.classList.remove('active')
  }



