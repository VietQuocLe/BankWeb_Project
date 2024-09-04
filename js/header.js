let searchMenu = document.querySelector('header .wrap .search-menu ');

let iconSearch = document.querySelector('header .header-right .icon p');

iconSearch.onclick = function(){
    searchMenu.style.display = 'block'
}

document.addEventListener('click', function(e){
    if(!searchMenu.contains(e.target) && !iconSearch.contains(e.target)){
        searchMenu.style.display = 'none';
    }
})

 
  //menu mobile
let togle = document.querySelector('.header-left.bars i');

togle.onclick = function(){
    let modelMobile = document.querySelector('.model-mobile');   
    if(modelMobile.style.display === 'block'){
        modelMobile.style.display = 'none';
    }else{
        modelMobile.style.display = 'block';
    }
}

//backToTop
let btnBackToTop = document.querySelector(".bt_to_top")

btnBackToTop.onclick = function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
 }



// footer
let listFooter = document.querySelectorAll('.footer-index-lv1 .li_footer')


function moveFooter(){
    for(let i=0; i<listFooter.length; i++){
        listFooter[i].querySelector('ul').style.display = 'none'
    }
}

function eventFooter(){
    for(let i=0; i<listFooter.length; i++){
        listFooter[i].addEventListener('click', function(){
            moveFooter();
            if(listFooter[i].querySelector('ul').style.display === 'block'){
                listFooter[i].querySelector('ul').style.display = 'none'
            }else{
                listFooter[i].querySelector('ul').style.display = 'block'
            }
        })
    }
}


eventFooter();


