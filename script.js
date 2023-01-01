var content2 = document.querySelector('.content2');

function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}


courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})

function createCategories(cat){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('classe','list-group-item');
    listCat.append(li);
}

var categories = ['all',...new Set(courses.map((v)=> v.category.toLowerCase()))]; 

categories.forEach((v)=>{
    createCategories(v);
});