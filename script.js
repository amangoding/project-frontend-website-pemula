function halo() {
    const input = document.querySelector("#input").value

    if (input == "") {
        alert("harus memasukkan nama!")
    } else {
        alert(`halo ${input}, bagaimana kabarmu?`)
    }
}

function discoverBtn() {
    const greet = document.getElementById('greet').value

    if (greet == '') {
        const discover = document.getElementById('discoverResult')

        discover.innerHTML = '<p>harap masukkan nama anda!</p>'

        // const konten = document.createElement('p')

        // const isikonten = document.createTextNode('harus memasukkan nama!')

        // konten.append(isikonten)

        // discover.append(konten)
    } else {
        const discover = document.getElementById('discoverResult')

        const konten = document.createElement('p')

        discover.innerHTML = '<p></p>' 

        const isikonten = document.createTextNode('halo ' + greet)

        konten.append(isikonten)

        discover.append(konten)
    }
}

const greeting = document.getElementById('greet')
let greet = document.getElementById('greet').value

greeting.addEventListener('keydown', function (e) {
    let greet = document.getElementById('greet').value

    if (e.key === 'Enter') {
        e.preventDefault()

        const discover = document.getElementById('discoverResult')
        
        discover.innerHTML = "<p></p>"
        
        const konten = document.createElement('p')
        
        const isikonten = document.createTextNode('halo ' + greet)
        
        konten.append(isikonten)
        
        discover.append(konten)
        
        discoverBtn();
    }
})


const app = document.querySelector('#welcome-element');

const header = document.createElement('h1')

const kontenHeader = document.createTextNode('')

header.append(kontenHeader)

app.append(header)