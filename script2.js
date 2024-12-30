function onLoadHandler2() {
    document.addEventListener("DOMContentLoaded", function () {
        if (localStorage.getItem("favoriteHeroes")) {
            let favoriteHeroes = localStorage.getItem("favoriteHeroes").split(',');
            favoriteHeroes.forEach(function (heroId) {
                let heroElement = document.querySelector(`[href="#${heroId}"]`).closest('.grid-item');
                heroElement.classList.toggle("favheroes");
            });
        }
        var anchorsEnabled = true;
        document.getElementById("add").style.display = "inline-block";
        document.getElementById("add").onclick = function () {
            if (anchorsEnabled == true) {
                anchorsEnabled = false;
                let heroes = document.querySelectorAll(".heroes figure");
                let anchors = document.querySelectorAll("a");
                anchors.forEach(function (anchor) {
                    anchor.classList.toggle("adisabled");
                });
                console.log("anchors disabled");
                function toggleFavorite() {
                    this.classList.toggle("favheroes");
                    console.log("toggle");
                    let heroId = this.querySelector("a").getAttribute("href").substring(1);
                    let favoriteHeroesString = localStorage.getItem("favoriteHeroes");
                    let favoriteHeroes = [];
                    if (favoriteHeroesString) {
                        favoriteHeroes = favoriteHeroesString.split(',');
                    }
                    let index = favoriteHeroes.indexOf(heroId);
                    if (index != -1) {
                        favoriteHeroes.splice(index, 1);
                    } else {
                        favoriteHeroes.push(heroId);
                    }
                    localStorage.setItem("favoriteHeroes", favoriteHeroes.join(','));
                }
                heroes.forEach(function (hero) {
                    hero.addEventListener("click", toggleFavorite);
                });
                console.log("added event");
                let ok = document.createElement("p");
                document.getElementById("add").appendChild(ok);
                ok.textContent = "OK";
                ok.style.border = "2px solid grey";
                ok.style.backgroundColor = "lightgrey";
                ok.style.width = "23px";
                ok.onclick = function (event) {
                    event.stopPropagation();
                    anchorsEnabled = true;
                    let heroes = document.querySelectorAll(".heroes figure");
                    let anchors = document.querySelectorAll("a");
                    heroes.forEach(function (hero) {
                        hero.removeEventListener("click", toggleFavorite);
                    });
                    console.log("removed event");
                    anchors.forEach(function (anchor) {
                        anchor.classList.toggle("adisabled");
                    });
                    console.log("anchors enabled");
                    ok.remove();
                }
            }
        }
        document.getElementById("fav").style.display = "inline-block";
        document.getElementById("fav").onclick = function () {
            let heroes = document.querySelectorAll(".heroes .grid-item");
            let descriptions = document.querySelectorAll(".hero-desc>.tank-desc>*, .hero-desc>.damage-desc>*, .hero-desc>.support-desc>*");
            if (document.getElementById("fav").textContent == "Show only favorite heroes") {
                document.getElementById("fav").textContent = "Show all heroes";
                heroes.forEach(function (hero) {
                    if (!hero.classList.contains("favheroes")) {
                        hero.style.display = "none";
                    }
                });
                descriptions.forEach(function (desc) {
                    desc.style.display = "none";
                });
                let favoriteHeroes = localStorage.getItem("favoriteHeroes");
                if (favoriteHeroes) {
                    favoriteHeroes.split(',').forEach(function (heroId) {
                        let favoriteDescriptions = document.querySelectorAll(`.${heroId}`);
                        favoriteDescriptions.forEach(function (desc) {
                            desc.style.display = "";
                        });
                    });
                }
            }
            else if (document.getElementById("fav").textContent == "Show all heroes") {
                document.getElementById("fav").textContent = "Show only favorite heroes";
                heroes.forEach(function (hero) {
                    hero.style.display = "block";
                });
                descriptions.forEach(function (desc) {
                    desc.style.display = "block";
                });
            }
        }
    });
}

onLoadHandler2();