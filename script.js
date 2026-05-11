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

    // document.getElementById('discover').textContent = 'halo aingnua'


    if (greet == '') {
        const discover = document.getElementById('discoverResult')

        const konten = document.createElement('p')

        const isikonten = document.createTextNode('harus memasukkan nama!')

        konten.append(isikonten)

        discover.append(konten)

        // document.getElementById('discoverResult').textContent = 'harus memasukkan nama!'
    } else {
        const discover = document.getElementById('discoverResult')

        const konten = document.createElement('p')

        const isikonten = document.createTextNode('halo ' + greet)

        konten.append(isikonten)

        discover.append(konten)
    }

}

const app = document.querySelector('#welcome-element');

const header = document.createElement('h1')

const kontenHeader = document.createTextNode('')

header.append(kontenHeader)

app.append(header)

// const discover = document.getElementById('discover')

// const konten = document.createElement('p')

// const isikonten = document.createTextNode('halo anunya!')

// konten.append(isikonten)

// discover.append(konten)


// window.prompt('halo siapa namamu?')
// console.log("halo dunia!")