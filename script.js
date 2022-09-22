const courses =[
  {
    name: "Complete Java course",
    price: "3.4"
  },
  {
    name: "Complete JavaScript course",
    price: "3.3"
  },
  {
    name: "Complete Python course",
    price: "3.8"
  },
  {
    name: "Complete C++ course",
    price: "3.5"
  },
  {
    name: "Complete  Scala   course",
    price: "3.7"
  },
  {
    name: "Complete   R course",
    price: "7.2"
  }
]

function generateLIST() {
   const ul = document.querySelector(".list-group");
   ul.innerHTML = "";
   courses.forEach((courses) => {
    const  li = document.createElement("li");
    li.classList.add("list-group-item");


    const name = document.createTextNode(courses.name);
    li.appendChild(name);

    const span =document.createElement("span");
    span.classList.add("float-right");

    const price =document.createTextNode("$" + courses.price);
    span.appendChild(price);


    li.appendChild(span);
    ul.appendChild(li);
   });
  
}
//generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".low-btn");

button.addEventListener("click", () => {
   courses.sort((a , b) => a.price - b.price);
   generateLIST();
});

const button2 = document.querySelector(".high-btn");
button2.addEventListener("click", () => {
  courses.sort((c , d) => d.price -  c.price);
  generateLIST();
});