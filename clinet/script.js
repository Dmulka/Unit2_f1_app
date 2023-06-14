const rebBullBtn = document.getelementsById('Red-Bull-Btn')

rebBullBtn.addEventListtener('click', async  () => {
    let response = await axios.get("http://localhost:3001/teams")
    console.log(response)
    let rbInfo = document.querySelectort("Red-Bull-Btn.content")
    let rbRank = response.data
    rbInfo.innerHTML= rbRank

})