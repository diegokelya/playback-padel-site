// Bilingual copy. Strings are static and written here, so innerHTML only ever receives trusted markup.
const copy = {
  es: {
    title: 'PlayBack Padel — Tu mejor punto, siempre listo',
    description: 'PlayBack Padel convierte tu iPhone o iPad en una cámara de repeticiones para pádel: guardá la jugada con un gesto, revisala en VAR en cámara lenta y llevá el marcador del partido.',
    skip: 'Saltar al contenido', switchTo: 'Read in English', switchLabel: 'EN',
    navGestures: 'Gestos', navFeatures: 'Funciones', navDownload: 'Descarga',
    eyebrow: 'REPETICIONES Y MARCADOR EN VIVO',
    heroTitle: 'Tu mejor punto.<br><em>Un gesto</em> para guardarlo.',
    heroText: 'PlayBack Padel transforma un iPhone en una cámara de repeticiones y marcador para tu partido.',
    heroCta: 'Ver cómo funciona',
    courtAria: 'Marcador de ejemplo: Equipo A 40, Equipo B 30, jugada guardada',
    teamA: 'EQUIPO A', teamB: 'EQUIPO B', saved: 'JUGADA GUARDADA',
    intro: 'Sin accesorios ni suscripciones. Solo el partido, tus mejores jugadas y un marcador que todos pueden ver.',
    gestureEyebrow: 'CONTROLÁ EL PARTIDO', gestureTitle: 'Los gestos se entienden<br>de un vistazo.',
    gestureA: 'Punto Equipo A', gestureAText: 'Señalá a la izquierda un segundo y confirmá con la palma.',
    gestureUndo: 'Deshacer', gestureUndoText: 'Apuntá hacia abajo y confirmá con la palma para corregir el último punto.',
    gestureB: 'Punto Equipo B', gestureBText: 'Señalá a la derecha un segundo y confirmá con la palma.',
    gestureSave: 'Guardar jugada', gestureSaveText: 'Mostrá la palma abierta durante un segundo.',
    gestureVar: 'Activar VAR', gestureVarText: 'Dos palmas separadas, un segundo, abren la repetición en cámara lenta.',
    featureEyebrow: 'HECHO PARA LA CANCHA', featureTitle: 'Todo lo que necesitás<br>entre punto y punto.',
    f1: 'Repetición instantánea', f1t: 'Guardá los últimos 15, 30 o 60 segundos sin detener la cámara.',
    f2: 'VAR en cámara lenta', f2t: 'Revisá la jugada a ½×, ¼× o cuadro por cuadro. Doble toque para ampliar la pelota, o dejá que el zoom la siga (beta).',
    f3: 'VAR en tus jugadas guardadas', f3t: 'Cada VAR queda guardado como jugada, con su etiqueta. Abrilo otra vez sobre cualquier jugada, empezando un momento antes de lo que estabas viendo.',
    f4: 'Marcador de partido completo', f4t: 'Sets, juegos, tie-break a 6–6 y punto de oro opcional. Sumá o deshacé con gestos o con un botón.',
    f5: 'Historial de partidos', f5t: 'Cada partido queda guardado con el resultado por sets, la fecha y sus jugadas. Mirá cómo te fue y borrá lo que quieras.',
    f6: 'Marcador en dos dispositivos', f6t: 'Mostrá el resultado en otro iPhone o iPad cercano, sin internet, con un código de partido.',
    f7: 'Para iPhone y iPad', f7t: 'La app también funciona en iPad, en pantalla completa y en horizontal.',
    f9: 'Apple Watch', f9t: 'Sumá puntos, deshacé, guardá la jugada y abrí el VAR desde la muñeca, con el puntaje en el reloj.',
    f10: 'Quién saca', f10t: 'El marcador marca quién saca en cada punto: cambia solo en cada juego y respeta el tie-break.',
    f8: 'Tus jugadas, en tu dispositivo', f8t: 'Sin cuentas, servidores ni publicidad. Los videos no salen del dispositivo salvo que los compartas.',
    waitEyebrow: 'PRÓXIMAMENTE', waitTitle: 'PlayBack Padel<br>está entrando a la cancha.',
    waitText: 'Estamos terminando las pruebas en cancha. Muy pronto vas a poder descargarla gratis en la App Store para iPhone y iPad.',
    waitBadge: 'Próximamente en la App Store',
    support: 'Soporte', privacy: 'Privacidad',
    supportUrl: 'support/',
    privacyUrl: 'privacy/'
  },
  en: {
    title: 'PlayBack Padel — Your best point, always ready',
    description: 'PlayBack Padel turns your iPhone or iPad into a padel replay camera: save the play with a gesture, review it in slow-motion VAR and keep your match score.',
    skip: 'Skip to content', switchTo: 'Leer en español', switchLabel: 'ES',
    navGestures: 'Gestures', navFeatures: 'Features', navDownload: 'Download',
    eyebrow: 'REPLAY & LIVE SCORING',
    heroTitle: 'Your best point.<br><em>One gesture</em> saves it.',
    heroText: 'PlayBack Padel turns an iPhone into a replay camera and live scoreboard for your match.',
    heroCta: 'See how it works',
    courtAria: 'Sample scoreboard: Team A 40, Team B 30, play saved',
    teamA: 'TEAM A', teamB: 'TEAM B', saved: 'PLAY SAVED',
    intro: 'No accessories or subscriptions. Just the match, your best plays and a score everyone can see.',
    gestureEyebrow: 'CONTROL THE MATCH', gestureTitle: 'Gestures make sense<br>at a glance.',
    gestureA: 'Team A point', gestureAText: 'Point left for one second, then confirm with your palm.',
    gestureUndo: 'Undo', gestureUndoText: 'Point down and confirm with your palm to correct the latest point.',
    gestureB: 'Team B point', gestureBText: 'Point right for one second, then confirm with your palm.',
    gestureSave: 'Save a play', gestureSaveText: 'Show an open palm for one second.',
    gestureVar: 'Activate VAR', gestureVarText: 'Two separated palms, held one second, open the replay in slow motion.',
    featureEyebrow: 'BUILT FOR THE COURT', featureTitle: 'Everything you need<br>between points.',
    f1: 'Instant replay', f1t: 'Save the last 15, 30 or 60 seconds without stopping the camera.',
    f2: 'Slow-motion VAR', f2t: 'Review the play at ½×, ¼× or frame by frame. Double-tap to zoom on the ball, or let the zoom follow it (beta).',
    f3: 'VAR on your saved plays', f3t: 'Every VAR is saved as a play, with its own tag. Open it again on any play, starting a moment before what you were watching.',
    f4: 'Full match scoring', f4t: 'Sets, games, a tie-break at 6–6 and optional golden point. Add or undo with gestures or a button.',
    f5: 'Match history', f5t: 'Every match is saved with its score by set, the date and its plays. See how you did and delete what you want.',
    f6: 'Score on two devices', f6t: 'Show the score on another nearby iPhone or iPad, no internet needed, paired with a match code.',
    f7: 'For iPhone and iPad', f7t: 'The app also works on iPad, full screen and in landscape.',
    f9: 'Apple Watch', f9t: 'Add points, undo, save the play and open VAR from your wrist, with the score on the watch.',
    f10: 'Who serves', f10t: 'The scoreboard shows who is serving on every point: it changes each game by itself and follows the tie-break.',
    f8: 'Your plays stay on your device', f8t: 'No accounts, servers or ads. Videos never leave the device unless you share them.',
    waitEyebrow: 'COMING SOON', waitTitle: 'PlayBack Padel<br>is stepping onto the court.',
    waitText: 'We are finishing on-court testing. Very soon you will be able to download it for free on the App Store for iPhone and iPad.',
    waitBadge: 'Coming soon to the App Store',
    support: 'Support', privacy: 'Privacy',
    supportUrl: 'support/en.html',
    privacyUrl: 'privacy/en.html'
  }
};

const store = {
  get() { try { return localStorage.getItem('lang'); } catch { return null; } },
  set(value) { try { localStorage.setItem('lang', value); } catch { /* private mode: not remembered */ } }
};

// ?lang=en > saved choice > browser language > Spanish.
function initialLanguage() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param in copy) return param;
  const saved = store.get();
  if (saved in copy) return saved;
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : (navigator.language ? 'en' : 'es');
}

let lang = initialLanguage();

function render() {
  const text = copy[lang];
  document.documentElement.lang = lang;
  document.title = text.title;
  document.querySelector('meta[name="description"]').setAttribute('content', text.description);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = text[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', text[el.dataset.i18nAria]));
  document.getElementById('support-link').href = text.supportUrl;
  document.getElementById('privacy-link').href = text.privacyUrl;
  const button = document.getElementById('language');
  button.textContent = text.switchLabel;
  button.setAttribute('aria-label', text.switchTo);
  button.setAttribute('lang', lang === 'es' ? 'en' : 'es');
}

document.getElementById('language').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  store.set(lang);
  render();
});

render();
