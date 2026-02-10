'use client'
import React, { useState } from 'react';

const PartnerWithUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div style={styles.page}>
      {/* 1. Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Partner with <span style={{color: '#FFD166'}}>FoodDash</span></h1>
          <p style={styles.heroSubtitle}>Join our network and watch your orders grow by up to 60%.</p>
        </div>
      </section>

      {/* 2. Onboarding Flow */}
      <div style={styles.mainContainer}>
        <div style={styles.card}>
          <div style={styles.stepHeader}>
            <span style={styles.stepBadge}>Step {step} of 3</span>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${(step/3)*100}%`}} />
            </div>
          </div>

          {step === 1 && (
            <div style={styles.formSection}>
              <h2 style={styles.formTitle}>Tell us about your restaurant</h2>
              <input style={styles.input} placeholder="Restaurant Name" />
              <input style={styles.input} placeholder="Primary Cuisine (e.g. Pizza, Indian)" />
              <button onClick={nextStep} style={styles.primaryBtn}>Continue</button>
            </div>
          )}

          {step === 2 && (
            <div style={styles.formSection}>
              <h2 style={styles.formTitle}>Contact Information</h2>
              <input style={styles.input} placeholder="Manager Name" />
              <input style={styles.input} placeholder="Phone Number" />
              <input style={styles.input} placeholder="Official Email Address" />
              <div style={styles.btnRow}>
                <button onClick={prevStep} style={styles.secondaryBtn}>Back</button>
                <button onClick={nextStep} style={styles.primaryBtn}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={styles.formSection}>
              <h2 style={styles.formTitle}>Operational Details</h2>
              <input style={styles.input} placeholder="Full Address" />
              <input style={styles.input} placeholder="Working Hours" />
              <button style={styles.primaryBtn}>Submit Partnership Request</button>
            </div>
          )}
        </div>

        {/* 3. Value Proposition Section */}
        <div style={styles.features}>
          <div style={styles.featItem}>
            <div style={styles.featIcon}>📈</div>
            <h4>Revenue Growth</h4>
            <p>Reach new customers outside your usual radius.</p>
          </div>
          <div style={styles.featItem}>
            <div style={styles.featIcon}>🚚</div>
            <h4>Fast Delivery</h4>
            <p>Professional fleet at your service 24/7.</p>
          </div>
          <div style={styles.featItem}>
            <div style={styles.featIcon}>📱</div>
            <h4>Easy Management</h4>
            <p>Dedicated dashboard to track orders and menu.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { background: '#FFF9F5', minHeight: '100vh', fontFamily: 'Inter, sans-serif' },
  hero: { background: 'linear-gradient(135deg, #FF8C00 0%, #FF5733 100%)', padding: '80px 20px', textAlign: 'center', color: '#fff' },
  heroTitle: { fontSize: '3rem', fontWeight: '800', marginBottom: '15px' },
  heroSubtitle: { fontSize: '1.2rem', opacity: 0.9 },
  mainContainer: { maxWidth: '1000px', margin: '-50px auto 0', padding: '0 20px' },
  card: { background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(255, 140, 0, 0.1)', marginBottom: '40px' },
  stepHeader: { marginBottom: '30px' },
  stepBadge: { color: '#FF8C00', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' },
  progressBar: { height: '6px', background: '#FFE8D6', borderRadius: '10px', marginTop: '10px', overflow: 'hidden' },
  progressFill: { height: '100%', background: '#FF8C00', transition: 'width 0.3s ease' },
  formTitle: { fontSize: '1.5rem', marginBottom: '25px', color: '#333' },
  input: { width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #FFD8BA', marginBottom: '20px', fontSize: '1rem', outline: 'none' },
  primaryBtn: { width: '100%', padding: '16px', background: '#FF8C00', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.2s' },
  secondaryBtn: { padding: '16px 30px', background: 'transparent', color: '#FF8C00', border: '1px solid #FF8C00', borderRadius: '12px', cursor: 'pointer' },
  btnRow: { display: 'flex', gap: '15px' },
  features: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', paddingBottom: '60px' },
  featItem: { textAlign: 'center', padding: '20px' },
  featIcon: { fontSize: '2.5rem', marginBottom: '15px' }
};

export default PartnerWithUs;
