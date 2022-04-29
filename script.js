document.addEventListener("click", e => {
    
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if(!isDropdownButton && e.target.closest("[data-dropdown") != null) return
    let currentDropDown
    if(isDropdownButton){
        currentDropDown = e.target.closest("[data-dropdown]")
        currentDropDown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if (dropdown === currentDropDown) return
        dropdown.classList.remove("active")
    })
})

const features = document.querySelector('.features')
const featureDrop = document.querySelector('.features-drop')

features.addEventListener('click', function(){
    featureDrop.classList.toggle('active')
})

const compagny = document.querySelector(".compagny")
const compagnyDrop = document.querySelector('.compagny-drop')
compagny.addEventListener('click', function(){
    compagnyDrop.classList.toggle('active')
})