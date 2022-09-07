let itemsList = document.querySelectorAll('.item');

itemsList.forEach((item,idx,arr)=>{
    item.addEventListener('click',()=>{
        toggleClass();
        item.classList.toggle('active');

    })
})

function toggleClass(){

    itemsList.forEach((item)=>{
        if(item.classList.contains('active')){
            item.classList.toggle('active')
        }
    })
}