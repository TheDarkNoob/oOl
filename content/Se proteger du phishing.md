---
draft: false
dateCreated: 2024-02-01
title: Se protéger du phishing
description: Ne mordez pas à l'hameçon !
type:
  - Article
tags:
  - apprentissage
  - informatique
  - cognition
  - article
aliases:
---
![[Jaws.png]]
> 

## C'est quoi le phishing ?

Le mot "fishing" est un verbe anglais qui veut dire "pêcher", à ne pas confondre avec le verbe "pécher" (avec un accent circonflexe donc, et non aigu, sur le "e"), qui lui fait référence au péché, dérivé du latin *peccatum* du verbe *peccare*, signifiant enfreindre délibérément la loi divine. La pomme, le serpent, on finit à poil dans les jardins d'Eden après une raclette bien arrosée,  on sait comment ça se termine hein, la souffrance, la mortalité, la colère de Dieu tout ça. 

Non, là on parle bien du fait de pratiquer la pêche pour attraper des poissons. Donc pour démarrer, il vous faudra un point d'eau, une bonne paire de bottes, quelques hameçons, une canne à pêche bien-sûr, et beaucoup, beaucoup de patience. 

Quoi, comment ça c'est pas le sujet ? C'est nous les poissons en fait ? Ok, je recommence. Le mot "phishing" est un mot anglais lui même dérivé du verbe "fishing" avec un "f", et désignant une technique d'[[Social engineering|Ingénierie sociale]] très proche de la pêche à la ligne, mais ou les poissons sont des humains. 

Mais pourquoi donc ça s'écrit "phishing" et pas "fishing" alors ? On s'en fout dites vous ? Allez juste une toute petite explication, après promis je rentre dans le sujet 🤓 

### Un truc de hackers

Dans les années 60 - 70 se développe une nouvelle culture issue de passionnés de programmation et de radiocommunications ; celle des [[Hacker culture|hackers]]. 

Loin du cliché actuel qui représente le hacker standard comme un pirate informatique sans morale, affublé d'un masque de Guy Fawkes - devenu l'emblème des célèbres Anonymous, la culture hacker se défini plutôt comme un mouvement ayant pour objet de bricoler, bidouiller les systèmes pour les améliorer et les rendre plus efficaces. 

![[AnonymousHackerCliche.png]]
> *Hin hin hin (rire machiavélique), quel honnête citoyen vais-je dépouiller de ses économies ?* Vision du hacker par le journaliste moyen. 

Ce qui n'empêche bien sûr pas les premiers petits malins de commencer à tirer parti de la vulnérabilité des systèmes de téléphonie de l'époque pour s'y introduire illégalement, à l'origine pour contourner le coût des communication et passer des appels gratuits. 

De ces premiers "*exploits*" est né le terme "Phreak", une contraction de "Phone", téléphone, et "Freak", encore un mot d'argot qui désigne une personne marginale, appartenant à la contre-culture. 

Mais revenons-en à nos poissons. 

Le mot Phishing est tout simplement une contraction du mot "Phreaking", pirater des systèmes téléphoniques, et du mot "Fishing", pêcher le poisson. 

Sinon nos amis québécois - et l'état français - emploient plutôt le terme "hameçonnage". C'est pareil que phishing mais ça fait moins pro quand on explique. 

### Piratage psychologique

![[BTTFdocPsychic.png]]
> Ce que j'imagine à chaque fois que je lis "*... selon la science*" à la suite d'une affirmation

Le phishing fait partie des techniques de type "[[Social engineering|Ingénierie sociale]]". Elles ont en commun leur approche du piratage, basée sur les [[Sciences cognitives|sciences cognitives]] plutôt que sur des techniques informatiques sophistiquées.

L'idée est de **cibler l'utilisateur plutôt que le système**, et de le manipuler afin d'obtenir des informations sensibles. 

