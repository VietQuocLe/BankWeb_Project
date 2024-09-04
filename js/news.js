
let newsParent = document.querySelectorAll('.main_news .content-parent');

let pagination = document.querySelectorAll('ul.pagination li');

function removeFlexPagination(){
    for(let i=0; i<newsParent.length; i++){
        newsParent[i].classList.remove('flex');
    }
}


function Pagination(){
    for(let i=0; i<3; i++){
        pagination[i].addEventListener('click', function(){
            
            removeFlexPagination();
            newsParent[i].classList.add('flex');
        })
    }
}

Pagination();