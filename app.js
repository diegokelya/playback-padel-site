// Bilingual copy. Strings are static and written here, so innerHTML only ever receives trusted markup.
const copy = {
  es: {
    title: 'PlayBack Padel — Tu mejor punto, siempre listo',
    description: 'PlayBack Padel convierte tu iPhone en una cámara de repeticiones para pádel: guardá la jugada con un gesto, revisala en VAR en cámara lenta y llevá el marcador en vivo.',
    skip: 'Saltar al contenido', switchTo: 'Read in English', switchLabel: 'EN',
    navGestures: 'Gestos', navFeatures: 'Funciones', navDownload: 'Descarga',
    eyebrow: 'REPETICIONES Y MARCADOR EN VIVO',
    heroTitle: 'Tu mejor punto.<br><em>Un gesto</em> para guardarlo.',
    heroText: 'PlayBack Padel transforma un iPhone en una cámara de repeticiones y marcador para tu partido.',
    heroCta: 'Ver cómo funciona',
    courtAria: 'Marcador de ejemplo: Equipo A 40, Equipo B 30, jugada guardada',
    teamA: 'EQUIPO A', teamB: 'EQUIPO B', saved: 'JUGADA GUARDADA',
    intro: 'Sin reloj, accesorios ni suscripciones. Solo el partido, tus mejores jugadas y un marcador que todos pueden ver.',
    gestureEyebrow: 'CONTROLÁ EL PARTIDO', gestureTitle: 'Los gestos se entienden<br>de un vistazo.',
    gestureA: 'Punto Equipo A', gestureAText: 'Señalá a la izquierda con el índice o la paleta.',
    gestureUndo: 'Deshacer', gestureUndoText: 'Apuntá hacia abajo para corregir el último punto.',
    gestureB: 'Punto Equipo B', gestureBText: 'Señalá a la derecha y el marcador se actualiza.',
    gestureSave: 'Guardar jugada', gestureSaveText: 'Mostrá la palma abierta durante un segundo.',
    gestureVar: 'Activar VAR', gestureVarText: 'Dos palmas separadas abren la repetición en cámara lenta.',
    featureEyebrow: 'HECHO PARA LA CANCHA', featureTitle: 'Todo lo que necesitás<br>entre punto y punto.',
    f1: 'Repetición instantánea', f1t: 'Guardá los últimos 15, 30 o 60 segundos sin detener la cámara.',
    f2: 'VAR en cámara lenta', f2t: 'Revisá la jugada a ½× o cuadro por cuadro, con doble toque para ampliar justo donde está la pelota.',
    f3: 'Marcador visible', f3t: 'Nombres, juegos y puntos en pantalla grande, con el color de cada equipo.',
    f4: 'Marcador en dos iPhone', f4t: 'Mostrá el resultado en un segundo iPhone cercano, sin internet, con un código de partido.',
    f5: 'Tus jugadas, en tu iPhone', f5t: 'Sin cuentas, servidores ni publicidad. Los videos no salen del teléfono salvo que los compartas.',
    waitEyebrow: 'PRÓXIMAMENTE', waitTitle: 'PlayBack Padel<br>está entrando a la cancha.',
    waitText: 'Estamos terminando las pruebas en cancha. Muy pronto vas a poder descargarla gratis en la App Store para iPhone.',
    waitBadge: 'Próximamente en la App Store',
    support: 'Soporte', privacy: 'Privacidad',
    supportUrl: 'https://diegokelya.github.io/padel-replay-support/',
    privacyUrl: 'https://diegokelya.github.io/padel-replay-support/privacy.html'
  },
  en: {
    title: 'PlayBack Padel — Your best point, always ready',
    description: 'PlayBack Padel turns your iPhone into a padel replay camera: save the play with a gesture, review it in slow-motion VAR and keep a live score.',
    skip: 'Skip to content', switchTo: 'Leer en español', switchLabel: 'ES',
    navGestures: 'Gestures', navFeatures: 'Features', navDownload: 'Download',
    eyebrow: 'REPLAY & LIVE SCORING',
    heroTitle: 'Your best point.<br><em>One gesture</em> saves it.',
    heroText: 'PlayBack Padel turns an iPhone into a replay camera and live scoreboard for your match.',
    heroCta: 'See how it works',
    courtAria: 'Sample scoreboard: Team A 40, Team B 30, play saved',
    teamA: 'TEAM A', teamB: 'TEAM B', saved: 'PLAY SAVED',
    intro: 'No watch, accessories or subscriptions. Just the match, your best plays and a score everyone can see.',
    gestureEyebrow: 'CONTROL THE MATCH', gestureTitle: 'Gestures make sense<br>at a glance.',
    gestureA: 'Team A point', gestureAText: 'Point left with your index finger or racket.',
    gestureUndo: 'Undo', gestureUndoText: 'Point down to correct the latest point.',
    gestureB: 'Team B point', gestureBText: 'Point right and the score updates.',
    gestureSave: 'Save a play', gestureSaveText: 'Show an open palm for one second.',
    gestureVar: 'Activate VAR', gestureVarText: 'Two open palms open the replay in slow motion.',
    featureEyebrow: 'BUILT FOR THE COURT', featureTitle: 'Everything you need<br>between points.',
    f1: 'Instant replay', f1t: 'Save the last 15, 30 or 60 seconds without stopping the camera.',
    f2: 'Slow-motion VAR', f2t: 'Review the play at ½× or frame by frame, and double-tap to zoom right where the ball is.',
    f3: 'Visible scoring', f3t: 'Names, games and points on a big screen, in each team’s color.',
    f4: 'Score on two iPhones', f4t: 'Show the score on a second nearby iPhone, no internet needed, paired with a match code.',
    f5: 'Your plays stay on your iPhone', f5t: 'No accounts, servers or ads. Videos never leave the phone unless you share them.',
    waitEyebrow: 'COMING SOON', waitTitle: 'PlayBack Padel<br>is stepping onto the court.',
    waitText: 'We are finishing on-court testing. Very soon you will be able to download it for free on the App Store for iPhone.',
    waitBadge: 'Coming soon to the App Store',
    support: 'Support', privacy: 'Privacy',
    supportUrl: 'https://diegokelya.github.io/padel-replay-support/index.en.html',
    privacyUrl: 'https://diegokelya.github.io/padel-replay-support/privacy.en.html'
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