En pratique, les techniques d'ingénierie sociale vont exploiter nos [[Biais cognitifs|biais cognitifs]] en cherchant à provoquer chez leurs victimes :
- la peur (menaces)
- l'avidité (appât du gain)
- l'empathie (appels à l'aide)
- le sentiment d'urgence et / ou la curiosité ([[FOMO|peur de rater quelque chose]])

### Les différents types de phishing

Ces techniques sont tellement répandues qu'il en existe différentes catégories, avec chacune ses particularités. 

En effet, si le phishing traditionnel prends souvent la forme d'un email un peu louche renvoyant vers une page web permettant à l'attaquant de récupérer toutes les informations que vous voudrez bien lui écrire, d'autres méthodes plus pointues sont apparues avec le temps. 

#### Le Spear phishing ou Harponnage

Oui, là on entre directement dans le champ lexical de la chasse à la baleine 🐋

![[PayakanAttack.png]]
> *Surprise, motherfuckers !*

Ici on va tenter une approche plus "qualitative" en ciblant des utilisateurs spécifiques : dirigeants, services financiers et comptables, services informatiques, ressources humaines ...

Sur ce type d'attaque, le *phishing* deviens plus personnalisé et plus soigné. L'objectif n'est plus de ratisser large mais bien d'aller au bout de la démarche. Il arrive souvent que les utilisateurs ciblés aient déjà été piratés, ou que des informations leur appartenant soient apparues dans des fuites de données. 

On se donne plus de mal donc, allant jusqu'à combiner plusieurs méthodes de contact : appels téléphoniques, SMS, emails. \
Une technique évoluée de *Spear phishing* est la fameuse "Arnaque au président", ou l'attaquant se fait passer pour un dirigeant ou une autorité administrative (fisc, gendarmerie) pour obtenir des infos financières, voire directement un virement sur un compte *offshore*. 

![[DinerDeCons.png]]
> "*Bonsoèr monsieur Leblanc, George Van Brugel à l'appareil*"

#### Le Clone Phishing

Cette méthode consiste à copier un email ou un site légitime, avant de le piéger et de l'envoyer à ses cibles. Ici l'objectif est de jouer sur la notion de familiarité : le contenu ne paraitra pas suspect parce qu'il a un aire de déjà-vu. 

La plupart des tentatives de *phishing* actuelles utilisent cette méthode. 

#### SMishing, Qishing, Vishing, à tes souhaits !

Vous l'aurez compris, en matière d'ingénierie sociale, on aime inventer des mots.

Le SMishing est une contraction de SMS et de *Phishing*. Vous savez, les messages du genre "*cliquez ici pour réclamer votre colis amazon*" ...

Pour *Vishing*, c'est *Voice* et *Phishing*. En général des répondeurs qui appelent prétextant une excuse bidon pour vous inciter à taper ou réciter des identifiants à l'aide du téléphone. 

Le *Quishing* est le plus récent : un mélange de QR code et *Phishing*. Bah oui, à force de nous mettre des QR codes partout, ça devait arriver ! En plus, on est moins attentifs aux liens qu'on suis depuis un smartphone, alors pourquoi s'en priver ?

## Pourquoi c'est dangereux ?

Ok je vous voit. Oui, vous ! Je sait ce que vous vous dites ! Qu'il faut être complètement débile pour se faire avoir par certaines tentatives de phishing. Et en effet, certains mails sont tellement improbables et bourrés de fautes d'orthographe que ça en deviens risible. 

![[NetflixPhishing.png]]
> Ok là si tu cliques c'est bien fait pour ta gueule 🙄

Mais mettons nous un peu à la place du pêcheur. Il envoie probablement des tonnes de mails de ce type. Sur le lot, une très infime proportion de destinataires va répondre. Mais ces victimes ont une valeur inestimable pour notre pêcheur : ce sont les poissons qui sont prêts à mordre à n'importe quel hameçon. Même pas besoin d'appâts, ils mordent dans tout !

Et puis tous les mails de phishing ne sont pas si facilement identifiable. Le fait est que les tests réalisés à grande échelle sur des utilisateurs d'entreprise - pourtant sensibilisés - révèle que 30% d'entre eux se font avoir. [^1]

