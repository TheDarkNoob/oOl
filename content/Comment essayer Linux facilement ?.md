---
title: Comment essayer Linux facilement ?
description: 3 outils 100% gratuits pour essayer Linux sans modifier son système actuel.
draft: false
dateCreated: 2023-11-13
tags:
  - systèmes
aliases: 
type:
  - Tuto
---
![[DebianTerminal.png]]

Vous avez décidé d'essayer [[Linux]], soit parce que vous êtes simplement curieux, soit parce que [[Microsoft]] commence à sérieusement vous gonfler 🫨 

Dans tous les cas, c'est une bonne décision ! Vous aller élargir considérablement votre vision du monde informatique, et pourquoi pas un jour prochain décider de sauter le pas et d'abandonner définitivement [[Windows 101]] !

En attendant, procédons par étapes. C'est une bonne idée de tester un peu Linux avant de l'installer de manière durable. 

Première étape : choisir sa version, ou [[Distributions Linux|Distro]] comme disent les vrais : [[4 distros Linux]]. 

Vous avez choisi ? \
Alors c'est parti !

## Quelles sont les options ?

Il existe deux manières d'utiliser Linux sur votre matériel actuel :
- en l'installant sur votre disque, à la place ou à côté du Windows ou MacOS qui s'y trouve
- en utilisant un outil permettant de ne pas modifier son disque

La première méthode implique soit d'effacer complètement son [[Operating system|OS]] actuel pour installer Linux à la place, soit de rentrer dans le domaine merveilleux du partitionnement 🤩

![[Gparted.png]]
> Ouuhouuuuu le partitionnement, ça fait peuuuuuur.

Donc à moins d'être suffisamment sûrs qu'effacer votre système de manière durable soit une bonne idée, ou de vouloir jouer un peu avec les partitions de votre / vos disques, préférez plutôt la seconde méthode pour démarrer en douceur. 

Attention, je ne dis pas que c'est si compliqué que ça, mais c'est un sujet pour un autre jour en tout cas. 

Heureusement, il existe des moyens simples de tester des distributions Linux sans avoir à écrire quoi que ce soit de "définitif" sur son disque.

Ce guide va donc se concentrer sur cette dernière option, qui vous permettra d'essayer Linux de manière gratuite, facile et surtout sans affecter votre système actuel.


## Les outils pour essayer Linux

Là encore, vous avez quelques options. Passons les en revue !

### DistroSea

