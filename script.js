function openimg(pic){
    let fullimgbox = document.getElementById("full-img-box") 
    let fullimgpic = document.getElementById("full-img-pic") 

    fullimgbox.style.display = "flex"
    fullimgpic.src = pic

}

function closeimg(){
    document.getElementById("full-img-box").style.display = "none"

}