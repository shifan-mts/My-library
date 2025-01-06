const s = document.querySelector(".input-btn");
const box = document.querySelector(".books-box");
const popup = document.querySelector(".popcontainer");
const submit = document.querySelector(".submit2");
const bname = document.querySelector("#Book-Name");
const bAuthor = document.querySelector("#Author");
const img2 = document.querySelector("#img2");
const pages = document.querySelector("Nopages");
const checkbox = document.querySelector("#checkbox1");
const form = document.querySelector("form");

s.addEventListener("click",()=>{
    popup.style= "display:block;";
});

submit.addEventListener("click",(e)=>{
    popup.style= "display:none;";
    e.preventDefault();
    createBook(bname.value,img2.value,checkbox.value);
    form.reset();
    
});
function createBook(title,img,readinfo){
    let n = document.createElement("div");
    let boo = document.createElement("div");
    let bookimg = document.createElement("div");
    let imgcont = document.createElement("img");
    let booktitle = document.createElement("div");
    let readInfo = document.createElement("div");
    booktitle.textContent = title;
    imgcont.src = img;
    if(readinfo.checked){
        readInfo.textContent = "Read";

        readInfo.style = "color:green;";
    }
    else{
        readInfo.textContent = "Not Read";

        readInfo.style = "color:red;";
    }
    //readInfo.value = readinfo;
    
    n.setAttribute("class","book");
    boo.setAttribute("class","boo");
    bookimg.setAttribute("class","book-img");
    booktitle.setAttribute("class","book-title");
    readInfo.setAttribute("class","read-info");
    bookimg.appendChild(imgcont);
    boo.appendChild(bookimg);
    n.appendChild(boo);
    n.appendChild(booktitle);
    n.appendChild(readInfo);
    box.appendChild(n);
}

