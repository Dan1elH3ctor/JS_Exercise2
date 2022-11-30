// function personalDetails(firstName, lastName, email){
//     this.firstName =  firstName;
//     this.lastName = lastName;
//     this.email = email;
// }





// form
function addition(e){
    e.preventDefault();
    let numb1 = document.querySelector("#numb1").value;
    let numb2 = document.querySelector("#numb2").value;
    let output = document.querySelector("#output").innerText = eval(`${numb1} + ${numb2}`);
}