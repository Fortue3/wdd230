const date = new Date();

const d = date.toDateString()
const year = date.getFullYear()
document.getElementById('myYear').innerHTML = year

document.getElementById('hdate').innerHTML = d

async function directories() {
    var res = await fetch('./data/members.json')

    var directory = await res.json()
    // console.log(directory)
    directory.forEach(company => {
        const cards = document.getElementById('cardsContainer')

        const article = document.createElement('section')
        const image = document.createElement('img')
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const btn = document.createElement('button')

        article.classList.add('grid')
        div.classList.add('text')

        image.setAttribute('src', company.companyImg)
        h3.innerHTML = company.companyName
        // let desc = company.companyDesc
        // p.innerHTML = desc.substr(0, 50)
        p.innerHTML = company.companyDesc
        btn.innerHTML = "View More"

        // div.append(h3, p, btn)
        article.append(image, h3, p, btn)

        cards.append(article)
    })
    // document.getElementById('myImg').src = directory.companyImg
    // document.getElementById('cName').innerHTML = directory.companyName
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// async function directories () {
//     var res = await fetch('./data.json')

//     var directory = await res.json()
//     // console.log(directory)
//     directory.forEach(company => {
//         const cards = document.getElementById('cardsContainer')

//         const article = document.createElement('article')
//         const image = document.createElement('img')
//         const div = document.createElement('div')
//         const h3 = document.createElement('h3')
//         const p = document.createElement('p')
//         const btn = document.createElement('button')

//         article.classList.add('card')
//         div.classList.add('text')

//         image.setAttribute('src', company.companyImg)
//         h3.innerHTML = company.companyName
//         // let desc = company.companyDesc
//         // p.innerHTML = desc.substr(0, 50)
//         p.innerHTML = company.companyDesc
//         btn.innerHTML = "View More"

//         div.append(h3, p, btn)
//         article.append(image, div)

//         cards.append(article)
//     })
//     // document.getElementById('myImg').src = directory.companyImg
//     // document.getElementById('cName').innerHTML = directory.companyName
// }

directories()
