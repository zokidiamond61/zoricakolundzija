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
      en: "I’m Kolundžija Zorica, a creative mind driven by ideas, visual storytelling, and digital design. I combine art and technology to create distinctive work that challenges the ordinary and gives ideas a life of their own.",
      sr: "Ja sam Kolundžija Zorica, kreativna osoba koju pokreću ideje, vizuelno pripovijedanje i digitalni dizajn. Spajam umjetnost i tehnologiju kako bih stvarala prepoznatljive radove koji izazivaju uobičajeno i daju idejama sopstveni život.",
      de: "Ich bin Kolundžija Zorica – ein kreativer Kopf, angetrieben von Ideen, visuellem Storytelling und digitalem Design. Ich verbinde Kunst und Technologie, um unverwechselbare Arbeiten zu schaffen, die das Gewöhnliche herausfordern und Ideen ein eigenes Leben geben."
    },
    bio: {
      en: "I create with purpose, experiment without limits, and turn ideas into visuals that speak for themselves. From the first sketch to the final pixel, every detail is a part of my creative identity.",
      sr: "Stvaram sa svrhom, eksperimentišem bez granica i pretvaram ideje u vizuale koji govore sami za sebe. Od prve skice do posljednjeg piksela, svaki detalj je dio mog kreativnog identiteta.",
      de: "Ich gestalte mit Absicht, experimentiere ohne Grenzen und verwandle Ideen in Bilder, die für sich selbst sprechen. Von der ersten Skizze bis zum letzten Pixel ist jedes Detail Teil meiner kreativen Identität."
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