La première de ces options est un site web : [DistroSea](https://distrosea.com/)
![[DistroSea.png]]

Le principe est simple mais extrêmement pratique : démarrer une machine virtuelle configurée avec une distro Linux en quelques secondes sur un serveur distant. 

Exemple avec [[4 distros Linux#Manjaro - le Arch Linux grand public|Manjaro]] : 

![[Manjaro-DistroSea.mp4]]

En tout, l'opération m'aura prise exactement 1 minute et 48 secondes. Mais ceci dépends évidemment des ressources disponibles et de la demande sur les serveurs de DistroSea. 

Toujours est-il que c'est un moyen extrêmement simple et rapide de se faire une première idée d'une distribution !

**Je recommande donc de commencer par là** avant de faire quoi que ce soit d'autre, ne serait-ce que pour vérifier si la distro qui vous intéresse est dispo. \
Allez-y, ça ne vous prendra pas plus de 5 minutes !

> [!Success] Essayer DistroSea maintenant
> 👉 [DistroSea](https://distrosea.com/)

Comme tous les outils que je vais vous présenter, il y a quelques limitations à prendre en considération.

> [!Warning] Limitations
>
> Comme il s'agit d'un [[SaaS]], la performance et la disponibilité du service est bien-sûr dépendante du réseau, à commencer par le votre. Si beaucoup d'utilisateurs sollicitent les serveurs de DistroSea, ça peut aussi augmenter le temps d'attente et/ou dégrader les performances. 
>
> Deuxième limitation : il s'agit d'une version "non persistante". Si vous fermez l'onglet ou le navigateur, vous perdez l'état de la machine, qui ne sera pas sauvegardé. 
>
> Vous êtes limités à la liste des distributions affichée en page d'accueil du site, aussi vous ne trouverez pas, entre autres, des distributions comme [[4 distros Linux#Parrot Security - l'outil des experts en en cybersécurité|ParrotSec]] ou [[4 distros Linux#Garuda - pour (presque) remplacer votre bécane de jeu|Garuda]].
>
> Enfin, le fait que les machines fonctionnent parfaitement sur les serveurs DistroSea ne garantie aucunement que ce sera le cas si vous installez la même version de la distro testée sur votre matériel. 

Quelques contraintes donc, mais comme je le disais plus haut, c'est surtout un service très pratique pour avoir un premier ressenti rapide d'une distribution et voir si vous voulez aller plus loin avec. 

### La clé USB bootable

![[BootLinux.png]]

C'est une option intermédiaire entre les 3 listées ici, aussi bien en termes de facilité d'utilisation que de possibilités d'évolution.

> [!Summaries] Prérequis
> Cette méthode nécessite que vous ayez **une clé USB d'au moins 16Go** que vous pouvez effacer. 

Nous allons créer une clé USB dite "bootable", qui vous permettra de démarrer directement votre ordinateur la distribution Linux que vous y aurez installé. 

Le principe : le système tourne sur la clé et pas sur votre disque. D'ailleurs ça fonctionne très bien sur un ordinateur sans disque ou avec un disque endommagé. Certaines distributions sont ainsi spécialisées dans la réparation de systèmes d'exploitations qui ne veulent plus démarrer. 

Vous utilisez Linux, et lorsque vous souhaitez repasser sous Windows, vous éteignez l'ordi et enlevez la clé pour redémarrer normalement. C'est sans risque pour votre système et facile à faire.

> [!Success] Avantages
> Le principal intérêt de cette méthode est qu'elle permet de faire tourner Linux directement sur votre matériel. Non seulement ça permet de savoir si la distribution prends correctement en charge l'ensemble des composants de l'ordinateur, mais en plus on profite de presque 100% des performances car on ne fait pas tourner un autre système en simultané.
> 
> La limite en termes de performances dépendra essentiellement de la vitesse de votre clé USB ainsi que de celle du port sur lequel elle est branchée. 

#### Les outils

Je recommande le logiciel suivant : [**Balena Etcher**](https://www.balena.io/etcher/) .
Il est assez direct et intuitif à utiliser. 

![[BalenaEtcher.png]]

Il arrive parfois qu'en fonction de l'image disque et/ou de la clé USB utilisée, il y ai des erreurs lors de la création de la clé bootable. Dans ce cas, n'hésitez pas à utiliser l'un des logiciels suivants, qui fonctionnent de la même manière que **Etcher** et sont également des références : 
- [Rufus](https://rufus.ie/en/)
- [Unetbootin](https://unetbootin.github.io/)

> [!Info] Persistence
> À ce stade, je me dois de faire un petit aparté sur la notion de "Persistence". Déjà, parce que **Balena Etcher** ne prends pas en charge ce mode ! Mais pas que. 
> 
> Certaines distributions incluent des pilotes pour rendre persistantes les clés USB *bootables*. Cela permet de pouvoir "écrire" sur la clé et donc de conserver l'état du système, même après avoir redémarré l'ordinateur. 
>
> Je ne traiterai pas de cette possibilité, pour plusieurs raisons : 
> - ça limite les options notamment en termes de distributions disponibles
> - ça complique potentiellement le processus de création de la clé bootable
> - ça reste une clé, il suffit souvent de la retirer sans faire attention pour "tuer" la partition
> - et comme ça reste une clé, ce n'est pas fait pour les constantes réécritures qu'imposent un système d'exploitation ; ça a tendance à user les clés USB prématurément
>
> Pour ces raisons, je préfère à cette méthode celle présentée plus loin (la virtualisation), voire le dual-boot, lorsqu'on veut aller un peu plus loin avec sa distro.

> [!warning] Limitations
> L'inconvénient principal de cette option est donc, comme avec DistroSea, que vous perdrez vos modifs lorsque vous éteignez votre ordinateur. 
> 
> Un autre inconvénient potentiel (ou pas si vous êtes curieux 😊) : il y a des chances que vous deviez vous amuser un peu avec le microprogramme de votre carte-mère, pour indiquer à ce dernier que oui, l'ordinateur a le droit de démarrer sur une clé USB. 
> 
> Quoi qu'il en soit ça n'a rien de compliqué et vous trouverez facilement pas mal de tutos en demandant poliment à un moteur de recherche. Mais comme je suis sympa je vous en laisse quand même 2 qui sont bien écrits ici : 
> - [Comment démarrer son PC sur clé USB - malekal.com](https://www.malekal.com/comment-demarrer-ordinateur-cle-usb/)
> - [Démarrer son PC à partir d’une clé USB ou d’un CD/DVD – Le Crabe Info](https://lecrabeinfo.net/demarrer-pc-a-partir-cle-usb-cd-dvd.html)

#### Les étapes

> [!Summaries] Dans ce tuto : 
> Nous allons installer la dernière version de Manjaro avec le bureau KDE Plasma. 

◉ Insérez la clé USB qui contiendra votre **Linux**

◉ Vérifier que la clé USB est vide ! \
      (nous allons la formater, avouez que ce serait con de supprimer le seul exemplaire des photos de l'anniversaire de votre neveu / nièce 😓)
      
◉ Rendez-vous sur la page de téléchargement officielle de Manjaro : https://manjaro.org/download
      ![[ManjaroDownload.png]]
 
 ◉ Cliquez sur `X86_64`,  sauf bien-sûr dans le cas où votre ordinateur a un CPU ARM ([[Check CPU ARCH|comment vérifier ?]])
 
 ◉ Choisissez `PLASMA DESKTOP`, faites un clic-droit sur `image`, puis copiez le l'adresse du lien
      ![[GetManjaroLink.gif]]

◉ Ouvrez **Balena Etcher**

◉ Cliquez sur `🔗 flash from url` puis collez le lien qui se trouve dans votre presse-papier 

◉ Cliquez sur `Select target`, puis sélectionnez votre clé USB

> [!Danger] 
> SVP ne cliquez pas sur le menu déroulant `show hidden`. Ce sont des disques détectés par le logiciel, mais cachés pour une bonne raison : il s'agit de votre système actuel et éventuellement d'autres volumes internes **que vous ne voulez pas toucher** !
> 
> Donc si la clé n'apparait pas, c'est qu'il y a un problème en amont.

◉ Cliquez sur `Flash!`
      ![[BalenaEtcher.mp4]]

◉ Enlevez la clé comme demandé, puis éteignez votre ordinateur

◉ Rebranchez la clé

◉ Démarrez l'ordinateur dessus \
      Rappel : 
	- [Comment démarrer son PC sur clé USB - malekal.com](https://www.malekal.com/comment-demarrer-ordinateur-cle-usb/)
	- [Démarrer son PC à partir d’une clé USB ou d’un CD/DVD – Le Crabe Info](https://lecrabeinfo.net/demarrer-pc-a-partir-cle-usb-cd-dvd.html)

**Voilà** 🤩

Bon, vous avez essayé quelques distros, et l'une d'entre elle vous a tapé dans l'œil. Maintenant vous aimeriez pouvoir enregistrer les modifs que vous faites dessus, mais sans pour autant vous lancer dans le multi-boot ou dans le remplacement pur et simple de votre Windows.

C'est ici qu'intervient la virtualisation !

### La virtualisation

Le principe : la [[Virtualisation]] crée un espace de stockage sur votre disque, isolé de votre machine Windows, sur lequel va vivre votre **Linux**. 

C'est une machine que vous pouvez faire tourner, *crasher*, infecter par des virus, sans risque que ça se propage à votre système d'exploitation (au pire vous supprimez le fichier et recommencez).
![[Virtualisation.png]]
> Source: [Wiki ubuntu-fr](https://doc.ubuntu-fr.org/virtualisation)

  
> [!Warning] Limitations
> Le principal inconvénient de la virtualisation sur un poste de travail individuel est que c'est un procédé gourmand en ressources.
>  
> En effet, vous allez devoir faire tourner un nouveau système avec tous ses pilotes, en plus de votre système actuel. La puissance de calcul du processeur ainsi que la mémoire vive seront partagées entre ces deux systèmes, ce qui peut amoindrir l'expérience si votre PC peine déjà à faire tourner Windows.

Cela étant dit, les systèmes **Linux** sont réputés pour être beaucoup moins exigeants que Windows concernant les ressources requises.  

Sur une machine récente avec 16Go de RAM, ça fonctionnera de manière fluide, à condition de ne pas vous amuser à :
- faire tourner plus d'une VM à la fois (oui, vous pouvez faire tourner 8 systèmes en même temps si ça vous amuse, en théorie)
- avoir plein de trucs ouverts dans Windows (comme un navigateur web avec 56 onglets par exemple)

#### Les outils

Je vous propose d'utiliser le logiciel de virtualisation VirtualBox, qui a le mérite d'être simple d'usage, open source, multi systèmes et vraiment gratuit - pas un "*freemium*" donc (OMG que ce mot me dégoûte 🤮).

Vous pouvez télécharger la dernière version de Virtualbox ici : \
https://www.virtualbox.org/wiki/Downloads

![[VirtualBoxDL.png]]

Petite subtilité si vous avez un Mac avec un processeur Apple Silicon (soit un M1, M2, M3 et dérivés) : toutes les versions de VMWare ne sont pas compatibles avec cette architecture. Il existe bien une version compatible qui se trouve ici : \
https://download.virtualbox.org/virtualbox/7.0.8/

Mais je ne la recommande pas car :
- c'est une BETA
- vous devrez quand-même trouver des images de distro compatibles avec votre CPU

Installez plutôt UTM, qui est basé sur QEMU et est très bien optimisé pour le Mac : 

![[GetUTM.png]]
> Si vous avez un Mac ARM, vous aurez moins de possibilités dans le choix des distributions Linux que vous pouvez tester. Mais bon, vous avez un Mac ARM. Et ça, c'est bien. 

Ensuite vous m'installez le tout comme des grands à l'aide de la fameuse technique du "Suivant, Suivant, Suivant"... bref, toi même tu sait. 

#### Les étapes

> [!Info] Dans ce tuto :
> Les visuels montrés ci-après sont susceptibles de ne plus correspondre à des versions ultérieures de Virtualbox. Mais vous devriez retrouver vos petits sans trop de difficultés même si c'est le cas.  
> 
> Nous allons cette fois installer la version "Security" de ParrotSec, en utilisant VirtualBox, ou UTM pour ceux qui ont un Mac avec CPU Apple.  


◉ Installez VirtualBox / UTM au préalable

◉ Sur le site de ParrotSec : https://www.parrotsec.org/download/
- la version virtualbox pour virtualbox
- la version UTM pour UTM
	  (j'espère que je ne vous ai pas perdus jusque là 😂)

![[ParrotDL.mp4]]

> [!Hint] Alternative
> Le téléchargement depuis le serveur de Parrot est plutôt long. Comptez 20 minutes minimum. Si vous avez un client torrent, vous pouvez aussi opter pour ce mode de téléchargement, qui devrait aller nettement plus vite 😉

##### Avec VirtualBox

◉ Ouvrez VirtualBox

◉ Cliquez sur `Importer`, puis sur l'icône pour sélectionner un fichier

◉ Choisissez le fichier OVA téléchargé sur le site de ParrotSec

◉ Cliquez sur `Suivant`, puis `Finish`, puis `Accepter`

◉ Une fois la machine importée, cliquez sur le "Play" pour la lancer

![[VirtualboxW.mp4]]

Votre machine est prête !

##### Avec UTM

◉ Ouvrez UTM

◉ Cliquez sur `Create a new machine`, puis sur `Open...` et sélectionnez le fichier UTM téléchargé sur le site de ParrotSec

◉ Cliquez sur le symbole "Play" pour démarrer la machine, puis appuyez sur `Enter` sur le menu GRUB

![[ParrotUTM.mp4]]

Ce n'est pas plus compliqué, votre machine est prête en quelques secondes ! Pensez quand-même à l'éteindre avant de fermer UTM, de la même manière qu'un système non virtualisé. 

#### Migrer des machines

Un aspect très pratique de la virtualisation est que ce processus isole la machine de son environnement. 

Celà vous permettra notamment de pouvoir utiliser vos machines virtuelles sur des matériels différents, en plus de présenter des avantages en termes de sécurité. 

Enfin, si vous envisagez une carrière dans la cybersécurité, une machine virtuelle de ParrotSec toujours à portée de main vous sera d'une aide précieuse !

## Conclusion

Dans ce tuto, nous avons vu comment tester des distributions Linux en quelques minutes. 
- DistroSea vous permet de prendre en main rapidement une sélection de distros à l'aide d'un simple navigateur web
- la clé USB "bootable" tourne sur votre matériel aux performances maximum
- la virtualisation est utile pour aller plus loin dans la configuration de vos distros préférées 

Si vous vous dites que Linux est fait pour vous finalement, la suite logique sera de regarder du côté de l'installation "définitive" sur votre disque. 

Ce sera sûrement l'occasion d'un autre tuto !