---
title: Comprendre les bases de Git
description: Pourquoi Git est aussi compliqué ?
draft: false
dateCreated: 2023-11-09
tags:
  - cheatsheet
  - apprentissage
  - programmation
  - article
aliases: 
type:
  - Article
---
![[GitFCK.png]]
> Crédit : https://imgflip.com

Si vous n'avez jamais entendu parler de **Git**, alors tant mieux pour vous. 
Voilà, bisous 😘

Bon ok, j'ai un peu plus de choses à dire sur le sujet. \
Tout développeur qui se respecte passe de nos jours par le difficile apprentissage de Git. Et pour cause : **93% des développeurs en 2022**[^1] utilisent ce logiciel pour le contrôle de versions de leur *codebase*. 

Sauf que Git a la réputation, largement méritée par ailleurs, d'être plutôt compliqué à maitriser. Un vrai truc de développeur quoi : rendre les choses difficiles avant même d'avoir écrit une seule ligne de code !

Mais pas de panique : comme tout concept obscur, il suffit souvent de prendre le temps de comprendre les principes de base pour aborder la chose un peu plus sereinement. \
Ce qui est, vous l'aurez compris, l'objet de cet article 🙂

## C'est quoi Git ?

![[GitGraphCover.png]]
>

[[Git]] est un programme en [[CLI]] inventé par **Linus TORVALD** (le monsieur de la photo de couverture de cet article, également inventeur de [[Linux]]), permettant de gérer le contrôle de version de fichiers de manière distribuée. 

Pour faire court, un outil de *versioning* spécialisé pour les projets de développement d'application. 

Ce n'est pas le seul outil existant de ce type, on peut citer entre autres : 
- Apache Subversion (SVN)
- CVS
- Mercurial

Mais Git est devenu une référence au point que presque tous les développeurs l'utilisent aujourd'hui. Et donc vous aussi demain, si devenir un développeur fait partie de vos ambitions. 

Ce n'est pas pour rien que toutes les formations au développement incluent aujourd'hui une partie sur l'apprentissage de Git. 

## Pourquoi c'est aussi compliqué à utiliser ?

Git est partout, tout le monde l'utilise. Cool. Ça en fait un logiciel de plus à ajouter à sa boite à outil du développeur tout simplement, sauf que cet outil là va vous demander un peu de pratique avant d'en tirer les bénéfices. 

Mais pourquoi Git est-il aussi compliqué au fait ? 

![[GitDrawing.png]]
> Crédit: https://www.getdbt.com

### La complexité intrinsèque

Commençons par le plus évident : parce que gérer les versions d'un ***codebase*** (entendez un projet constitué de fichiers de code informatique), c'est compliqué par nature. 

Typiquement, plusieurs développeurs travaillent sur ce type de projet. Plusieurs fonctionnalités doivent pouvoir être écrites en parallèle, et chaque combinaison développeur-fonctionnalité doit pouvoir être testée indépendamment, ramenée en arrière en cas de bug et intégrée au projet principal dans le cas contraire. 

Chaque étape de ce joyeux bordel doit pouvoir être transcrite dans un journal, permettant de remonter l'historique des modifications et versions. 

Tout ça peut donc vite devenir complexe. \
Et il y a deux manières de gérer la complexité :
- la supprimer - par élimination
- la masquer - par abstraction

#### Supprimer la complexité

Supprimer la complexité reviens à éliminer ce qui la crée en premier lieu. Si le sujet est complexe par nature, alors on retire ce qui le rends complexe. Le problème de cette approche est qu'on ne réponds pas à la problématique initiale, on la modifie pour qu'elle soit plus simple à gérer. 

Dans le cas de la gestion d'un ***codebase***, on peut implémenter cette approche en disant par exemple que les développeurs doivent tous travailler sur une version unique (non distribuée) des fichiers, et jamais en même temps sur le même fichier. Et que chaque nouvelle fonctionnalité doit être développée en série, et non en parallèle, afin d'être certain de ne pas créer de multiples versions de fichiers. 

Ces mesures simplifient la problématique de base, en contournant la complexité, pas en la traitant. 

C'est pourquoi l'approche largement utilisée dans la programmation en général consiste plutôt à faire abstraction de la complexité. 
#### Masquer la complexité

![[GraphTendance.png]]
> Masquer la complexité en la représentant de manière simplifiée

On fait abstraction de la complexité en la représentant d'une manière plus synthétique. C'est une technique utilisée absolument partout en informatique et en ingénierie en général. 

> [!Example] Exemples
> 
> Lorsque vous tapez "météo" sur votre clavier et que google affiche une page avec les prévisions locales, vous n'avez pas besoin de savoir tout ce qui se passe entre votre clavier et l'envoi d'une page depuis le serveur qui a répondu à votre requête. 
> 
> Lorsque vous tournez la clé de contact de votre voiture et que celle-ci démarre, vous n'avez pas plus besoin de savoir tout ce qui se produit entre l'action et son résultat. 

