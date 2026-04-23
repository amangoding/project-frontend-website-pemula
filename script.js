function halo() {
    const input = document.querySelector("#input").value

    if (input === "") {
        alert("harus memasukkan nama!")
    } else {
        alert(`halo ${input}, bagaimana kabarmu?`)
    }
}

console.log("halo dunia!")