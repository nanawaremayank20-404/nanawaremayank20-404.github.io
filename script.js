function saveToExcel(event){

event.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let country=document.getElementById("country").value;
let date=document.getElementById("date").value;
let message=document.getElementById("message").value;

let data="Name,Email,Phone,Country,Travel Date,Message\n";

data+=name+","+email+","+phone+","+country+","+date+","+message;

let blob=new Blob([data],{type:"text/csv"});

let url=window.URL.createObjectURL(blob);

let a=document.createElement("a");

a.setAttribute("href",url);
a.setAttribute("download","tourist_enquiry.csv");

a.click();

alert("Data saved. Excel file downloaded.");
}

