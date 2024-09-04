
//Phần khuyến mãi nổi bật

function moveItem(item, index, btnL, btnR){    
    for(let i=0; i<item.length; i++){
       item[i].style.transform = `translateX(${100 * index}%)`;
   }
   if(index === 0){
       btnL.style.display = 'none';
   }else if(index <= 3-item.length){
       btnR.style.display = 'none';
   }else{
       btnL.style.display = 'block';
       btnR.style.display = 'block';
   }
}

function moveRight(){
   let index = 0;
   let btnMoveRight = document.querySelector('.popular-category .icon-right');
   let item = document.querySelectorAll('.product__promotion-parent');
   let btnMoveLeft = document.querySelector('.popular-category .icon-left');

   btnMoveRight.onclick = function(){
       index-=1;        
       moveItem(item, index, btnMoveLeft, btnMoveRight);              
   }    
   btnMoveLeft.onclick = function(){
      index+=1;
       moveItem(item, index, btnMoveLeft, btnMoveRight);        
   }
}
moveRight();

