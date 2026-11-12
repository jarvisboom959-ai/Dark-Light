let mdbtn=document.querySelector("#mode");
let currentmode="Light";
mdbtn.addEventListener("click", () =>{
if(currentmode==="Light"){
currentmode="Dark";
document.querySelector("Body").style.backgroundColor="Black";
}
else{
currentmode="Light";
document.querySelector("Body").style.backgroundColor="White";
}
console.log(currentmode);
});
