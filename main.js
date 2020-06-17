const body = document.querySelector('body')

let main = document.createElement('main')
body.prepend(main)

const button = document.createElement('button')
button.className = "removeButton"
button.append("REMOVE")
body.prepend(button) 


img = document.createElement('img')
img.className = "image"
img.src = "./panda.jpg"
main.appendChild(img)

let a = document.createElement('a')
a.className = "link"
a.href = " https://www.worldwildlife.org/species/giant-panda "
a.append("Save the Pandas!")
main.appendChild(a)

button.addEventListener('click', function(){
    main.remove()
})