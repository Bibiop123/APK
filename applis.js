// La liste de mes applis.
// Pour ajouter une appli : copier un bloc, changer le nom, la description et le dépôt GitHub.
// "depot" : le dépôt où sont publiées les releases (laisser null si pas encore d'APK).
window.APPLIS = [
  {
    nom: 'La Lanterne',
    description: 'Jeu narratif à lire avant de dormir',
    depot: 'Bibiop123/La-lanterne',
    icone: 'icones/la-lanterne.png',
    emoji: '🕯️',
  },
  { nom: 'Boussole', description: 'Se retrouver entre amis en soirée et en festival', depot: 'Bibiop123/Boussole', emoji: '🧭' },
  { nom: 'Ardoise', description: 'Partager les dépenses entre amis', depot: 'Bibiop123/Ardoise', icone: 'icones/ardoise.png', emoji: '🧾' },
  { nom: 'Mots fléchés', description: "Petit jeu d'appoint", depot: null, emoji: '✏️' },
  { nom: 'Calendrier visuel', description: 'Rdv, anniversaires, soirées, concerts', depot: 'Bibiop123/Calendrier', emoji: '📅' },
];
