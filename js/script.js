let btn = document.querySelectorAll("button")[0];
let inp = document.querySelector("input");
let clear = document.querySelectorAll('button')[1]
let a = document.querySelectorAll('a')
let main;
btn.onclick = () => {
    async function get() {
        let fetc = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${inp.value}&AIzaSyCTl8J2OqboxCsdTbP__mHgzfUNhWxw7P8`
        );
        let data = await fetc.json();
        console.log(data.items);
        main = document.createElement('main')
        for (let i = 0; i < data.items.length; i++) {
            let imgs = document.createElement("img");
            let links = document.createElement('a')
            if (data.items[i].volumeInfo.imageLinks == undefined) {
                continue;
            } else {
                imgs.src = data.items[i].volumeInfo.imageLinks.thumbnail;
                links.setAttribute('href', data.items[i].volumeInfo.infoLink)
                links.setAttribute('target', '_blank')
            }
            links.appendChild(imgs)
            main.appendChild(links)
            document.body.appendChild(main)
        }
    }
    get();
};
clear.onclick = () => {
    main.remove()
    inp.value= ''
}

