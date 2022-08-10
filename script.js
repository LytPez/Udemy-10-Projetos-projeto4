/*
 A função img_changer_add altera para a próxima imagem de um bloco da página.
  ao clicar no botao '>' altera para proxima imagem.
   A variavel "number_img" serve para ajudar ao passar o link da imagem, caso o valor da variavel seja menor que 3, que é a quantidade de imagem que temos, o valor da variavel é ela + 1, que é exatamente a segunda imagem que temos ainda sendo menor que 3 continua alterando as imagens, caso a variavel tenha o valor maior ou igual a 3, a variavel ira receber o valor inicial q é 1. 
*/

let number_img=1

function img_changer_add(){
  let img=document.getElementById('img')

  if(number_img<3){
    number_img+=1
    console.log(number_img)
  } else if(number_img>=3){
    number_img=1
    console.log(number_img)
  } 

  img.src='../projeto-4/assets/img'+number_img+'.png'
}
function img_changer_sub(){
  let img=document.getElementById('img')



  console.log(number_img)

  if(number_img>1){
    number_img-=1
  } else if(number_img==1){
    number_img=3
  }
  img.src='../projeto-4/assets/img'+number_img+'.png'
}

/*
  Já a função "img_changer_sub" retorna a imagim anterior. 
 ao clicar '<' retorna a imagem anterior.
 Mesma logica da outra função porém caso a variavel "number_img" seja maior que um, ira subtrair 1 - o valor da variavel, sendo assim se ao adicionar 1 passa a proxima imagem, ao subtrair retorna a imagem, quando valer 1 ela ira receber o valor 3 e ir subtraindo novamente
*/