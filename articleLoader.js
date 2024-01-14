function addArticle(data){
    let articles = document.getElementById("articles");
    let article = document.createElement("div");
    article.setAttribute("article", data.id);
    article.setAttribute("class", "article");
    article.style.background = `linear-gradient(200deg, rgba(20, 20, 20, 0.2), rgba(20, 20, 20, 0.6)), url("./images/${data.thumbnail}")`;
    article.innerHTML = "<z style='height: 10px;'></z><p>" + data.name + "</p> <p style='font-size: 0.9em;'>" + data.Date + "</p>";
    articles.appendChild(article);
}

async function loadArticles(max) {
    let a = await fetch("https://news.realmz.io/articles.json");
    let data = await a.json();

    

    let count = 0;
    for (let i in data) {
        if(count >= max) break;
        addArticle(data[i]);
        count++;
    }

}

document.addEventListener("click", (e) => {
    let a = e.target.getAttribute("article");
    if (a == null) return;

    if(window.embed){
        window.open("https://news.realmz.io/articles/" + a + ".html");
        return;
    }

    window.location.href = "/articles/" + a + ".html";
});