Dans les deux cas, la complexité n'a pas disparue, elle est juste masquée, vous ne la voyez pas.

**Git est pensé comme un outil qui gère 100% de la complexité** de la problématique initiale. Il ne fait donc aucun [[Tradeoff]]. Et il a été écrit par Linus Torvald, pour gérer le versioning code informatique du noyau Linux, qui n'est ni un truc auquel s'attaquent des développeurs inexpérimentés, ni un petit projet, même dans les standards du métier.  

### Compatibilité et sécurité

Git est donc pensé pour ne pas faire de compromis. Il n'en fait pas plus sur la rétro-compatibilité : toutes les commandes disponibles depuis son origine fonctionnent encore aujourd'hui, permettant aux anciens utilisateurs de conserver leurs habitudes de travail. 

C'est pourquoi il existe plein de commandes différentes pour faire la même chose dans Git, ce qui peut être déroutant. 

Enfin, aucun compromis n'est fait non plus sur la sécurité. Git étant distribué, il permet de rapidement copier du code informatique sur de multiples machines. Evidemment, ça peut poser problème si ce code a été corrompu, de manière fortuite ou intentionnelle. 

Le système de hash utilisé dans Git illustre bien ce point ; utiliser des noms du type `879a3c3c612a08691cf5dfb1e44360a7c618efd7`pour identifier les modifications de version est certes peu intuitif à utiliser, mais ça a l'avantage d'être absolument infalsifiable. 

En conclusion, utiliser Git pour ses petits projets perso. reviens donc à utiliser un couteau de cuisine japonais en acier de Damas 150 couches pour couper un concombre : ça fonctionne mais c'est *overkill*.  

Mais vous allez devoir apprendre à le manier quoi qu'il arrive, donc allons-y !

![[GitStatusIterm.png]]
> Prêts à bouffer du terminal ?

## Quels sont les concepts importants à comprendre pour s'en servir ?

Si vous ne faites qu'apprendre les commandes dont vous avez besoin au fil de l'eau en faisant une recherche sur le web, vous risquez de galérer un petit peu. 

Certes, vous allez trouver rapidement comment créer une *branch*, faire un *commit* ou pousser vos données sur un répertoire distant. Mais au bout d'un laps de temps relativement court, vous allez vous retrouver bloqué avec des erreurs Git que vous ne saurez plus résoudre, et une question existentielle en tête : "*pourquoi on a inventé ce truc débile au juste ?*"

==Car utiliser Git nécessite absolument que vous en compreniez au minimum les principes de fonctionnement de base.== 

Commençons donc par nous constituer une petite bibliothèque de références utiles pour la suite. 
### Des ressources utiles

Le web, lieu de vie virtuel favori des développeurs, est littéralement *gavé* de contenu autour de Git. Billets de blog, tutos, articles, vidéos, sites dédiés ... Il y en a partout et dans toutes les langues. 

Nous sommes confrontés au phénomène de [[Surabondance des choix]]. C'est pourquoi je ne vous proposerai que 3 ressources autour du sujet :
- cet article 😇
- le manuel officiel
- la merveilleuse *Git cheatsheet* de **NDP Software**

Bien-sûr, libre à vous d'aller chercher des ressources supplémentaire, mais avec celles-ci vous avez le nécessaire pour aller relativement loin dans votre maitrise de l'outil. 

> [!Caution] English, motherfucker
> Un petit conseil avant de vous présenter ces ressources, qui s'applique aussi à l'informatique d'une manière générale : apprenez l'anglais. \
> Sérieusement. \
> LEARN ENGLISH! \
> [[Pourquoi apprendre l'anglais n'est pas une option ?]]
> 

#### RTFM

**RTFM** est un acronyme signifiant "***R**ead **T**he **F**ucking **M**anual*". \
Oui, c'est la base, mais devant la quantité d'informations disponibles, on a souvent tendance à oublier que le premier endroit ou trouver de l'aide reste la documentation officielle, tout simplement. 

