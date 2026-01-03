console.log("FrontEnd Js ishga tushdi")
/* FrontEnd js nimaga kk? 
yangi reja qoshilganda uida paro orgarish bolishiga javob beradi 
bu js ni ejs n ichiga qoyamiz

*/

let createField = document.getElementById("create-fied");


function itemTemplate(item){
    return `  <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between" 
        >
          <span class="item-text">${item.reja}</span>
           <div> <!-- endi har bir item id sini btnlarga biriktirib qpyamiz -->
            <button data-id="${item._id}" class="edit-me btn btn-secondary" btn-sm mr-1>수정</button>
            <button data-id="${item._id}" class="delete-me btn btn-danger" btn-sm>작제</button>
          </div>
        </li>`;
}
document
.getElementById("create-form")
.addEventListener("submit", (e)=>{
    e.preventDefault();

    axios.post("/create-item", {reja: createField.value})
    .then(res=>{
        document.getElementById("list-item").insertAdjacentHTML("beforeend", itemTemplate(res.data));
        createField.value ="";
        createField.focus();
    })
    .catch(err=>{
        console.log("다시 시도해주세요")
    })
});

document.addEventListener("click", function(e){

    // delete oper
    // console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
    //   alert("siz deleteni bosdingiz");
    if(confirm("Aniq ochirmoqchimisiz")){//
        // alert("ha deb javob berildi ")
    axios.post("/delete-item" , {id: e.target.getAttribute("data-id")})
    .then((response)=>{
        // console.log(response.data)
    e.target.parentElement.parentElement.remove()
    })
    .catch(()=>{ 
        console.log("qayta urining")
    })
    }
    else{
        // alert ("yoq deb javob berildi")
    }
    }


    // edit oper
    if (e.target.classList.contains("edit-me")) {
      alert("siz updateni bosdingiz");
    }
})