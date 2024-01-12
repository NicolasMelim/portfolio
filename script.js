function TroqueDecor(){
   const html = document.documentElement
    
   if(html.classList.contains('ligth')){
    html.classList.remove('ligth')
   }else{
    html.classList.add('ligth')
   }

   //troca de imagem para o ligth mode 
   const img = document.querySelector("#perfil img")

   if(html.classList.contains('ligth')){
   img.setAttribute("src", "./assets/fig-2.webp")
    }else
    img.setAttribute("src", "./assets/fig-1.webp")

}