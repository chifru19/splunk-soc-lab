import React, { useState } from 'react';
import { sendLogToSplunk } from './splunkService';

/**
 * App.js - German-Grassland e.V. Berlin
 * Full Production Version
 */

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', membershipType: 'standard' });
  const [lang, setLang] = useState('de');

  const t = {
    de: {
      navHome: "Home", navExco: "Exco", navMeetings: "Treffen",
      navEvents: "Veranstaltungen", navKids: "Kinderbereich",
      navGallery: "Galerie", navSupport: "Unterstützung",
      navJoin: "Mitgliedschaft", heroTitle: "German-Grassland e.V. Berlin",
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      announcementTitle: "Wichtige Ankündigung",
      announcementText: "Hier finden Sie aktuelle Neuigkeiten und wichtige Mitteilungen des Vereins.",
      excoTitle: "Vorstandsmitglieder & Ngoteh",
      meetingsTitle: "Monatliche Treffen",
      meetingsDesc: "Jeden zweiten Samstag im Monat – Kommen Sie vorbei für den gemeinschaftlichen Dialog.",
      eventsTitle: "Kommende Veranstaltungen",
      eventsDesc: "Besuchen Sie unsere nächste Zusammenkunft.",
      kidsTitle: "Kinder & Jugend",
      kidsDesc: "Bewahrung unseres Erbes für die nächste Generation.",
      galleryTitle: "General Event Gallery & Ngoteh",
      supportTitle: "Unterstützen Sie unsere Mission",
      donateText: "ZUM SPENDEN SCANNEN",
      registerTitle: "Jetzt Mitglied werden",
      registerBtn: "Antrag Absenden",
      namePlaceholder: "Vollständiger Name",
      emailPlaceholder: "E-Mail-Adresse",
      admin: "Website Admin"
    },
    en: {
      navHome: "Home", navExco: "Exco", navMeetings: "Meetings",
      navEvents: "Events", navKids: "Kids Section",
      navGallery: "Gallery", navSupport: "Support Us",
      navJoin: "Membership", heroTitle: "German-Grassland e.V. Berlin",
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      announcementTitle: "Important Announcement",
      announcementText: "Check here for the latest news and important updates from the association.",
      excoTitle: "Executive Committee & Ngoteh",
      meetingsTitle: "Monthly Meeting Sessions",
      meetingsDesc: "Every Second Saturday of the Month – Join us for our community dialogue.",
      eventsTitle: "Upcoming Events",
      eventsDesc: "Join us for our upcoming community gathering.",
      kidsTitle: "Kids & Youth Section",
      kidsDesc: "Preserving our heritage for the next generation.",
      galleryTitle: "General Event Gallery & Ngoteh",
      supportTitle: "Support Our Mission",
      donateText: "SCAN TO DONATE",
      registerTitle: "Become a Member",
      registerBtn: "Submit Application",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      admin: "Website Admin"
    },
    fr: {
      navHome: "Accueil", navExco: "Exco", navMeetings: "Réunions",
      navEvents: "Événements", navKids: "Section Enfants",
      navGallery: "Galerie", navSupport: "Soutenez-nous",
      navJoin: "Adhésion", heroTitle: "German-Grassland e.V. Berlin",
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      announcementTitle: "Annonce Importante",
      announcementText: "Consultez ici les dernières nouvelles et les annonces importantes de l'association.",
      excoTitle: "Membres du bureau exécutif & Ngoteh",
      meetingsTitle: "Réunions Mensuelles",
      meetingsDesc: "Chaque deuxième samedi du mois – Rejoignez-nous pour le dialogue communautaire.",
      eventsTitle: "Événements à Venir",
      eventsDesc: "Rejoignez-nous pour notre prochain rassemblement.",
      kidsTitle: "Section Enfants et Jeunes",
      kidsDesc: "Préserver notre héritage pour la prochaine génération.",
      galleryTitle: "Galerie Générale des Événements & Ngoteh",
      supportTitle: "Soutenez notre Mission",
      donateText: "SCANNEZ POUR DONNER",
      registerTitle: "Devenir Membre",
      registerBtn: "S'inscrire",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Adresse e-mail",
      admin: "Admin du site"
    }
  };

  const c = t[lang];

  const excoData = [
    { pos: "President", name: "Mr. CHENYE FREDERICK" },
    { pos: "Ngoteh Representative", name: "Asongwe Onabid" },
    { pos: "Vice President", name: "Mr. NJAFUH BOBGA ROLAND" },
    { pos: "Secretary General", name: "DEACONESS THERESA EKPAKUEME" },
    { pos: "Vice Secretary General", name: "Ms. SEDONI ABAH" },
    { pos: "Financial Secretary", name: "Ms. LOVELINE MBETIJI FOMUSO" },
    { pos: "Treasurer", name: "Mr. NGASSA ERENRST" },
    { pos: "Social Secretary", name: ["MR. TEMBU FRANCIS", "MR. KANGKANG EVARISTUS", "MS RUTH YEBAH"] },
    { pos: "Protocol Officer", name: "Mr. NJI ERIC" }
  ];

  const getPath = (path) => `${process.env.PUBLIC_URL}/${path}`;
  const scrollTo = (id) => { 
    const el = document.getElementById(id); 
    if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'}); 
  };
  
  return (
    <div style={{ backgroundColor: '#fdfbf7', fontFamily: 'Segoe UI, sans-serif' }}>
      <header id="home" style={{ textAlign: 'center', color: 'white', padding: '80px 20px', background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('${getPath('images/ngoteh-event-01.jpg')}')`, backgroundSize: 'cover' }}>
        <img src={getPath('images/verein-logo.png')} alt="Logo" style={{ height: '180px', borderRadius: '15px', backgroundColor: 'white', padding: '15px' }} />
        <h1>{c.heroTitle}</h1>
      </header>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <section id="announcements" style={{ marginBottom: '80px', padding: '40px', background: '#fff9c4', borderRadius: '30px', border: '2px solid #f9a825' }}>
          <h2>{c.announcementTitle}</h2>
          <p>{c.announcementText}</p>
        </section>

        <section id="exco" style={{ marginBottom: '80px', padding: '40px', background: '#e8f5e9', borderRadius: '30px' }}>
          <h2>{c.excoTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {excoData.map((m, i) => <div key={i}><strong>{m.pos}:</strong> {Array.isArray(m.name) ? m.name.join(', ') : m.name}</div>)}
          </div>
        </section>
      </main>
    </div>
  );
}