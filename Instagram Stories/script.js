var array = [
    {dp:"https://images.unsplash.com/photo-1693170509455-f28aefcd1005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692171457276-cc7555c5434c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1658876521367-d5491186e304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1685029732403-7fa30906b99d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1692794180903-492910e2c5a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1686850611416-71b23b93f1dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1673474112205-037558e54995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692348265034-4102960f1e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1687544249497-d70f14b3fc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://plus.unsplash.com/premium_photo-1690481529194-6087914e096e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1691815862778-249e9cd7f63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1692394950102-34e14fafa12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"},
];

var clutter = ""
array.forEach(function(elem,index){
    clutter = clutter + `<div id="story">
    <img id="${index}"src="${elem.dp}" alt="">
 </div>`
})

var a = document.querySelector("#storiyan");

a.innerHTML = clutter;

a.addEventListener("click", function(dets){
    //dets means it gives all the inforamation  when we click any thing ..at that time they provide all the inforamation.
    // target : it target the images in that target
    var full = document.querySelector("#full-screen")
    full.style.display = "block";
    container.style.display = "none";
    full.style.backgroundImage = `url(${array[dets.target.id].story})`;
    setTimeout(function(){
        full.style.display = "none";
        container.style.display = "block";
        
    },3000)
})





var container = document.querySelector("#container");
var love = document.querySelector("#container i")
var heart = document.querySelector(".heart")
container.addEventListener ("dblclick", function(){
    love.style.transform = "translate(-50%,-50%) scale(1)"
    heart.className="ri-heart-3-fill"
    heart.style.color = "red"
    
    love.style.color="white"
    love.style.display = "block"
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)"
        // heart.className="ri-heart-3-line"
        // heart.style.color = "black"
    },1000)
    
})
var count = 0
heart.addEventListener("click", function(){
    if(count == 0){
    heart.className="ri-heart-3-fill"
    heart.style.color = "red"
    count = 1
    }
    else{
        heart.className="ri-heart-3-line"
        heart.style.color = "white"
        count = 0
    }
})