Oui, une personne sur trois !

Car le fait est que nous sommes humains, donc faillibles.  Nous parvenons peut-être à déjouer la grande majorité des *phishing*, mais nous connaissons tous des baisses de vigilance, et la diversité et la complexité croissante des attaques pourrait bien finir par nous toucher un jour ou l'autre. 

Pour éviter ça, apprendre à reconnaitre les indices indiquant un probable phishing est une première mesure essentielle. 
## Comment le reconnaître ?

Nous l'avons vu, tous les hameçons ne sont pas forcément grossiers et identifiables au premier coup d'oeil. Le pêcheur veut son poisson, et pour cela il change de tactique régulièrement pour mieux tromper ses futures prises. 

Heureusement, il existe des signes qui ne trompent pas pour détecter un piège à coup sûr. Avant de voir lesquels, voyons comment fonctionne un phishing qui aboutit. 

### Méthodologie de l'attaque

Nous écarterons volontairement certaines méthodes de piratage plus avancées à base d'exploitation de *failles* *XSS*, de *keyloggers* et autres *backdoors* déjà présents sur l'appareil ciblé. Ceci par souci de clarté, et parce qu'il existe malheureusement des tonnes de façons de pirater un système pour une personne motivée, patiente et compétente, et qu'il serait beaucoup trop long de détailler tout ça ici 😊

Restons sur du *phishing* "classique", le cas le plus usuel. L'objectif pour le pirate est de récupérer des informations sensibles vous concernant, et il ne peut pas les récupérer lui même directement ; il a besoin que vous les lui donniez. 

![[PhishingEtapes.png]]
> Le déroulement classique d'une attaque de *phishing*

Une attaque se déroule donc majoritairement comme suis : 
1. le pirate prépare un site web bidon, souvent une copie d'un site familier (Paypal, Netflix, votre banque, Google, Microsoft, etc), lié à un serveur sur lequel il a la main ;
2. il contacte alors sa victime pour l'inciter à se connecter sous un prétexte fallacieux (problème avec son compte, mise à jour de sécurité, information requise, etc) ;
3. la victime clique sur le lien, entre ses informations (jusqu'ici le piège n'est pas refermé) ... 
4. ... et envoie les infos, à l'aide d'un bouton de validation de formulaire en général. Là il est trop tard, les infos sont parties sur le serveur du pirate ;
5. il ne reste qu'à celui-ci plus qu'à récupérer les données sur son serveur. 


Il est également possible que le pirate tente une méthode plus "rudimentaire" dirons nous : il vous demande simplement de lui répondre avec les infos demandées.

![[BasicPhishing.png]]
> - *Hey on a un problème avec ton compte en banque, tu me donne tes IDs ?* 
> - *Ok !*
> - *Merci gros pigeon !*

NE FAITES PAS CA. Soyez pas cons, merde !\
Mais sérieusement, ça n'est pas très répandu de nos jours, car même les pirates les moins doués n'ont pas suffisamment la confiance pour le tenter 😄

### Les "red flags"

Avant d'arriver à l'étape de cliquer sur ce bouton, certaines choses doivent vous alerter. La première chose à faire est de temporiser : si quelque chose vous parait suspect, ça vaut le coup de chercher à savoir pourquoi. 

> [!Quote] Comme disait l'autre :
> *Si c'est flou, c'est qu'il y a un loup. *

> [!warning] Des infos sensibles
> Dès qu'on vous parle d'identifiants, mots de passe, numéros de sécurité sociale ou de compte bancaire, on est déjà dans une situation demandant de redoubler de vigilance. 

> [!warning] Le fond et la forme
> On a coutume de dire que le fond importe plus que la forme. Quand on s'appelle Microsoft ou Banque ING, ce n'est pas forcément vrai. Méfiez vous des logos tout pourris en basse définition, des fautes d'orthographes ou de tout ce qui ne paraitrait pas professionnel dans un mail ou message reçu !
> > [!question] Le savais-tu ?
>  Fun fact : 100% des mails authentiques de Microsoft ne contiennent pas de fautes d'orthographe à "Microsoft" 😂

