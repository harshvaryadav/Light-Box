function imagemodal()
{
    var Btn=document.querySelector("#close");
    var Img=document.querySelectorAll(".image");
    var Modal=document.querySelector("#Modal-content");
        let n=Img.length;
        for(var i=0;i<n;i++)
        {
            Img[i].addEventListener("click",function(){
                    document.querySelector("#img").src=this.src;
                    Modal.style.display="block";
            });
        }
    Btn.addEventListener("click",function(){
         Modal.style.display="none";
    });
}