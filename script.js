let input=document.getElementById("input");
let add=document.getElementById("add");
showtask();
add.addEventListener("click",function(){
    let addInput=input.value;
    if(addInput.trim() != 0){
        let webtask =localStorage.getItem("local");
        if(webtask == null){
            taskobj =[];
        }
        else{
            taskobj=JSON.parse(webtask);
        }
        taskobj.push(addInput);
        localStorage.setItem("local",JSON.stringify(taskobj))
        showtask();
        input.value = '';
    }
  
})
function showtask(){
    let webtask =localStorage.getItem("local");
    if(webtask == null){
        taskobj =[];
    }
    else{
        taskobj=JSON.parse(webtask);
    }
    let html ='';
    let tabel =document.getElementById("tabel");
    tabel.className.add= "tabel";
    taskobj.forEach((item, index )=> {
        html += `<div id="tabel" class="tabel">
        <th id="numbering">${index + 1}</th>
        <td><p>${item}</p></td>
            <td ${style="colour:red"}><button type="button" id="btn" onclick="editTask(${index})"><i class="fa-regular fa-pen-to-square"></i></button>Edit</td>
            <td><button type="button" id="delete" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></button>Delete</td>
    
      
            </tr>
          </div>` 
        
       
    });
   
    tabel.innerHTML = html;
}

function editTask(index){
    let add=document.getElementById("add");
    let save=document.getElementById("save");
    let saveIndex=document.getElementById("saveIndex");
    saveIndex.value = index;
    let webtask =localStorage.getItem("local");
    let taskobj = JSON.parse(webtask);
    input.value= taskobj[index];
    add.style.display = "none";
    save.style.display = "inline";
    
}

let save=document.getElementById("save");
save.addEventListener("click", function(){
    let webtask =localStorage.getItem("local");
    let taskobj = JSON.parse(webtask);
    let saveIndex=document.getElementById("saveIndex").value;
    taskobj[saveIndex] = input.value;
    localStorage.setItem("local",JSON.stringify(taskobj))
    let add=document.getElementById("add");
    let save=document.getElementById("save");
    add.style.display = "inline";
    save.style.display = "none";
    input.value = '';
    showtask();
})

function deleteTask(index){
    let webtask =localStorage.getItem("local");
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index, 1);
    localStorage.setItem("local",JSON.stringify(taskobj));
    showtask();
}

let deleteAll =document.getElementById("deleted");
deleteAll.addEventListener("click",function(){
    let webtask =localStorage.getItem("local");
    let taskobj =JSON.parse(webtask);
    if(webtask == null){
        taskobj =[];
    }
    else{
        taskobj=JSON.parse(webtask);
        taskobj =[];
    }
    localStorage.setItem("local",JSON.stringify(taskobj));
    showtask();
    let add=document.getElementById("add");
    let save=document.getElementById("save");
    add.style.display = "inline";
    save.style.display = "none";
})

//searchlist

/*let search=document.getElementById("search");
search.addEventListener("input",function(){
    let trList=document.getElementById("tabel");
    Array.from(trList).forEach(function(item){
        let searchText = item.getElementsByTagName("p").innerText;
        let searchval = search.value;
        let re =new RegExp(searchval, 'gi');
        if(searchText.match(re)){
            item.style.display ="block";
        }
        else{
            item.style.display ="none";
        }
    })
})*/