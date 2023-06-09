const modalContentList = [
    [
        {
            "title" : "What is \"Gay\"",
            "content" : "<h3>\"gay\" means homosexual</h3><p>this term is used to describe someone who is attracted to people of the same sex, Not to people of the opposite sex like the majority</p><h4>it does not mean being more masculine or feminine and has no relation to being transgender or not</h4>"
        },
        {
            "title" : "Que veut dire \"Gay\"",
            "content": "<h3>\"Gay\" signifie Homosexuel</h3><p>ce therme est utilisé pour décrir quelqu'un attiré par les personnes de même sex, pas par les personnes du sexe opposé comme la plupart des gens</p><h4>ça ne signifie pas être plus masculin ou féminin et n'a aucun rapport avec le fait d'être transgenre ou non</h4>"
        },
        {
            "title" : "Qué es \"Gay\"",
            "content" : "<h3>\"gay\" significa homosexual</h3><p>este término se utiliza para describir a alguien que se siente atraído por personas del mismo sexo, no por personas del sexo opuesto como la mayoría</p><h4>no significa ser más masculino o femenino y no tiene relación con ser transgénero o no</h4>"
        }
    ],
    [
        {
            "title" : "What is \"Furry\"",
            "content": "<p>The word furry has several meanings, dependent on the context in which it is used. Predominantly, it means \"consisting of or resembling fur\".</p><h4>Here, it pertains to an interest in anthropomorphic animals and/or mythological or imaginary creatures which possess human or superhuman capabilities.</h4><p>The plural form of furry in all its contexts is furs or furries; the subjects of furry interest are also known as furries. Because people in the fandom tend to identify closely with their avatars (or fursonas), the word is often used to mean a group of furry characters in art or roleplay.</p>"
        },
        {
            "title" : "Qu'est qu'un \"Furry\"",
            "content": "<p>Le mot \"furry\" peut avoir plusieurs définitions dépendant du contexte; il peut signifier « constitué de fourrure » ou amas de fourrure</p><h4>Dans le cas présent, il se rapporte à une communauté portant un intérêt pour les animaux anthropomorphiques et/ou les créatures mythologiques ou imaginaires qui possèdent des capacités humaines ou surhumaines ; les furries.</h4><p>Les membre de cette communauté se créent généralement un ou plusieurs fursona, un personnage qui les représenteras dans le fandom et au quels ils s’identifient plus ou moins étroitement. Le mot est souvent utilisé pour désigner un groupe de personnages à fourrure dans l'art ou les jeux de rôle.</p>"
        },
        {
            "title" : "qué es \"Furry\"",
            "content": "<p>La palabra \"furry\" tiene varios significados, dependiendo del contexto en el que se utilice. Principalmente, significa \"que consiste o se parece a la piel\".</p><h4>En este caso, se trata de un interés por los animales antropomórficos y/o las criaturas mitológicas o imaginarias que poseen capacidades humanas o sobrehumanas.</h4><p>La forma plural de furry en todos sus contextos es furs o furries; los sujetos de interés furry también son conocidos como furries. Como la gente del fandom tiende a identificarse estrechamente con sus avatares (o fursonas), la palabra se utiliza a menudo para referirse a un grupo de personajes furries en el arte o en los juegos de rol.</p>"
        }
    ],
    [
        {
            "title" : "Social ⇢ Discord",
            "content": '<h3>Discord username : Robin888b#0423 / @robin888b</h3><p>You can find me in <a href="https://discord.com/invite/rvUJ5cvgfX">Curiosity</a>(french); <a href="https://discord.gg/CNaZGCD7Zb">Gunivers</a>(bilingual) & <a href="https://discord.gg/discord-developers">Discord Developers</a>(english)</p><h4>I don\'t accept friend requests from strangers</h4>'
        },
        {
            "title" : "Réseaux ⇢ Discord",
            "content": '<h3>Discord : Robin888b#0423 / @robin888b</h3><p>Vous pouvez me retrouver sur <a href="https://discord.com/invite/rvUJ5cvgfX">Curiosity</a>(français); <a href="https://discord.gg/CNaZGCD7Zb">Gunivers</a>(bilingue) & <a href="https://discord.gg/discord-developers">Discord Developers</a>(englais)</p><h4>Je n\'accepte pas les demandes d\'amis provenant d\'inconnus.</h4>'
        },
        {
            "title" : "Redes sociales ⇢ Discord",
            "content": '<h3>Mi usuario Discord : Robin888b#0423 / @robin888b</h3><p>Puedes encontrarme en <a href="https://discord.com/invite/rvUJ5cvgfX">Curiosity</a>(francés); <a href="https://discord.gg/CNaZGCD7Zb">Gunivers</a>(bilingüe) & <a href="https://discord.gg/discord-developers">Discord Developers</a>(inglés)</p><h4>No acepto solicitudes de amistad de desconocidos</h4>'
        }
    ],
    [
        {
            "title" : "Lang & theme",
            "content": '<h3>Lang</h3><div style="display: flex;flex-wrap: wrap;text-align: center;"><button class="langItem"><img class="circle selected" src="../src/img/png/flagUk.png" alt=""><p style="color: var(--TextColor2);font-weight: bold;text-decoration:underline;">English</p></button><button class="langItem" onclick="switchLang(1)"><img class="circle" src="../src/img/png/flagFr.png" alt=""><p>Français</p></button><button class="langItem" onclick="switchLang(2)"><img class="circle" src="../src/img/png/flagEs.png" alt=""><p>Español</p></button><button class="langItem" onclick="switchLang(3)"><img class="circle" src="../src/img/png/flagDeu.png" alt=""><p>Deutsch</p></button></div><br><br><h3>Color Theme</h3><div style="display: flex"><p>Deep</p><button id="sw1" class="switch" style="margin: 0 15px;background: none;" onclick="switchTheme(\'sw1\')"><div class="switchBall"></div></button><div></div><p>Light</p></div><br><div style="display: flex;flex-direction: row-reverse;"><button class="rememberButton" onclick="remember(0)">Remember</button></div>'
        },
        {
            "title" : "Langue & thème",
            "content": '<h3>Langue</h3><div style="display: flex;flex-wrap: wrap;text-align: center;"><button class="langItem" onclick="switchLang(0)"><img class="circle" src="../src/img/png/flagUk.png" alt=""><p>English</p></button><button class="langItem"><img class="circle  selected" src="../src/img/png/flagFr.png" alt=""><p style="color: var(--TextColor2);font-weight: bold;text-decoration:underline;">Français</p></button><button class="langItem" onclick="switchLang(2)"><img class="circle" src="../src/img/png/flagEs.png" alt=""><p>Español</p></button><button class="langItem" onclick="switchLang(3)"><img class="circle" src="../src/img/png/flagDeu.png" alt=""><p>Deutsch</p></button></div><br><br><h3>Couleurs</h3><div style="display: flex"><p>Sombre</p><button id="sw1" class="switch" style="margin: 0 15px;background: none;" onclick="switchTheme(\'sw1\')"><div class="switchBall"></div></button><div></div><p>Clair</p></div><br><div style="display: flex;flex-direction: row-reverse;"><button class="rememberButton" onclick="remember(1)">S\'en souvenir</button></div>'
        },
        {
            "title" : "Idioma y tema",
            "content": '<h3>Idioma</h3><div style="display: flex;flex-wrap: wrap;text-align: center;"><button class="langItem" onclick="switchLang(0)"><img class="circle" src="../src/img/png/flagUk.png" alt=""><p>English</p></button><button class="langItem" onclick="switchLang(1)"><img class="circle" src="../src/img/png/flagFr.png" alt=""><p>Français</p></button><button class="langItem"><img class="circle  selected" src="../src/img/png/flagEs.png" alt=""><p style="color: var(--TextColor2);font-weight: bold;text-decoration:underline;">Español</p></button><button class="langItem" onclick="switchLang(3)"><img class="circle" src="../src/img/png/flagDeu.png" alt=""><p>Deutsch</p></button></div><br><br><h3>tema del color</h3><div style="display: flex"><p>Oscuro</p><button id="sw1" class="switch" style="margin: 0 15px;background: none;" onclick="switchTheme(\'sw1\')"><div class="switchBall"></div></button><div></div><p>Claro</p></div><br><div style="display: flex;flex-direction: row-reverse;"><button class="rememberButton" onclick="remember(2)">Recordando</button></div>'
        }
    ],
    [
        {
            "title" : 'Credits',
            "content": '<h3>Resources that helped me in the creation of this website:</h3><br><p>Icon & logo : <br><a href="https://icones8.fr/icons" style="display: flex;align-items: center;"><div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg><p style="font-size: 35px;font-style: none !important;">Icon8</p></div></a><br>3D card : <br><iframe width="560" height="315" src="https://codepen.io/simeydotme/embed/PrQKgo/?theme-id=modal#result-box" title="Codepen" frameborder="0" allow="web-share"></iframe><br><br>Photography : <a href="https://www.fokuza.net/picture/104197/category/829-le_studio_du_panda">fokuza</a></p>'
        },
        {
            "title" : "Crédits",
            "content": '<h3>Ressources qui m\'ont aidé dans la création de ce portfolio:</h3><p>Icon & logo : <br><a href="https://icones8.fr/icons" style="display: flex;align-items: center;"><div<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg><p style="font-size: 35px;font-style: none !important;">Icon8</p></div></a><br>Carte 3D intéractive : <br><iframe width="560" height="315" src="https://codepen.io/simeydotme/embed/PrQKgo/?theme-id=modal#result-box" title="Codepen" frameborder="0" allow="web-share"></iframe><br> <br>Photographie : <a href="https://www.fokuza.net/picture/104197/category/829-le_studio_du_panda">Fokuza</a></p>'
        },
        {
            "title" : "Créditos",
            "content": '<h3>Recursos que me ayudaron en la creación de esta cartera</h3><p>Icon & logo : <br><a href="https://icones8.fr/icons" style="display: flex;align-items: center;"><div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg><p style="font-size: 35px;font-style: none !important;">Icon8</p></div></a><br>Naipes 3D : <br><iframe width="560" height="315" src="https://codepen.io/simeydotme/embed/PrQKgo/?theme-id=modal#result-box" title="Codepen" frameborder="0" allow="web-share"></iframe><br> <br>Fotografía : <a href="https://www.fokuza.net/picture/104197/category/829-le_studio_du_panda">Fokuza</a></p>'
        }
    ],
    [
        {
            "title" : "",
            "content": ""
        },
        {
            "title" : "",
            "content": ""
        },
        {
            "title" : "",
            "content": ""
        }
    ],
    [
        {
            "title" : "",
            "content": ""
        },
        {
            "title" : "",
            "content": ""
        },
        {
            "title" : "",
            "content": ""
        }
    ]
]