> [!warning] La notion d'urgence
> Un message de phishing essaierai la plupart du temps de créer une situation d'urgence. Ca a l'avantage de mettre la pression à la victime, qui prendra alors moins le temps de réfléchir. 

> [!warning] Adresses mail et URL
> Si tout le monde lisait systématiquement les adresses mail exactes des expéditeurs (et pas juste les alias), ainsi que les URL des sites sur lesquels ils naviguent, le phishing disparaitrait ! Nous allons revenir sur ce point très rapidement 😉
> > [!Example] Quelques exemples
> > Adresse mail expéditeur :
> ![[FakeSender.png]]
> URL du site en lien :
> ![[FakeURL.png]]

Allez, forts de ces connaissances, on termine avec les bonnes pratiques !
## Comment s'en prémunir ?

Si vous avez compris ce que vous avez vu jusque là, vous aurez déjà une bonne idée de ce que vous pouvez faire pour ne pas devenir une victime du *phishing*. 

Bonne nouvelle : il existe aussi des moyens techniques permettant de nous en protéger. Mais le premier acteur qui doit lutter contre une technique d'ingénierie sociale est bien l'utilisateur. 
### Les parades humaines

Vous venez de déployer la première : vous informer. Vous en savez suffisamment sur le *phishing* désormais pour en comprendre les enjeux et ainsi être attentifs. Bravo !

Tous les points de vigilance évoqués plus haut vous permettrons de reconnaitre un *phishing*. Et il existe même un moyen très simple qui vous permettra d'éviter 100% des attaques : passer en "mode manuel". 

#### Le mode manuel
Éteignez votre ordinateur. Votre téléphone. Votre tablette, votre montre connectée, votre *smart TV*. Prenez un cahier et un stylo. **Respirez à fond**. Voilà, vous ne serez plus jamais victime d'un pirate informatique. 

![[CoachDeCoach.png]]
> De rien. Ca fera 1000 euros. 

Je plaisante hein, j'ai mieux comme méthode. \
Vous vous rappelez du dernier point de vigilance sur les adresses mail et les URL ? 

> [!success] Le mode manuel
> **Le mode manuel est très simple : ==ne pas cliquer sur les liens==.** 

Je ne vous demande pas de renoncer à une invention qui à elle seule définit la puissance du web, mais simplement d'appliquer cette hygiène informatique dès que vos infos confidentielles sont concernées. 

Votre banque a un besoin URGENT de réponse de votre part ? Ok, fermez votre boite mail, et connectez vous au site de la banque comme vous le faites d'habitude. Ou appelez directement votre contact à la banque. 

Votre colis amazon est bloqué pour une raison qui nécessite votre retour IMMÉDIAT ? Connectez-vous directement au site, mais ne répondez pas depuis le SMS reçu sur votre téléphone. 

### Les parades techniques

Terminons cet article sur le *phishing* en parlant un peu des moyens techniques qui existent pour s'en protéger. 

#### La MFA / authentification multi facteurs

Les mécanismes de double authentification ou de multiples authentification se démocratisent un peu partout, et ce n'est pas anodin. Vous savez, ces fameux codes et validations à faire sur son téléphone par exemple pour pouvoir vous connecter à un compte en ligne. 

![[2FA.png]]
>

Avec la MFA, récupérer les infos de connexions ne suffit plus. Si le site détecte que vous vous connectez depuis un appareil, un navigateur, ou une localisation inhabituelle, il faudra en plus valider ça depuis un appareil "de confiance". 

Tout de suite, ça rend le piratage nettement plus compliqué !

#### Les filtres : web et mail

Ces deux mécanismes sont presque toujours déployés sur les réseaux d'entreprise, et de plus en plus souvent également sur les réseaux privés. 

