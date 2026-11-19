# Le Nexus

Le site qui rassemble les APK de mes applis Android, avec un QR code de téléchargement pour chacune.
L'appli Android « Le Nexus » lit exactement la même liste.

Site : https://bibiop123.github.io/APK/

## Ajouter ou renommer une appli

Dans `applis.json`, ajouter (ou modifier) un bloc avec le nom, la description, le dépôt GitHub où ses APK sont publiés en « releases », et l'icône (fichier dans `icones/`) ou un emoji. Le site et l'appli Nexus se mettent à jour tout seuls, sans recompiler.

Attention : `applis.json` doit rester du JSON valide (guillemets doubles, une virgule entre chaque bloc, pas de virgule après le dernier).

## Publier une nouvelle version d'une appli

Dans le dépôt de l'appli : **Releases → Draft a new release**, un nouveau tag (`v0.2.0`…), puis glisser le fichier `.apk`. Le site et l'appli se mettent à jour tout seuls.
