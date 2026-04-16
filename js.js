const name = document.querySelector(".name");
const rollnumber = document.querySelector(".Roll-number")
const marks = document.querySelector(".marks")
const submit = document.querySelector(".submit")
const sheet = document.querySelector(".sheet")
const addclass = document.querySelector(".addclass")
const classbtn = document.querySelector(".classbtn")
const spann = document.querySelector(".sp")
//add class
addclass.addEventListener("keydown",(event)=>{
if(event.key==="Enter"){
    classbtn.focus();
}

classbtn.addEventListener("click",()=>{
    const add = addclass.value;
 if(add!==""){
   spann.innerHTML = add;}
   else{
    alert("Please enter a class name")
   }     
})

submit.addEventListener("click",()=>{
    const nme = name.value;
    const ROnum = rollnumber.value;
    const mrks = marks.value;
  
    if(nme==""||ROnum==""||mrks==""){
        alert("Fill the form")
        return;
    }
    let score = Number(marks.value)
     let Grade ="";
     let PassFail = "";
    if(score>=90&&score<=100){
        Grade = "A+";
    }else if(score>=80){
        Grade = "A";
    }else if(score>=70){
        Grade="B"
    }else if(score>=60){
        Grade = "C"
    }else if(score>=50){
        Grade = "D"
    }else{
        Grade = "F"
    }
    if(score>100||score<0){
alert("marks will be between 100")
return;
    }
    PassFail = score>=40? "Pass":"Fail";
  
    let row = document.createElement("tr")
      if(PassFail==="Fail"){
      row.classList.add("row-fail")
    }else{
        row.classList.add("row-pass")
    }
    row.innerHTML =
  `
    <td>${nme}</td>
    <td>${ROnum}</td>
    <td>${mrks}</td>
    <td>100</td>
     <td>${Grade}</td>
     <td>${PassFail}</td>
     <td><button class = "deletebtn">Delete</button></td>`
      
//   tablebody.appenedChild(row);
  const delbtn = row.querySelector(".deletebtn")
  delbtn.addEventListener("click",()=>{
    row.remove();
  })
 document.querySelector("#tabletbody").appendChild(row)
name.value="";
rollnumber.value="";
marks.value="";
name.focus()
})
//click Enter
classbtn.addEventListener("keydown",(event)=>{
    if(event.key ==="Enter")
        event.preventDefault();
    name.focus();
})

});
name.addEventListener("keydown",(event)=>{
    if(event.key =="Enter"){
rollnumber.focus();
    }
});
rollnumber.addEventListener("keydown",(event)=>{
    if(event.key =="Enter"){
        // event.preventDefault();
        marks.focus();
    }
});
marks.addEventListener("keydown",(event)=>{
    if(event.key ==="Enter"){
        event.preventDefault();
submit.click();
    }
});















