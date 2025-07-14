function removeAds(){
    let spans = document.getElementsByTagName('span');

    for(let i=0; i<spans.length; i++){
        if(spans[i].innerHTML === "Promoted"){
            let card = spans[i].closest('.feed-shared-update-v2__control-menu-container');
            card.setAttribute("style", "display: none !important;");
        }
    }

}



removeAds();

setInterval(() => {
    removeAds();
}, 100);