[Documentation officielle de Git](https://git-scm.com/docs)

Peu *sexy* au premier abord, la doc officielle a l'avantage d'être exhaustive et truffée d'exemples. Et ça peut aider, croyez moi !

Sur la page principale de la doc, on trouve également un lien vers la seconde ressource que je vous recommande - vous voyez je ne suis pas allé chercher très loin 🙂

![[GitDoc.png]]
#### L'outil indispensable

Il s'agit d'une *cheatsheet* interactive de **NDP Software** qui est extrêmement bien pensée, raison pour laquelle on la trouve en lien sur la documentation officielle. 

Vous devriez pouvoir absolument tout apprendre sur Git en navigant entre ces deux ressources. Pour la suite de cet article, je m'en servirai pour illustrer mes propos. 

#### Git n'est pas Github

Une petite précision avant d'aller plus loin pour éviter toute confusion pour la suite. Si vous lisez cet article et n'avez jamais utilisé Git, vous avez surement déjà entendu parlé de [[Github]]. 

> [!Caution] Attention !
> **Git ≠ Github**\
> Oui, Github repose sur Git. Mais il est parfaitement possible d'utiliser Git sans utiliser Github. 

**Github** est une plateforme d'hébergement de code source en **[[SaaS]]**, qui utilise **Git** comme outil de *versionning*. Cet article ne traitera pas de **Github** !

### Le Workflow Git

Commençons par le plus basique. On va se concentrer sur la théorie ici. 

Pour utiliser Git, il faut l'initialiser sur un répertoire sur votre poste de travail. Cette action crée une structure de dossiers et fichiers cachés à l'intérieur du répertoire, qui servira au fonctionnement de Git. 

À partir de là, imaginez que Git gère 3 emplacements virtuels :
- le ***working directory*** qui est le répertoire de votre projet - ce que vous voyez en gros
- la ***staging area*** qui est une zone "tampon" qui contiens les modifications faites sur les fichiers du *working directory* mais pas encore validées
- le ***repository***, qui contiens la dernière version validée de votre projet, ainsi que tout l'historique de ce qui a été fait depuis son origine

![[BasicGitWF.png]]
> Crédit : www.codecademy.com

Le [[Workflow]] est donc le suivant : 
1. on travaille normalement sur nos fichiers
2. lorsqu'on est satisfaits de nos modifs, on ajoute ces fichiers à la *staging area*
3. il ne reste plus qu'à valider ces fichiers en créant une version dans notre *repository*

#### L'utilité de la *staging area*

À ce stade, peut-être vous demandez-vous déjà quelle est l'utilité de la zone tampon du milieu - la *staging area*. C'est vrai ça, pourquoi ne pas envoyer directement nos fichiers modifiés dans notre *repository* final ?

La raison principale : pour ==séparer le travail effectué sur les fichiers, et le travail consistant à organiser la façon dont ces changements apparaitrons dans votre version finale.== 

Imaginez que vous deviez écrire du code pour une fonctionnalité spécifique, puis faire un rapport sur le travail que vous avez effectué par la suite. Ce sont deux activités différentes. 

Dans votre rapport, vous allez sûrement vouloir présenter votre travail de manière plus lisible et synthétique, par exemple en catégorisant vos tâches et en les regroupant par grandes thématiques. Et bien ici c'est pareil : votre rapport est ce qui apparaîtra dans votre version finale - le *repository*. Il s'agit de votre ***commit*** dans le jargon Git. 

Par la suite, lorsque vous aurez besoin de parcourir celui-ci pour vous rappeler ce que vous avez fait, ce sera beaucoup plus simple à lire que d'aller ouvrir chaque fichier pour y lire les modifications une par une. 

Si vous avez déjà écrit du code, vous savez combien il est difficile de parfois juste se rappeler ce que vous avez écrit il y a quelques jours. C'est encore plus vrai lorsque on doit lire celui de quelqu'un d'autre ! 

D'où l'intérêt vital de structurer ses changements pour qu'ils soient exploitables par la suite. 

#### 3 ou 5 emplacements ?

Sur la [*cheatsheet* interactive](https://ndpsoftware.com/git-cheatsheet.html#loc=index;) de **NDP Software**, vous pouvez voir non pas 3 emplacement, mais 5 en tout. Afin de simplifier un maximum ce guide et pour nous concentrer sur les basiques, nous n'utiliserons que les 3 suivants :

![[GitIndex.png]]

La *staging area* est ici nommée *index*. C'est exactement la même chose.

Une fois que vous aurez acquis une bonne compréhension de ces 3 emplacements, les 2 autres ne devraient vraiment pas vous causer de difficultés 😎

Voyons maintenant l'autre concept important de **Git** : les **Branches**. 
### Les Branches

La notion de branches, et surtout la façon dont Git l'implémente, est probablement la raison principale de son hégémonie dans les outils de versionning de code. 

Une **Branch** est simplement une version alternative du *repository* principal. \
Jetons un œil au schéma suivant :

![[GitBranches.png]]
> Crédit : https://stock.adobe.com

> [!info] En bleu 
> Notre **repository** principal, chaque point représentant une nouvelle version (les fameux *commits*). Cette **branch** principale est nommée ***Main***, par convention. Vous verrez également souvent le terme ***Master***, qui est l'ancienne convention de nommage.

> [!hint] En vert
> Une nouvelle **Branch**, qui pourrait s'appeler "***Features***", par exemple. \
> La **Feature A** a été ajoutée à la **branch** principale (*commit* **Alpha**), mais elle contiens également un bug. Celui-ci n'étant pas bloquant, nous ouvrons une nouvelle **branch** ***Fix*** afin de le traiter tout en poursuivant le développement sur la **branch** **Main** en parallèle, avec la **Feature A**.

> [!warning] En orange
> Notre premier *commit* sur la **branch** **Fix** crée un bug qui fait planter l'app. Ça risque d'être compliqué à débugguer, alors on crée une **branch BugFix** pour traiter ce bug et on continue avec nos branches déjà en développement. \
> On décide pendant le développement sur la **branch Fix** d'ajouter une nouvelle fonctionnalité : **Feature B**. Celle-ci dépendant du correctif apporté sur le **commit Fix 1**, nous rouvrons la **branch Features** précédemment fusionnée dans **Main** à partir de ce point. 

> [!Danger] En rouge
> Notre branch **BugFix** est indispensable au bon fonctionnement de l'app. Il faudra donc la fusionner à la **branch Fix** avant de pouvoir intégrer celle-ci, ainsi que la **branch Feature** (qui contiens **Feature 2**) à notre **branch Main**. 

L'intérêt principal des branches apparaît clairement ici : pouvoir faire évoluer plusieurs versions alternative d'un *codebase*, sans que l'une soit dépendante de l'autre, pour finir par les fusionner quand tout ce qui dois fonctionner fonctionne correctement. 

Ce qui rend Git si puissant, c'est la façon dont il gère ce système de branches. Pour simplifier, Git implémente un pointeur - nommé ***HEAD*** - qui indique en permanence sur quelle **branch** et quel commit on se trouve. 

![[GitHEAD.png]]
> Crédit: https://www.studytonight.com

De cette façon, et pour reprendre notre exemple ci-dessus, un même développeur (vous !) pourra travailler sur le dernier commit de la **branch BugFix** (BugFix 2 ici), pour ensuite déplacer le pointeur **HEAD** sur le commit **Beta** de la **branch Main** et retrouver instantanément l'ensemble des fichiers dans l'état ou ils sont supposés être sur cette branch !

Tout ça paraît encore très conceptuel j'imagine, et c'est normal. Il s'agit ici d'un cas plutôt complexe, et utiliser Git seul nécessite rarement d'avoir besoin de créer autant de versions alternatives de votre *codebase*. 

Mais il est important de comprendre la logique derrière ce concept, car c'est à la fois ce qui peut le rendre compliqué à appréhender, mais fait aussi de Git un outil aussi puissant !

Voilà, vous avez les connaissances requises pour commencer à utiliser Git, mais surtout **pour l'utiliser en comprenant ce que vous faite**, soit plus qu'environ un quart des utilisateurs de Git 😁

### 3 commandes de base à utiliser sans modération

Pour conclure, j'aimerai vous parler de trois commandes de base que vous aurez besoin d'utiliser très fréquemment. Autant commencer à les apprendre des maintenant !

#### Git status

![[GitStatus.png]]

Une commande de base qui vous indiquera tous les fichiers qui diffèrent entre votre répertoire de travail et la *staging area* / *index*, mais aussi entre cette dernière et la version (le commit) ou se situe le pointeur de Git (HEAD). 

#### Git diff

![[GitDiff.png]]

Une fonctionnalité très pratique qui va comparer les fichiers dans la *staging area* / *index* et ceux de votre *working directory* pour vous montrer ce qui diffère exactement, avec : 
- les lignes concernées en couleur
- ce qui a été ajouté
- ce qui a été supprimé
- ce qui a été modifié

#### Git log

![[GitLog.png]]

Cette commande vous affiche la version synthétique de base de l'historique du projet, à savoir la liste de l'ensemble des **commits** effectués sur la **branch** sur laquelle vous vous trouvez. 

Vous pouvez user et abuser de ces 3 commandes ; non seulement elles ne modifient rien, mais en plus elles vous aiderons à mieux visualiser les emplacement et branches sur lesquelles vous travaillez. 

## Conclusion

Cette article n'est qu'une ébauche des possibilités offertes par Git. La meilleure manière d'apprendre reste de loin la [[Pratique délibérée]], surtout quand on parle d'apprentissage en informatique. 

Alors allez-y ! Initialisez Git dans tous vos dossiers contenant des projets, même ceux sans code ! Oui, vous pouvez utiliser Git pour gérer la liste des invités des 70 ans de tatie Bernadette au format Word (2003) !

C'est complètement disproportionné, mais ça vous permettra de vous faire très rapidement avec la logique, avant d'aller plus loin 😉



[^1]: https://insights.stackoverflow.com/survey