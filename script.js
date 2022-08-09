let number_img=1 

function img_changer_add(){
  let img=document.getElementById('img')

  if(number_img<3){
    number_img+=1
  } else{
    number_img=3
  }
  img.src='../projeto-4/assets/img'+number_img+'.png'
}
function img_changer_sub(){
  let img=document.getElementById('img')

  if(number_img>1){
    number_img-=1
  } else{
    number_img=1
  }
  img.src='../projeto-4/assets/img'+number_img+'.png'
}