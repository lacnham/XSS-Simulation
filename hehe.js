const btn = document.getElementById("button");
const mail_value = document.getElementById("mail").value ;
btn.addEventListener("click", e => postemail())

async function postemail(name){
    const mail = document.getElementById("mail");
    const res = await fetch("http://127.0.0.1:5500/arrayEmail", {"method": "post", "headers": {"content-type": "application/json"}, "body": JSON.stringify({"name": name   }) });
    const a = await res.json();
    alert(JSON.stringify(a))
}