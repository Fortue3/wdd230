async function directories () {
    var res = await fetch('./data.json')

    var directory = await res.json()
    var i = 0
    // console.log(directory)
    directory.forEach(company => {

        if(i <3){
            if(company.membershipLevel == "Gold" || company.membershipLevel == "Silver"){
                // console.log(company.companyName)

                const sideBar = document.getElementById('sideBar')

                const i1 = document.createElement('i')
                const i2 = document.createElement('i')
                const hr = document.createElement('hr')
                const br = document.createElement('br')
                const image1 = document.createElement('img')
                const div1 = document.createElement('div')
                const section1 = document.createElement('section')
                const h31 = document.createElement('h3')
                const p1 = document.createElement('p')

                section1.classList.add('spotlight1')
                image1.classList.add('spotlight-img')
                div1.classList.add('contact-details')

                image1.setAttribute('src', company.companyImg)
                h31.innerHTML = company.companyName
                p1.innerHTML = company.companyDesc
                i1.innerHTML = company.email
                i2.innerHTML = company.contact

                div1.append(i1, br, i2)
                section1.append(h31, image1, p1, hr, div1)
                sideBar.append(section1)
                
                i++
            }
        }
 
    })

}

directories()