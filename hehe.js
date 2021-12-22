const btn = document.getElementById("button");
const mail_value = document.getElementById("mail").value ;
btn.addEventListener("click", e => postemail(mail_value))

async function postemail(mail_value){
    const mail = document.getElementById("mail");
    const res = await fetch(" https://lacnham.github.io/XSS-Simulation/arrayEmail", {"method": "post", "headers": {"content-type": "application/json"}, "body": JSON.stringify({"name": mail_value   }) });
    const a = await res.json();
    alert(JSON.stringify(a))
}