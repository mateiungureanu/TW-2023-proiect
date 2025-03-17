function onLoadHandler() {
    document.addEventListener("DOMContentLoaded", function () {
        if (!localStorage.getItem("mode")) {
            localStorage.setItem("mode", "light");
        } else if (localStorage.getItem("mode") == "dark") {
            document.body.style.backgroundColor = "rgb(48, 46, 46)";
            document.body.style.color = "white";
        } else if (localStorage.getItem("mode") == "random") {
            var r1 = Math.floor(Math.random() * 256);
            var g1 = Math.floor(Math.random() * 256);
            var b1 = Math.floor(Math.random() * 256);
            var r2 = Math.floor(Math.random() * 256);
            var g2 = Math.floor(Math.random() * 256);
            var b2 = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor = `rgb(${r1} ${g1} ${b1})`;
            document.body.style.color = `rgb(${r2} ${g2} ${b2})`;
        }
        if (localStorage.getItem("login") == "true") {
            document.getElementById("formular").textContent = 'Welcome, ' + localStorage.getItem("username");
        }
        let dark = document.querySelector("#dark-mode");
        dark.onclick = function () {
            document.body.style.backgroundColor = "rgb(48, 46, 46)";
            document.body.style.color = "white";
            localStorage.setItem("mode", "dark");
        }
        let light = document.querySelector("#light-mode");
        light.onclick = function () {
            document.body.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
            document.body.style.color = "black";
            localStorage.setItem("mode", "light");
        }
        let random = document.querySelector("#random-mode");
        random.onclick = function () {
            var r1 = Math.floor(Math.random() * 256);
            var g1 = Math.floor(Math.random() * 256);
            var b1 = Math.floor(Math.random() * 256);
            var r2 = Math.floor(Math.random() * 256);
            var g2 = Math.floor(Math.random() * 256);
            var b2 = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor = `rgb(${r1} ${g1} ${b1})`;
            document.body.style.color = `rgb(${r2} ${g2} ${b2})`;
            localStorage.setItem("mode", "random");
        }
        document.addEventListener("keydown", function (event) {
            if (event.key == "b") {
                window.scrollTo(0, document.body.scrollHeight);
            } else if (event.key == "t") {
                window.scrollTo(0, 0);
            }
        });
        const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
        const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
        document.getElementById("formular").onclick = function () { // de ce nu mai merge hover ul dupa ce dau submit?
            if (localStorage.getItem("login") == "false") {
                document.querySelector("#login").style.display = "block";
                document.getElementById("formular").style.backgroundColor = "lightblue";
                console.log(localStorage.getItem("login"));
                let login = document.querySelector("#login");
                login.onsubmit = function (event) {
                    event.preventDefault();
                    let username = document.getElementById("username").value;
                    let password = document.getElementById("password").value;
                    if (usernameRegex.test(username) && passwordRegex.test(password)) {
                        localStorage.setItem("login", "true");
                        localStorage.setItem("username", username);
                        document.getElementById("formular").textContent = "Welcome, " + username;
                        document.querySelector("#login").style.display = "none";
                        document.getElementById("formular").style.backgroundColor = "white";
                    } else {
                        alert("Invalid username or password");
                    }
                }
            };
        }
        let logout = document.querySelector("#logout");
        logout.onclick = function () {
            localStorage.setItem("login", "false");
            document.getElementById("formular").textContent = "Log in";
        }
        // ca sa mearga hover si dupa submit
        document.querySelector("#formular").addEventListener("mouseenter", function () {
            if (document.querySelector("#login").style.display == "none")
                document.querySelector("#formular").style.backgroundColor = "lightblue";
        });
        document.querySelector("#formular").addEventListener("mouseleave", function () {
            if (document.querySelector("#login").style.display == "none")
                document.querySelector("#formular").style.backgroundColor = "white";
        });
        function changeBackground() { // length e 0 pt ca nu poate lua din mai multe fisiere, trebuie sa fac o lista cu 81 url uri
            let imagesURL = [
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt72d062619b59e3d8/63880902bbfd340e8ad2e41b/dva-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd16eae51df615e53/637da152113983111ba8ceca/doomfist-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt4cb1904358b0203d/637da174443fa70e71d4bee3/junkerqueen-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt530d30b65538a5cb/6568f821ce06a36f1d328ade/New_challenge.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt92fe22c967d136bc/63880f12e5d09810cdaff697/orisa-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt7d27f69cb66e3663/637ef9026f080311223b5462/ramattra-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd01aa64f8857d54e/637da1bd6663180e7cbbce59/reinhardt-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt4565b257dd867cf6/637da1d2d44c1b0e1f0e8bb4/roadhog-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt41d0aa52580d0a5c/63880fe48b3bbe1129cea614/sigma-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt53bb24e59108b179/638810d7f9f61910b4235897/winston-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt8626841dd0a4756e/637da2238b3bbe1129cea43e/wreckingball-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blte6e9757272caa5fe/637da229f9f61910b4235799/zarya-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt811b34d14ae2f336/63880844c72c2b107a6f7dd4/ashe-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt907d9513bdbf532e/638808a9113983111ba8cfaf/bastion-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt1683656b69bedff7/638808d0273de01068bb2806/cassidy-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt770f765476047dd7/637da15d113983111ba8cece/echo-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltb983c9c07c5e404e/637da16446a48b0e063e4a95/genji-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt275dedbe72f14964/6388097b3b13b1106f74ec58/hanzo-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt177223351b58e746/637da179113983111ba8ced2/junkrat-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt8c3799aa6fd3c033/637da19a443fa70e71d4beeb/mei-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltad9ee72faf5ddb89/637da1ca32db130e11be7e31/pharah-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltc8039f1e9d655c9a/637da1c55148880e83ab6fc7/reaper-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt97fa68ff5a991d80/637da1da5148880e83ab6fd3/sojourn-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt43566dc9446cf327/6388100c5148880e83ab70cf/soldier-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blta5830262a146aab0/638810315148880e83ab70d3/sombra-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd84a036680d83564/637da1eba86e5310c692c02b/symmetra-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt276c871dfd498a99/637da1f532db130e11be7e35/torbjorn-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blte9360f1cb69cf0de/6388105b443fa70e71d4bfd1/tracer-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt4ef6b8b5918c3d11/660da22d2c8f665540848434/Venture3.jpg",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blteec179d006096c80/638810adf9f61910b4235893/widowmaker-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt337560e347894727/638807fa6663180e7cbbcf88/ana_01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt125347168b027b51/637da13e46a48b0e063e4a91/baptiste-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltb223aa8661613921/637da148e5d09810cdaff5bc/brigitte-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt19e6b0122e0a2fe1/64c941a6c457599015a1f705/Illari_-_Moving_Forward.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt98316888daf5cf94/63880e31e5d09810cdaff693/kiriko-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blte9c2f18e500f9056/64236a722d91476d41e46580/lifeweaver-04.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt2cd33b648726ce63/637da1955148880e83ab6fbf/lucio-02.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt12c536b770bfdcd4/63880edf443fa70e71d4bfcd/mercy-00.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt2ec366c2ef8dfad4/637da1af113983111ba8ceda/moira-01.jpg?format=webply&quality=90",
                "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt12cfd3197d39f885/637eff7d3cbefd1110811111/zenyatta-00.jpg?format=webply&quality=90",
                "https://bnetcmsus-a.akamaihd.net/cms/gallery/OWB10BMVUEPY1649353626716.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075138/Dorado-streets2.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075141/Havana.png",
                "https://dotesports.com/wp-content/uploads/2021/02/25075142/Junkertown.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075144/Rialto.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075145/Route_66.jpg",
                "https://bnetcmsus-a.akamaihd.net/cms/page_media/gp/GPHQ6QIO7VHE1669240435381.png",
                "https://dotesports.com/wp-content/uploads/2021/02/25075146/Gibraltar.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075509/Blizzard_World.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075511/Eichenwalde.png",
                "https://dotesports.com/wp-content/uploads/2021/02/25075511/Hollywood-set.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075551/Kings_Row_concept-1.jpg",
                "https://bnetcmsus-a.akamaihd.net/cms/gallery/U09FQIY5N1RI1649353626700.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075545/Numbani_Loading_Screen-1.jpg",
                "https://th.bing.com/th/id/R.d2087ab5fe68858ad963c0720a4527ce?rik=ezPkqB7q%2f7CpYg&riu=http%3a%2f%2fwww.overwatch-world.com%2fupload%2fnews%2f2022%2fjuillet%2f01%2fparaiso-overwatch2-05.jpg&ehk=uL002%2blhzHvXNyFCyVvzQLAaxT4U4rzKO7%2b3N3ttzYw%3d&risl=&pid=ImgRaw&r=0",
                "https://www.dexerto.com/cdn-cgi/image/width=1200,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/06/15/Antarctic_Peninsula_4.0.jpeg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075804/Overwatch_Busan.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075806/Ilios.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075808/Lijiang_Tower_loading_screen.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075808/Nepal_loading_screen.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25075809/Oasis-1.jpg",
                "https://www.dexerto.com/cdn-cgi/image/width=1200,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/10/01/Overwatch-2-Samoa-map.jpg",
                "https://bnetcmsus-a.akamaihd.net/cms/gallery/W94XAGJVK4871649353625265.jpg",
                "https://www.dexerto.com/cdn-cgi/image/width=1920,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/15/new-ow2-map-1-1024x576.jpg",
                "https://bnetcmsus-a.akamaihd.net/cms/gallery/AD1BKCLCRKSG1649353624151.jpg",
                "https://pbs.twimg.com/media/F2I5GU2XoA8PHw4?format=jpg&name=large",
                "https://bnetcmsus-a.akamaihd.net/cms/page_media/b6/B6XBRV0IWM661686369647072.png",
                "https://dotesports.com/wp-content/uploads/2021/02/25074904/Hanamura_concept.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25074906/Horizon_Lunar_Colony2.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25074908/Paris_map.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25074909/Anubis_concept.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25074911/Volskaya_Industries.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25080348/Ayutthaya.png",
                "https://dotesports.com/wp-content/uploads/2021/02/25080122/Black-Forest.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25080212/Castillo-2.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25080317/Chateau_Guillard.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25080124/Ecopoint_Antarctica_BlizzCon_2016.png",
                "https://dotesports.com/wp-content/uploads/2021/02/25080319/Kanezaka.jpg",
                "https://dotesports.com/wp-content/uploads/2021/09/30003840/ezgif-1-0693893f4bb8-1024x576.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25080124/Necropolis.jpg",
                "https://dotesports.com/wp-content/uploads/2021/02/25080320/Petra.jpg"
            ]
            let index = Math.floor(Math.random() * imagesURL.length);
            let imageURL = imagesURL[index];
            document.body.style.backgroundImage = `url("${imageURL}")`;
        }
        changeBackground();
        setInterval(changeBackground, 7000);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
        setTimeout(function () {
            if (localStorage.getItem("subscribe") == "false") {
                let email = prompt("Would you like to receive news and updates about Overwatch 2?");
                if (emailRegex.test(email)) {
                    alert("Thank you for subscribing!");
                    localStorage.setItem("subscribe", "true");
                }
            }
        }, 3000);
        let unsubscribe = document.querySelector("#unsubscribe");
        unsubscribe.onclick = function () {
            if (localStorage.getItem("subscribe") == "false") {
                alert("You are already unsubscribed");
            } else {
                localStorage.setItem("subscribe", "false");
                alert("Unsubscribed succesfully");
            }
        }
    });
}

onLoadHandler();