import React from 'react';

function About() {
  return (
    <section
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '32px',
        background: '#f9f9f9',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        fontFamily: 'sans-serif',
      }}
    >
      <h1
        style={{
          color: '#2d3a4a',
          fontSize: '2.5rem',
          marginBottom: '16px',
          textAlign: 'center',
        }}
      >
        À propos
      </h1>

      <img
        src="/images/artisan.jpg"
        alt="Artisan Placo à Bouira"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '12px',
          margin: '24px auto',
          display: 'block',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        }}
      />

      <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.7 }}>
        Je suis <strong>artisan plaquiste à Bouira</strong>, spécialisé dans les travaux de plâtrerie et d’aménagement intérieur. 
        Depuis plusieurs années, j'accompagne mes clients avec passion et professionnalisme pour transformer leurs espaces selon leurs envies.
      </p>

      <p style={{ fontSize: '1.1rem', color: '#444', marginTop: '16px' }}>
        Que ce soit pour une rénovation complète ou un simple aménagement, je propose des prestations sur mesure adaptées à vos besoins :
      </p>

      <ul
        style={{
          margin: '24px 0',
          paddingLeft: '20px',
          color: '#333',
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}
      >
        <li>Pose de plaques de plâtre (placo)</li>
        <li>Création de cloisons et faux plafonds</li>
        <li>Isolation thermique et phonique</li>
        <li>Finitions précises et conseils personnalisés</li>
      </ul>

      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        Mon objectif : un résultat propre, durable et conforme à vos attentes, réalisé dans les délais convenus.
        N'hésitez pas à me contacter pour discuter de votre projet ou demander un devis gratuit.
      </p>

      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <a
          href="/contact"
          style={{
            background: '#2d3a4a',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}

export default About;
