const btn = document.getElementById("button");
btnAdd.addEventListener("click", e => postStudent(prompt("Enter Student's Name")))

async function postStudent(name) {
    const olProducts = document.getElementById("olProducts")
    const res = await fetch("http://localhost:3000/students", {"method": "post", "headers": {"content-type": "application/json"}, "body": JSON.stringify({"name": name   }) });
    const a = await res.json();
    alert(JSON.stringify(a))
}