Le **filtrage web** se fait sur le *firewall* (le pare-feu) qui est soit intégré au routeur (la "box"), soit dans le *datacenter* du fournisseur d'accès ([[IT acronyms & abbreviations list#^f951e3|ISP]]). 

Le principe est simple : à chaque fois que vous souhaitez accéder à un site en particulier, le filtre web consulte une base de données régulièrement mise à jour, qui fonctionne selon le principe de *"blacklisting/whitelisting"* ; des sites sont autorisés et d'autres interdits. 

Si le lien sur lequel vous cliquez dans un mail de phishing redirige vers un site qui figure dans la "liste noire", le filtrage web le bloquera. 
![[WebFilter.png]]
> Vous voulez tester le filtrage web de votre entreprise ? Essayez les sites de jeu, de porno ou de recrutement de l'état islamique ! 
> Comment ça vous avez été licencié après avoir suivi ce conseil douteux ? 😅

Quand au **filtrage mail**, il fonctionne dans l'autre sens, à savoir de l'extérieur du réseau vers celui-ci. Il se fait au niveau du serveur mail, qui peut être en [[IT acronyms & abbreviations list#^b437f3|SaaS]] ou dans votre entreprise. 

Grossièrement, l'algorithme va faire un premier tri en supprimant les messages qui sont identifiés comme dangereux, puis un second pour savoir s'il vous envoie le message tel quel ou s'il y apporte la mention "SPAM" pour que votre logiciel de messagerie le place dans le dossier approprié. 
![[MailFilter.png]]
> "OBJET: Rapport à rendre avant ce soir | DE: votre boss" => *Inbox*
> "OBJET: Des filles de ta région veulent te rencontrer ❤️🍆 | DE: bôgossDu75" => *SPAM* (on sait jamais)
> "OBJET: URGENT!!! Nous avons besoin de vos infos bancaires !!! Répondez de suite !!! | DE: votre banque (apparemment)" => *Trash*

#### Les bannières et pages personnalisées

Beaucoup d'entreprises mettent leur logo sur les pages de login qui apparaissent sur les navigateurs web. Attention, ce n'est pas infaillible car facilement copiable !
![[CustomLoginMS.png]]
> *(e-corp est spécialisée en vente de semences agricoles, en sécurité privée en Afrique de l'ouest, et en bio-armement. Si vous êtes intéressés je connais la DRH 👍)*

Enfin, il est aussi possible que votre client de messagerie ajoute des infos en haut du message pour vous encourager à être attentifs. Ici, le bandeau du bas vous indique que l'expéditeur ne fait pas partie de vos contacts réguliers. 

![[BannersMail.png]]
> Bon, si la quantité de *headers* au dessus du message le font ressembler à une guirlande de Noël, il y a peu de chances que vous souhaitiez vraiment lire son contenu. 

## Conclusion

Voilà pour cet article sur le *phishing* ! J'espère que vous avez appris un ou deux trucs. 

Si vous ne devez retenir que l'essentiel : 
- le *phishing* est une technique d'ingénierie sociale reposant essentiellement sur la faillibilité humaine
- il peut prendre des formes diverses et variées
- il est l'une des menaces informatiques qui ont le plus d'impact 
- il est facile à reconnaitre quand on fait attention à certains signes
	- demande d'infos sensibles
	- adresses mail et URL douteuses
	- notion d'urgence
	- présentation douteuse
- il est évitable, notamment en ne cliquant pas sur les liens dans les SMS et mails et en préférant aller visiter soi-même le site en question si besoin
- certaines méthodes techniques sont efficaces contre le **phishing** (notamment le MFA), sans toutefois remplacer votre vigilance

Sur-ce, n'oubliez pas de rester attentifs !


---
[^1] : Source : [2020 State of the Phish: An in-depth look at user awareness, vulnerability and resilience](https://www.proofpoint.com/sites/default/files/gtd-pfpt-us-tr-state-of-the-phish-2020.pdf)