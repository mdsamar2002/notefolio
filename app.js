console.log("welcome to notebook")
shownodes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtitle = document.getElementById('addtitle');
    let addtxt = document.getElementById('timsal');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title : addtitle.value,
        text : addtxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value = "";
    console.log("notesObj");
    shownodes();
})

function shownodes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `                
    <div class="notecard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button class="btn btn-primary" id="${index}" onclick="delnotes(this.id)">Delete Notes</button>
        </div>
    </div>  `;
    });
    let notesEle = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
}

function delnotes(index) {
    console.log("i'm deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownodes();
}


let search=document.getElementById("searchtxt");
search.addEventListener('input',function(){
    let inputval=search.value;
    console.log('input event fired',inputval);
    let notecard= document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval))
        {
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })
})