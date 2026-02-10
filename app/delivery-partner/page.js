'use client'

import React, { useState } from 'react';

const DeliveryPartnerSignup = () => {
    const [step, setStep] = useState(1);
    const [dailyDeliveries, setDailyDeliveries] = useState(15);

    const calculateEarnings = () => dailyDeliveries * 50; // Example: 500 per delivery average

    return (
        <div style={styles.page}>
            {/* 1. Dynamic Hero Section */}
            <header style={styles.hero}>
                <h1 style={styles.heroTitle}>Be Your Own Boss</h1>
                <p style={styles.heroSubtitle}>Join our fleet and start earning today.</p>

                {/* Earnings Estimator */}
                <div style={styles.estimateCard}>
                    <p style={styles.estimateLabel}>Potential Daily Earnings</p>
                    <h2 style={styles.estimateValue}>₹{calculateEarnings()}*</h2>
                    <input
                        type="range" min="5" max="40"
                        value={dailyDeliveries}
                        onChange={(e) => setDailyDeliveries(e.target.value)}
                        style={styles.slider}
                    />
                    <p style={styles.sliderHint}>Based on {dailyDeliveries} deliveries/day</p>
                </div>
            </header>

            {/* 2. Onboarding Form */}
            <main style={styles.main}>
                <div style={styles.formCard}>
                    <div style={styles.stepIndicator}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{
                                ...styles.dot,
                                backgroundColor: step >= i ? '#FF6B00' : '#E0E0E0',
                                width: step === i ? '30px' : '10px'
                            }} />
                        ))}
                    </div>

                    {step === 1 && (
                        <div style={styles.formStep}>
                            <h3 style={styles.stepTitle}>Personal Details</h3>
                            <input style={styles.input} placeholder="Full Name" />
                            <input style={styles.input} type="tel" placeholder="Mobile Number" />
                            <select style={styles.input}>
                                <option>Select Your City</option>
                                <option>New York</option>
                                <option>London</option>
                            </select>
                            <button onClick={() => setStep(2)} style={styles.nextBtn}>Next: Documents</button>
                        </div>
                    )}

                    {step === 2 && (
                        <div style={styles.formStep}>
                            <h3 style={styles.stepTitle}>Vehicle & Docs</h3>
                            <div style={styles.uploadGroup}>
                                <label style={styles.uploadBtn}>📸 Upload Driving License
                                    <input type="file" className='w-full cursor-pointer' />
                                </label>

                                <label style={styles.uploadBtn}>📄 Upload ID Proof
                                    <input type="file" className='w-full cursor-pointer' />
                                </label>
                            </div>
                            <select style={styles.input}>
                                <option>Vehicle Type</option>
                                <option>Bike / Motorcycle</option>
                                <option>Bicycle</option>
                                <option>Electric Scooter</option>
                            </select>
                            <div style={styles.btnRow}>
                                <button onClick={() => setStep(1)} style={styles.backBtn}>Back</button>
                                <button onClick={() => setStep(3)} style={styles.nextBtn}>Next</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div style={styles.formStep}>
                            <h3 style={styles.stepTitle}>Bank Details</h3>
                            <input style={styles.input} placeholder="Account Number" />
                            <input style={styles.input} placeholder="IFSC / Routing Code" />
                            <button style={styles.submitBtn}>Start My Application</button>
                        </div>
                    )}
                </div>

                {/* 3. Perks Grid */}
                <div style={styles.perksGrid}>
                    <div style={styles.perk}>💰 <b>Weekly Pay</b></div>
                    <div style={styles.perk}>🛡️ <b>Accident Cover</b></div>
                    <div style={styles.perk}>⏰ <b>Your Own Hours</b></div>
                </div>
            </main>
        </div>
    );
};

const styles = {
    page: { background: '#FFF7F2', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
    hero: { background: 'linear-gradient(180deg, #FF6B00 0%, #FF8E3C 100%)', padding: '60px 20px 100px', textAlign: 'center', color: '#fff' },
    heroTitle: { fontSize: '2.5rem', margin: 0, fontWeight: '900' },
    heroSubtitle: { fontSize: '1.1rem', opacity: 0.9, marginTop: '10px' },
    estimateCard: { background: '#fff', padding: '20px', borderRadius: '20px', maxWidth: '350px', margin: '30px auto 0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', color: '#333' },
    estimateLabel: { fontSize: '0.9rem', color: '#666', marginBottom: '5px' },
    estimateValue: { fontSize: '2.5rem', color: '#FF6B00', margin: '0 0 15px' },
    slider: { width: '100%', accentColor: '#FF6B00' },
    sliderHint: { fontSize: '0.8rem', color: '#999', marginTop: '10px' },
    main: { maxWidth: '500px', margin: '-60px auto 0', padding: '0 20px 50px' },
    formCard: { background: '#fff', borderRadius: '25px', padding: '30px', boxShadow: '0 15px 35px rgba(255, 107, 0, 0.1)' },
    stepIndicator: { display: 'flex', gap: '8px', marginBottom: '25px', justifyContent: 'center' },
    dot: { height: '10px', borderRadius: '10px', transition: 'all 0.3s ease' },
    stepTitle: { fontSize: '1.3rem', marginBottom: '20px', color: '#2D3436' },
    input: { width: '100%', padding: '15px', borderRadius: '12px', border: '2px solid #F0F0F0', marginBottom: '15px', fontSize: '1rem', boxSizing: 'border-box' },
    nextBtn: { width: '100%', padding: '16px', background: '#FF6B00', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' },
    backBtn: { background: '#F5F5F5', color: '#666', padding: '16px 25px', border: 'none', borderRadius: '12px', cursor: 'pointer' },
    btnRow: { display: 'flex', gap: '10px' },
    uploadGroup: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' },
    uploadBtn: { padding: '15px', border: '2px dashed #FFD8BA', borderRadius: '12px', textAlign: 'center', fontSize: '0.8rem', color: '#FF6B00', cursor: 'pointer' },
    submitBtn: { width: '100%', padding: '18px', background: '#27AE60', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' },
    perksGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '30px' },
    perk: { background: '#fff', padding: '15px 5px', borderRadius: '15px', textAlign: 'center', fontSize: '0.8rem', border: '1px solid #FFE0CC' }
};

export default DeliveryPartnerSignup;
