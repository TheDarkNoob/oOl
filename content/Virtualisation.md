---
draft: false
dateCreated: 2023-11-21
title: Virtualisation
description: Procédé consistant à créer une représentation virtuelle d'un matériel informatique, sous forme de fichiers constituant des machines virtuelles.
type:
  - PKM
tags:
  - systèmes
aliases:
  - Hardware virtualisation
---
![[VirtualisationIcon.png]]

On peut virtualiser des [[Operating system|systèmes d'exploitation]], applications ou réseaux informatiques. D'une manière générale, ce procédé permet de décorréller le matériel physique de la partie applicative. 

On utilise souvent le terme par extension pour désigner uniquement la virtualisation de systèmes d'exploitation. 

## Intérêt de la virtualisation

Elle permet une meilleure utilisation des ressources en permettant à plusieurs machines virtuelles de fonctionner sur une seule machine physique. En résultent : 
- une meilleure efficience énergétique
- une meilleure efficacité d'un point de vue économique (les ressources sont utilisées de manière optimale)

Des gains en sécurité :
- l'isolation des machines permet de mieux sécuriser le matériel
- les sauvegardes sont aisées (réplication, *snapshots*)

La flexibilité est accrue : 
- possibilité de migrer des machines d'un matériel à un autre
- possibilité de déployer rapidement des machines


## Outils de virtualisation

Les outils les plus utilisés sont : 
- Hyper-V de [[Windows Origins|Microsoft]] - sur les machines Windows
- VirtualBox de Oracle - open source gratuit
- Hypervisor de Citrix - dans les grandes structures
- Virtualization de Red Hat - dans les grandes structures en open source
- ESX de VMWare - largement utilisé dans toutes tailles de structures
- Desktop de Parallels - utilisé sur les systèmes [[L'écosystème Apple|MacOS]]

> [!Notes] Liens
> - [Hardware virtualization](https://en.wikipedia.org/wiki/Hardware_virtualization?useskin=vector)
