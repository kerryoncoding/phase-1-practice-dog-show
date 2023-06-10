document.addEventListener('DOMContentLoaded', () => {
   renderDogs()
})

const baseUrl = "http://localhost:3000/dogs"



function renderDogs(){
   let tableRow = document.getElementById("table-body")

   fetch(baseUrl)
   .then (resp => resp.json())
   .then (data => {
      data.forEach( element => {
         let tr = document.createElement("tr")
         let tdLine1 = document.createElement("td")
         let tdLine2 = document.createElement("td")
         let tdLine3 = document.createElement("td")
         let tdLine4 = document.createElement("td")
         let button = document.createElement("button")
         tdLine1.innerText = element.name
         tdLine2.innerText = element.breed
         tdLine3.innerText = element.sex
         button.innerText = "Edit"
         tdLine4.append(button) 
         tableRow.append(tr)
         tr.append(tdLine1, tdLine2, tdLine3, tdLine4)
         button.addEventListener("click", ()=> populateForm(element.id))
      })
   })
}

function populateForm(id){
   fetch(`${baseUrl}/${id}`)
   .then (resp => resp.json())
   .then (data => { 
      //console.log(data)
      let form = document.getElementById("dog-form")
      form.name.value =  data.name
      form.breed.value =  data.breed
      form.sex.value =  data.sex
      form.addEventListener("submit", ()=> {
         event.preventDefault()
         console.log("clicked submit")

         
      })
   })
}