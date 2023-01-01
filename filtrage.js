let s = document.getElementById("search");
let d = document.getElementById("cards");
var lis = document.getElementById("l1");
var dupCat = [];



courses.forEach((o)=>{
    dupCat.push(o.category);
})
let uniqueCat = [];
dupCat.forEach((element) => {
    if (!uniqueCat.includes(element)) {
        uniqueCat.push(element);
    }
});
uniqueCat.forEach((o)=>{
    lis.innerHTML += '<li class="list-group-item">'+o+'</li>';
})

// Fonction de filtrage apres choix depuis la liste des categories :

document.querySelectorAll('.list-group-item').forEach((e)=>{
    e.addEventListener("click",(e)=>{
        content2.innerHTML = '';
        var cat = e.target.innerHTML;
        if(cat =="all"){
            courses.filter(o => {
                creationCours(o.image,o.title,o.price);
            });
           
        }
        else{}
        courses.forEach((o)=>{
            if(o.category == cat){
                creationCours(o.image,o.title,o.price);
            }
        })
    })
})

// Filtrage de categorie avec Saisie

s.addEventListener("keyup",(e)=>{
    content2.innerHTML = "";
    courses.forEach((o)=>{
        var title = o.title.toLowerCase()
        if(title.includes(e.target.value.toLowerCase())){
            creationCours(o.image,o.title,o.price);
        }
    })
})

// Filtrage de prix 

const pricefilter = document.getElementById("filtrageprix")

pricefilter.addEventListener("change", function (e) {
    const value = parseFloat(e.target.value)

    content2.innerHTML = ''

    document.querySelector('.prixselectionner').innerHTML = value.toString()

    courses.filter(el => {
        return el.price <= value
    }).forEach((el) => { creationCours(el.image, el.title, el.price) })
})

// 

document.querySelectorAll('.category-item').forEach(function (category) {
    category.addEventListener('click', function (e) {
        e.preventDefault()

        const categoryname = category.dataset.value
        content2.innerHTML = ''

        courses.filter(el => {
            if (categoryname == 'all') return true
            return el.category.toLowerCase() == categoryname.toLowerCase()
        }).forEach((el) => { creationCours(el.image, el.title, el.price) })
    })
})