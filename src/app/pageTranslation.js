const pageTranslation = [
    [
        {
            "menuText": '<li class="headerLink selectedHeaderLink"><p>About me</p></li><li class="headerLink"><a href="">Social</a></li><li class="headerLink"><a href="./gallery.html">Gallery</a></li> <li class="headerLink"><p onclick="toggleModal(0,3)" >Lang & theme</p></a></li><li class="headerLink"><p onclick="toggleModal(0,4)">Credits</p></li>',
            "pageText" : 'Hy 👋 <br>My name is Robin; I speak french and try to learn english ≈ 20%<br>I\'m 18Yo (2004/11/04).<br>I learn to draw🎨 and program💻 <br>what more to say about me ?<br><br>i\'m a <span class="SpanInfo" onclick="toggleModal(0,0)">gay</span> <span class="SpanInfo" onclick="toggleModal(0,1)">furry</span> <span class="spoiler" id="sp1" onclick="toggleSpoiler(\'sp1\')">(my fursona is Raven Spart)</span>, a Highly sensitive and shy person and a music and dance lover <span class="spoiler" id="sp2" onclick="toggleSpoiler(\'sp2\')">(i currently practice dance in club 1.5 hours per weeks + 1 hours of figure skating)</span>'
        },
        {
            "menuText": '<li class="headerLink selectedHeaderLink"><p>A propos</p></li><li class="headerLink"><a href="">Réseaux</a></li><li class="headerLink"><a href="./gallery.html">Gallerie</a></li><li class="headerLink"><p onclick="toggleModal(1,3)" >Lang & theme</p></a></li><li class="headerLink"><p onclick="toggleModal(1,4)">Crédits</p></li>',
            "pageText" : 'Sallut 👋 <br>Je m\'appelle Robin ; je parle français et tente d\'apprendre l\'anglais ≈ 20%<br>j\'ai 18 ans (04/11/2004)<br>J’apprends le dessin🎨 et la programmation💻<br>Que dire de plus ?<br><br>je suis un <span class="SpanInfo" onclick="toggleModal(1,1)">furry</span> <span class="SpanInfo" onclick="toggleModal(1,0)">gay</span> <span class="spoiler" id="sp1" onclick="toggleSpoiler(\'sp1\')">(mon fursona se nomme Raven Spart)</span>, un gars très sensible et timide et un amateur de danse <span class="spoiler" id="sp2" onclick="toggleSpoiler(\'sp2\')">(Je pratique actuellement la danse en club 1h30 & le patinage 1h par semaine)</span> qui passe tout son temps à écouter de la musique'
        },
        {
            "menuText": '<li class="headerLink selectedHeaderLink"><p>Sobre mí</p></li><li class="headerLink"><a href="">Redes sociales</a></li><li class="headerLink"><a href="./gallery.html">Galería</a></li><li class="headerLink"><p onclick="toggleModal(2,3)" >Lang & theme</p></a></li><li class="headerLink"><p onclick="toggleModal(2,4)">Créditos</p></li>',
            "pageText" : 'Hola 👋<br>mi nombre es Robin; hablo francés y trato de aprender inglés ≈ 20%.<br>Actualmente tengo 18 años (04/11/2004)<br>Aprendo a dibujar🎨 y a programar💻<br>¿qué más decir de mí?<br><br>soy un <span class="SpanInfo" onclick="toggleModal(2,1)">furry</span> <span class="SpanInfo" onclick="toggleModal(2,0)">gay</span> <span class="spoiler" id="sp1" onclick="toggleSpoiler(\'sp1\')">(mi fursona es Raven Spart)</span>, una persona muy sensible y tímida y amante de la música y el baile <span class="spoiler" id="sp2" onclick="toggleSpoiler(\'sp2\')">(actualmente practico la danza en club 1.5 horas por semana + 1 horas de patinaje artistico)</span>'
        }
    ],[
        {
            "menuText": '<li class="headerLink"><a href="./index.html">About me</a></li><li class="headerLink"><a href="./social.html">Social</a></li><li class="headerLink selectedHeaderLink"><p>galery</p></li><li class="headerLink"><p onclick="toggleModal(0,3)" >Lang & theme</p></a></li><li class="headerLink"><p onclick="toggleModal(0,4)">Credits</p></li>',
            "nothingFind": '<div id="nothingFind"><h1>Sorry, we haven\'t found any result corresponding to your search</h1></div>',
            "tags": [
                "Photo",
                "Artwork",
                "Video",
                "Furry",
                "Not furry",
                "convention",
                "FurMeet",
                "2022",
                "2023",
                "all"
            ]
        },{
            "menuText": '<li class="headerLink"><a href="./index.html">A propos</a></li><li class="headerLink"><a href="./social.html">Réseaux</a></li><li class="headerLink selectedHeaderLink"><p>Gallerie</p></li><li class="headerLink"><p onclick="toggleModal(1,3)" >Lang & theme</p></a></li><li class="headerLink"><p onclick="toggleModal(1,4)">Crédits</p></li>',
            "nothingFind": '<div id="nothingFind"><h1>Désolé, nous n\'avons trouvé pas de résultat correspondant à votre recherche</h1></div>',
            "tags": [
                "Photo",
                "Illustration",
                "Vidéo",
                "Furry",
                "Non furry",
                "convention",
                "FurMeet",
                "2022",
                "2023",
                "tout type"
            ]
        },{
            "menuText": '<li class="headerLink"><a href="./index.html">Sobre mí</a></li><li class="headerLink"><a href="./social.html">Redes sociales</a></li><li class="headerLink selectedHeaderLink"><p>Galería</p></li><li class="headerLink"><p onclick="toggleModal(2,3)" >Lang & theme</p></a></li><li class="headerLink"><p onclick="toggleModal(2,4)">Créditos</p></li>',
            "nothingFind": '<div id="nothingFind"><h1>Perdone, pero no hemos encontrado ningún resultado que coincida con su búsqueda</h1></div>',
            "tags": [
                "Photo",
                "Artwork",
                "Video",
                "Furry",
                "Not furry",
                "convention",
                "FurMeet",
                "2022",
                "2023"
            ]
        }
    ]
]
