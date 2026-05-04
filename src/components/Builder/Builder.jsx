import React, { useState, useEffect } from 'react';
import styles from './Builder.module.css';
import { User, Briefcase, GraduationCap, Award, ChevronRight, ChevronLeft, Download, Camera, Trash2, Sparkles, Zap } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Builder = () => {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [strength, setStrength] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    education: '',
    experience: '',
    skills: ''
  });

  // Manipulation Logic: Strength Meter
  useEffect(() => {
    const filledFields = Object.values(formData).filter(v => v.length > 0).length;
    const photoBonus = image ? 1 : 0;
    const totalScore = Math.min(Math.round(((filledFields + photoBonus) / 8) * 100), 100);
    setStrength(totalScore);
  }, [formData, image]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    html2canvas(element, { scale: 3, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save(`${formData.fullName || 'Likun-Geeko-Pro'}.pdf`);
    });
  };

  return (
    <section id="builder" className={styles.builderArea}>
      <div className={styles.container}>
        
        {/* COLUMN 1: SIDEBAR NAVIGATION */}
        <div className={styles.sidebar}>
          <div className={`${styles.navLink} ${step === 1 ? styles.activeNav : ''}`} onClick={() => setStep(1)}>
            <User size={20} /> <span>Profile</span>
          </div>
          <div className={`${styles.navLink} ${step === 2 ? styles.activeNav : ''}`} onClick={() => setStep(2)}>
            <Briefcase size={20} /> <span>Experience</span>
          </div>
          <div className={`${styles.navLink} ${step === 3 ? styles.activeNav : ''}`} onClick={() => setStep(3)}>
            <Award size={20} /> <span>Skills</span>
          </div>
        </div>

        {/* COLUMN 2: EDITOR WORKSPACE */}
        <div className={styles.editorCol}>
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.aiBadge}><Sparkles size={12} /> AI STUDIO LIVE</div>
              <div className={styles.stepInfo}>STEP {step} OF 3</div>
            </div>

            <div className={styles.formBody}>
              {step === 1 && (
                <div className={styles.fadeIn}>
                  <label className={styles.fieldLabel}><Camera size={16} /> Professional Photo</label>
                  <div className={styles.photoUploadBox}>
                    <div className={styles.imageCircle}>
                      {image ? <img src={image} alt="Profile" /> : <User size={30} color="#94a3b8" />}
                    </div>
                    <div className={styles.uploadControls}>
                      <input type="file" id="resumePhoto" hidden onChange={handleImageChange} accept="image/*" />
                      <label htmlFor="resumePhoto" className={styles.uploadBtn}>Upload Photo</label>
                      {image && <button onClick={() => setImage(null)} className={styles.trashBtn}><Trash2 size={14}/></button>}
                    </div>
                  </div>

                  <label className={styles.fieldLabel}>Full Name</label>
                  <input name="fullName" placeholder="e.g. Likun Pradhan" value={formData.fullName} onChange={handleChange} />
                  
                  <div className={styles.inputRow}>
                    <div className={styles.inputField}>
                      <label className={styles.fieldLabel}>Email</label>
                      <input name="email" placeholder="mail@geeko.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className={styles.inputField}>
                      <label className={styles.fieldLabel}>Phone</label>
                      <input name="phone" placeholder="+91..." value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <label className={styles.fieldLabel}>Professional Summary</label>
                  <textarea name="summary" placeholder="Briefly describe your career goals..." value={formData.summary} onChange={handleChange}></textarea>
                </div>
              )}

              {step === 2 && (
                <div className={styles.fadeIn}>
                  <label className={styles.fieldLabel}><Briefcase size={16} /> Experience</label>
                  <textarea name="experience" className={styles.largeArea} placeholder="Job Title, Company, Key Achievements..." value={formData.experience} onChange={handleChange}></textarea>
                  <label className={styles.fieldLabel}><GraduationCap size={16} /> Education</label>
                  <textarea name="education" placeholder="University, Degree, Graduation Year..." value={formData.education} onChange={handleChange}></textarea>
                </div>
              )}

              {step === 3 && (
                <div className={styles.fadeIn}>
                  <label className={styles.fieldLabel}><Award size={16} /> Core Skills</label>
                  <textarea name="skills" className={styles.largeArea} placeholder="e.g. React, SQL, SSIS, Web Development..." value={formData.skills} onChange={handleChange}></textarea>
                  <div className={styles.proTipBox}>
                    <Zap size={14} /> <span>PRO TIP: Mentioning SSIS and SQL can increase your shortlist chances in Pune by 40%.</span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.formFooter}>
              <div className={styles.strengthContainer}>
                <div className={styles.strengthHeader}>
                  <span>Resume Strength</span>
                  <span>{strength}%</span>
                </div>
                <div className={styles.strengthBar}><div style={{width: `${strength}%`}}></div></div>
              </div>
              <div className={styles.footerBtns}>
                {step > 1 && <button onClick={() => setStep(step - 1)} className={styles.backBtn}><ChevronLeft size={20}/></button>}
                {step < 3 ? (
                  <button onClick={() => setStep(step + 1)} className={styles.nextBtn}>Next Step <ChevronRight size={18} /></button>
                ) : (
                  <button onClick={handleDownload} className={styles.downloadBtn}>Finish & Download <Download size={18} /></button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: LIVE PREVIEW CANVAS */}
        <div className={styles.previewCol}>
          <div className={styles.previewHeader}>
            <div className={styles.liveDot}></div> <span>LIVE RENDER</span>
          </div>
          <div className={styles.paperWrapper}>
            <div id="resume-preview" className={styles.paper}>
              <div className={styles.pHeader}>
                {image && <div className={styles.pPhoto}><img src={image} alt="Profile" /></div>}
                <div className={styles.pTitleInfo}>
                  <h1>{formData.fullName || 'YOUR NAME'}</h1>
                  <p>{formData.email} {formData.phone ? `| ${formData.phone}` : ''}</p>
                </div>
              </div>
              <div className={styles.pBody}>
                <div className={styles.pSectionTitle}>PROFESSIONAL SUMMARY</div>
                <p className={styles.pText}>{formData.summary}</p>
                <div className={styles.pSectionTitle}>WORK EXPERIENCE</div>
                <p className={styles.pText}>{formData.experience}</p>
                <div className={styles.pSectionTitle}>ACADEMIC BACKGROUND</div>
                <p className={styles.pText}>{formData.education}</p>
                <div className={styles.pSectionTitle}>TECHNICAL SKILLS</div>
                <p className={styles.pSkills}>{formData.skills}</p>
              </div>
              <div className={styles.pWatermark}>Built with Geeko by Likun</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Builder;