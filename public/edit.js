document.addEventListener("click",function(e){
    if(e.target.classList.contains("editme")){
        let res = prompt("enter")
        axios.post('/update',{mage:res,id:e.target.getAttribute("data-id")}).then(function(){
            e.target.parentElement.parentElement.querySelector(".item1").innerHTML = res;
        }).catch(function(){
            console.log("404 error")
        })
    }
    //delete
    if(e.target.classList.contains("delete")){
       confirm("really want to delete..")
        axios.post('/delete',{id:e.target.getAttribute("data-id")}).then(function(){
            e.target.parentElement.parentElement.remove()
        }).catch(function(){
            console.log("404 error")
        })
    }
})
