console.log("Load")
let image1 = {
    title : "napos, őszi erdő, erdő., tölgy, sárga, levelek, állványok, háttér",
    description:"napos, őszi erdő, erdő., tölgy, sárga, levelek, állványok, háttér, út, kék, ég, fényes, nap, természet, erdő, esik, ősz, park, fa, piros, lombozat, tájkép, vibráló, évszak, szabadtéri, természetes, fény, aranysárga, környezet, szín, narancs, szép, színes, napfény, szépség, színpadi, levél növényen, színhely, reggel, faipari, kívül, barna, növény, zöld, növényvilág, struktúra, fák, ág, Napkelte, ködös, változás, szépség a természetben, nyugalom, föld, növekedés, nyugodt jelenet, nem ember, festmények - természet, fatörzs, narancsszín, nem városi színtéren, törzs, szabadban, őszi kollekció, 1080P",
    url : "https://p0.piqsels.com/preview/938/48/901/nature-forest-oak-sun.jpg",
};
let image2 = {
    title : "két, barna, fák, fehér, ég, fa, természet, faipari",
    description:"két, barna, fák, fehér, ég, fa, természet, faipari, téli, Kahl, log, törzs, esztétika, lombhullató fa, hegy, kettős, moha, szerkezet, Lavizzara, növény, növekedés, csupasz fa, szépség a természetben, fatörzs, nyugalom, nem ember, föld, ág, festmények - természet, szabadban, nap, nyugodt jelenet, környezet, mező, zöld szín, fa lombkorona, 5K",
    url : "https://p2.piqsels.com/preview/390/498/333/tree-nature-wood-winter.jpg",
};
let image3 = {
    title : "fák, levelek, Művészet, természet, faipari, fa, fény, nap",
    description:"szépia, csupasz ágak, esik lombozat, Kahl, sötét, titok, misztikus, számla, álom, fénysugár, kontraszt, narancs, MANIKŰR, lombhullató erdő, világítás, moha, erdei út, romantikus, légköri",
    url : "https://p2.piqsels.com/preview/292/141/241/nature-wood-tree-light.jpg",
};
let image4 = {
    title : "zöld leveles fa, hűvös háttérkép, erdő, hawaii, hd háttérkép, természet, természet háttérkép, park",
    description:"zöld leveles fa, hűvös háttérkép, erdő, hawaii, hd háttérkép, természet, természet háttérkép, park, szürreális, fák, fa, növény, föld, nyugalom, fatörzs, törzs, növekedés, szépség a természetben, zöld szín, nap, nem ember, ág, nyugodt jelenet, festmények - természet, erdei, szabadban, nem városi színtéren, környezet, fa lombkorona, 5K",
    url : "https://p0.piqsels.com/preview/452/672/14/cool-wallpaper-forest-hawaii-hd-wallpaper.jpg",
};
let image5 = {
    title : "barna, fa, keretezett, zöld, levél növény, útvonal, levélfák, út",
    description:"barna, fa, keretezett, zöld, levél növény, útvonal, levélfák, út, magas, fák, sugárút, el, séta, Riesen, természet, park, felépülés, túrázás, pihenés, melatenfriedhof, kölni, oázis, hangulat, idillikus, csendes, szép, ugat, faipari, tűlevelűek, erdő, fatörzs, erdei, szabadban, növény, törzs, szépség a természetben, irány, az utat, növekedés, föld, nyugalom, zöld szín, nem ember, napfény, nap, nyugodt jelenet, treelined, nem városi színtéren, bambusz - növény, 5K",
    url : "https://p2.piqsels.com/preview/24/713/210/avenue-trees-away-walk.jpg",
};

let images = [image1, image2, image3, image4, image5];

let currentIndex = 0;

function setCurrentImage(idx){
    $('#large').css("background-image","url(" + images[idx].url + ")");
    $('#overlay .title').text(images[idx].title);
    $('#overlay .description').text(images[idx].description);

    $('#tumbnails div').removeClass('selected');
    $("#tumbnails div[data-idx='"+idx+"']").addClass('selected');
    currentIndex = idx;
}

function setCurrentImageWithStep(step){
    let newIndex = currentIndex + step;

    if(newIndex < 0)
    {
        newIndex = images.length-1;
    }
    if(newIndex>= images.length)
    {
        newIndex = 0;
    }

    setCurrentImage(newIndex);
}

function init(){

    for(let i=0;i<images.length;i++){
        $('#tumbnails')
        .append("<div class=\"tumbnail\" style=\"background-image: url(" + images[i].url + ")\" data-idx=\""+ i +"\"></div>");
    }
  
    $("#tumbnails div").on("click",(e)=>{
        setCurrentImage($(e.target).data("idx"))        
    });

    $(".step").on("click",(e)=>{
        setCurrentImageWithStep($(e.target).data("step"))        
    });
    
    setCurrentImage(0);
}