/* =====================================================================
   UREDI OVDJE — SAV SADRŽAJ SAJTA JE NA JEDNOM MJESTU
   ---------------------------------------------------------------------
   • Nova slika rada: ubaci fajl u  images/radovi/  i dodaj red u "works".
   • src    : putanja do slike (npr. 'images/radovi/moj-rad.jpg')
   • title  : naziv rada (koristi se za opis slike / pristupačnost)
   • ratio  : širina / visina slike (npr. 1 za kvadrat, 3/4 za uspravnu)
   • Radovi se automatski slažu u redove po 3, iste visine.
   ===================================================================== */

window.KZ_CONTENT = {

  email: 'zokidiamond61@gmail.com',
  phone: '+387 65 402 036',
  phoneLink: 'tel:+38765402036',

  about: {
    photo: 'images/o-meni/zorica.jpg',
    text: {
      en: "I’m Kolundžija Zorica, a creative mind with a passion for visual storytelling, digital design, and turning ideas into something tangible, distinctive, and meaningful. I’m drawn to the space where imagination meets technology, where a simple thought can evolve into a visual experience that captures attention and leaves an impression.\n\nMy creative journey is driven by curiosity, experimentation, and the constant desire to explore new possibilities. Whether I’m sketching an idea by hand, developing a website, shaping a visual identity, or experimenting with new digital tools, I approach every project as an opportunity to create something that feels authentic and different.\n\nI believe that great design is more than aesthetics. It’s about emotion, purpose, balance, and the small details that transform an ordinary concept into something memorable. I enjoy challenging conventional approaches, combining different creative techniques, and discovering unexpected connections between art, design, and technology.\n\nFor me, creativity has no single direction. It’s an ongoing process of learning, refining, exploring, and pushing boundaries.",
      sr: "Ja sam Kolundžija Zorica, kreativna osoba sa strašću prema vizuelnom pripovijedanju, digitalnom dizajnu i pretvaranju ideja u nešto opipljivo, prepoznatljivo i smisleno. Privlači me prostor u kojem se mašta susreće sa tehnologijom, gdje jednostavna misao može prerasti u vizuelno iskustvo koje privlači pažnju i ostavlja utisak.\n\nMoj kreativni put pokreću radoznalost, eksperimentisanje i stalna želja da istražujem nove mogućnosti. Bilo da skiciram ideju rukom, razvijam web sajt, oblikujem vizuelni identitet ili eksperimentišem sa novim digitalnim alatima, svaki projekat vidim kao priliku da stvorim nešto autentično i drugačije.\n\nVjerujem da je dobar dizajn mnogo više od estetike. Riječ je o emociji, svrsi, balansu i sitnim detaljima koji običan koncept pretvaraju u nešto nezaboravno. Volim da izazivam ustaljene pristupe, kombinujem različite kreativne tehnike i otkrivam neočekivane veze između umjetnosti, dizajna i tehnologije.\n\nZa mene kreativnost nema jedan pravac. To je neprekidan proces učenja, usavršavanja, istraživanja i pomjeranja granica.",
      de: "Ich bin Kolundžija Zorica – ein kreativer Kopf mit einer Leidenschaft für visuelles Storytelling, digitales Design und dafür, Ideen in etwas Greifbares, Unverwechselbares und Bedeutungsvolles zu verwandeln. Mich zieht der Raum an, in dem Fantasie auf Technologie trifft – wo ein einfacher Gedanke zu einem visuellen Erlebnis werden kann, das Aufmerksamkeit weckt und einen bleibenden Eindruck hinterlässt.\n\nMein kreativer Weg wird von Neugier, Experimentierfreude und dem ständigen Wunsch angetrieben, neue Möglichkeiten zu entdecken. Ob ich eine Idee von Hand skizziere, eine Website entwickle, eine visuelle Identität gestalte oder mit neuen digitalen Werkzeugen experimentiere – jedes Projekt ist für mich eine Gelegenheit, etwas Authentisches und Besonderes zu schaffen.\n\nIch glaube, dass gutes Design mehr ist als Ästhetik. Es geht um Emotion, Zweck, Balance und die kleinen Details, die ein gewöhnliches Konzept in etwas Unvergessliches verwandeln. Ich hinterfrage gern konventionelle Ansätze, kombiniere verschiedene kreative Techniken und entdecke unerwartete Verbindungen zwischen Kunst, Design und Technologie.\n\nFür mich hat Kreativität keine einzige Richtung. Sie ist ein fortlaufender Prozess des Lernens, Verfeinerns, Erkundens und des Verschiebens von Grenzen."
    },
    bio: {
      en: "My work brings together traditional creativity and modern digital expression. Drawing allows me to think freely and develop ideas from scratch, while web design gives those ideas structure, interaction, and a life beyond the page.\n\nI’m fascinated by the way visual elements communicate without words — how typography, composition, contrast, colour, and movement can shape the way people experience a design. I pay close attention to these details because I believe they are what give every project its character.\n\nI’m also interested in the evolving relationship between creativity and technology. Exploring new tools and techniques opens doors to possibilities that once seemed out of reach, allowing me to experiment, learn, and expand the way I create.\n\nThis portfolio is more than a collection of finished projects. It’s a reflection of my perspective, my experiments, my ideas, and my evolution as a creative person. Every piece represents a different exploration, a new challenge, or an idea brought one step closer to reality.\n\nI don’t want to simply create something that looks good. I want to create something that feels different, tells a story, and stays with you.",
      sr: "Moj rad spaja tradicionalnu kreativnost i savremeni digitalni izraz. Crtanje mi omogućava da slobodno razmišljam i razvijam ideje od nule, dok im web dizajn daje strukturu, interakciju i život izvan papira.\n\nFascinira me način na koji vizuelni elementi komuniciraju bez riječi — kako tipografija, kompozicija, kontrast, boja i pokret oblikuju način na koji ljudi doživljavaju dizajn. Posvećujem veliku pažnju tim detaljima jer vjerujem da upravo oni daju karakter svakom projektu.\n\nZanima me i odnos između kreativnosti i tehnologije koji se stalno razvija. Istraživanje novih alata i tehnika otvara vrata mogućnostima koje su nekada djelovale nedostižno i omogućava mi da eksperimentišem, učim i širim način na koji stvaram.\n\nOvaj portfolio je više od zbirke završenih projekata. On je odraz mog pogleda, mojih eksperimenata, ideja i razvoja kao kreativne osobe. Svaki rad predstavlja drugačije istraživanje, novi izazov ili ideju koja je korak bliže stvarnosti.\n\nNe želim samo da stvorim nešto što lijepo izgleda. Želim da stvorim nešto što djeluje drugačije, priča priču i ostaje sa tobom.",
      de: "Meine Arbeit verbindet traditionelle Kreativität mit modernem digitalem Ausdruck. Das Zeichnen erlaubt mir, frei zu denken und Ideen von Grund auf zu entwickeln, während Webdesign diesen Ideen Struktur, Interaktion und ein Leben jenseits des Papiers gibt.\n\nMich fasziniert, wie visuelle Elemente ohne Worte kommunizieren – wie Typografie, Komposition, Kontrast, Farbe und Bewegung prägen, wie Menschen ein Design erleben. Ich achte genau auf diese Details, denn ich glaube, dass gerade sie jedem Projekt seinen Charakter verleihen.\n\nMich interessiert auch die sich ständig wandelnde Beziehung zwischen Kreativität und Technologie. Neue Werkzeuge und Techniken zu erkunden, öffnet Türen zu Möglichkeiten, die einst unerreichbar schienen, und erlaubt mir, zu experimentieren, zu lernen und meine Art des Gestaltens zu erweitern.\n\nDieses Portfolio ist mehr als eine Sammlung abgeschlossener Projekte. Es spiegelt meine Perspektive, meine Experimente, meine Ideen und meine Entwicklung als kreativer Mensch wider. Jede Arbeit steht für eine andere Erkundung, eine neue Herausforderung oder eine Idee, die der Wirklichkeit einen Schritt näher gekommen ist.\n\nIch möchte nicht einfach etwas erschaffen, das gut aussieht. Ich möchte etwas erschaffen, das sich anders anfühlt, eine Geschichte erzählt und in Erinnerung bleibt."
    }
  },

  works: [
    { src: 'images/radovi/ronaldo-al-nassr.jpg', title: 'Cristiano Ronaldo — Al Nassr',        ratio: 1 },
    { src: 'images/radovi/next-match.jpg',       title: 'Next Match',                          ratio: 2061 / 2576 },
    { src: 'images/radovi/ramos.jpg',            title: 'Sergio Ramos',                        ratio: 2 / 3 },
    { src: 'images/radovi/haaland.jpg',          title: 'Erling Haaland',                      ratio: 1 },
    { src: 'images/radovi/neymar.jpg',           title: 'Neymar',                              ratio: 3 / 4 },
    { src: 'images/radovi/verstappen.jpg',       title: 'Max Verstappen',                      ratio: 1 },
    { src: 'images/radovi/ronaldo-united.jpg',   title: 'Cristiano Ronaldo — Play with Pride', ratio: 1821 / 2576 },
    { src: 'images/radovi/ronaldo-fire.jpg',     title: 'Cristiano Ronaldo',                   ratio: 1 },
    { src: 'images/radovi/summer-trip.jpg',      title: 'Summer Trip',                         ratio: 3 / 4 },
    { src: 'images/radovi/srbija.jpg',           title: 'Srbija',                              ratio: 1 },
    { src: 'images/radovi/brazil-srbija.jpg',    title: 'Brazil — Srbija',                     ratio: 1 },
    { src: 'images/radovi/vinicius.jpg',         title: 'Vinícius Júnior',                     ratio: 1 }
  ],

  logos: [
    { src: 'images/logotipi/puzzi-rent.png',             title: 'Puzzi Rent',                              bg: '#0F2E22' },
    { src: 'images/logotipi/udruzenje-apiterapeuta.png', title: 'Udruženje apiterapeuta Republike Srpske', bg: '#F4F6F2' }
  ],

  projects: [
    { name: 'Fond za profesionalnu rehabilitaciju i zapošljavanje invalida', url: 'https://www.fondinvrs.org/',  image: 'images/web/fondinvrs.jpg' },
    { name: 'Puzzi Rent',                                                    url: 'https://www.puzzirent.com/', image: 'images/web/puzzirent.jpg' }
  ],

  skills: [
    { name: { sr: 'Programi i alati', en: 'Software & tools', de: 'Software & Tools' },
      items: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Canva', 'WordPress', 'Elementor', 'AI Tools (Claude, ChatGPT)'] },
    { name: { sr: 'Oblasti dizajna', en: 'Design areas', de: 'Designbereiche' },
      items: ['Web Design', 'Landing Page Design', 'Social Media Design', 'Branding & Visual Identity', 'AI Creative Design'] },
    { name: { sr: 'Tehnike', en: 'Techniques', de: 'Techniken' },
      items: ['Visual Storytelling', 'Motion Graphics', 'Video Editing', 'Responsive Design', 'Creative Direction', 'AI-Assisted Content Creation'] }
  ]
};
