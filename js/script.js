

const listDOM = document.querySelector('#list');
const addButton = document.querySelector('#liveToastBtn');
const inputDOM= document.querySelector('#task');
const listValueDOM = document.getElementsByTagName('li');


// eleman ekleme ve eklenen elemanı silme

addButton.addEventListener('click', ()=> {
    if(task.value!=''){
    $(".success").toast("show");
    let liDOM = document.createElement('li');
    liDOM.innerHTML= task.value;
    listDOM.appendChild(liDOM);
    task.value='';


    let closeBtnNew = document.createElement('span');
    let closeText = document.createTextNode('x');
    closeBtnNew.appendChild(closeText);
    closeBtnNew.className= 'close';
    closeBtnNew.onclick = removeFunc;
    liDOM.appendChild(closeBtnNew);
    listDOM.appendChild(liDOM);
    
    }
    
    else {
    $(".error").toast("show");}

    

})

function removeFunc(){
    this.parentElement.remove();
}

// eleman silme
for(let i=0;i<listValueDOM.length;i++){
    const closeBtn = document.createElement('span');
    const close = document.createTextNode('x');
    closeBtn.appendChild(close);
    closeBtn.className = 'close';
    listValueDOM[i].appendChild(closeBtn);
    closeBtn.addEventListener('click', ()=>{
        listValueDOM[i].remove();
    })

    }

// listedeki işlem tamamlandı işareti

listDOM.addEventListener("click", (item)=>{

    if(item.target.tagName="li")
    {
        item.target.classList.toggle("checked");
    }
})