function halo() {
    const input = document.querySelector("#input").value

    if (input === "") {
        alert("harus memasukkan nama!")
        return
    }

    alert(`halo ${input}, berapa uisamu?`)
}

console.log("halo dunia!")