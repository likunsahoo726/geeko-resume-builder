import React, { useState, useEffect } from 'react';
import styles from './Builder.module.css';
import { User, Briefcase, GraduationCap, Award, ChevronRight, ChevronLeft, Download, Camera, Trash2, Sparkles, Zap, Lock, X, Crown, Globe, PlusCircle, Trash, ShieldCheck, Layout } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Builder = () => {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [strength, setStrength] = useState(0);
  const [isPaid, setIsPaid] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [templateStyle, setTemplateStyle] = useState('modern'); // 'modern' or 'classic'
  const [aiTip, setAiTip] = useState("Analyzing profile...");

  // Data State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', city: '', country: '',
    summary: '',
    education: [{ type: 'Graduation', school: '', degree: '', year: '' }],
    experience: [{ company: '', role: '', desc: '' }],
    projects: [{ title: '', tech: '' }],
    skills: '',
  });

  // LocalStorage Persistence
  useEffect(() => {
    const saved = localStorage.getItem("geeko_v4_data");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("geeko_v4_data", JSON.stringify(formData));
  }, [formData]);

  // Strength & Industry Logic
  useEffect(() => {
    let score = 0;
    if (formData.firstName && formData.lastName) score += 20;
    if (formData.summary) score += 20;
    if (formData.education[0].school) score += 20;
    if (formData.experience[0].company) score += 20;
    if (formData.skills) score += 20;
    setStrength(score);

    const skills = formData.skills.toLowerCase();
    if (skills.includes("sql") || skills.includes("react") || skills.includes("ssis")) {
      setAiTip("Global Tech Insight: Mentioning SSIS and Cloud tools increases shortlist chances in MNCs.");
    } else if (skills.includes("sale") || skills.includes("market")) {
      setAiTip("Sales Tip: International recruiters value quantifiable results (e.g., 'Grew revenue by 20%').");
    } else {
      setAiTip("Pro Tip: Use strong action verbs like 'Architected' or 'Spearheaded' for a global impact.");
    }
  }, [formData]);

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleListChange = (index, field, value, type) => {
    const list = [...formData[type]];
    list[index][field] = value;
    setFormData({ ...formData, [type]: list });
  };

  const addMore = (type, schema) => setFormData({ ...formData, [type]: [...formData[type], schema] });

  const handleDownload = () => {
    if (!isPaid) { setShowModal(true); return; }
    const element = document.getElementById('resume-preview');
    html2canvas(element, { scale: 3, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save(`Geeko_Pro_${formData.firstName}.pdf`);
    });
  };

  return (
    <div className={styles.builderWrapper}>
      <div className={styles.container}>
        
        {/* SIDEBAR NAVIGATION */}
        <div className={styles.sidebar}>
          <div className={`${styles.navLink} ${step === 1 ? styles.activeNav : ''}`} onClick={() => setStep(1)}><User size={20}/><span>Bio</span></div>
          <div className={`${styles.navLink} ${step === 2 ? styles.activeNav : ''}`} onClick={() => setStep(2)}><GraduationCap size={20}/><span>Edu</span></div>
          <div className={`${styles.navLink} ${step === 3 ? styles.activeNav : ''}`} onClick={() => setStep(3)}><Briefcase size={20}/><span>Work</span></div>
          <div className={`${styles.navLink} ${step === 4 ? styles.activeNav : ''}`} onClick={() => setStep(4)}><Layout size={20}/><span>Style</span></div>
        </div>

        {/* EDITOR SECTION */}
        <div className={styles.editorMain}>
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.aiBadge}><Sparkles size={14} /> GEEKO AI WIZARD</div>
              <div className={styles.status}><ShieldCheck size={14} /> Global ATS Standard</div>
            </div>

            <div className={styles.scrollArea}>
              {step === 1 && (
                <div className={styles.fadeIn}>
                  <h3>Personal Bio</h3>
                  <div className={styles.photoUpload}>
                    <div className={styles.imageCircle}>{image ? <img src={image} alt="P" /> : <Camera size={24} />}</div>
                    <label className={styles.uploadBtn}>Set Photo <input type="file" hidden onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}/></label>
                  </div>
                  <div className={styles.inputRow}>
                    <input name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleInput} />
                    <input name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleInput} />
                  </div>
                  <input name="email" value={formData.email} placeholder="Professional Email" onChange={handleInput} />
                  <textarea name="summary" value={formData.summary} placeholder="Professional Summary..." onChange={handleInput}></textarea>
                </div>
              )}

              {step === 2 && (
                <div className={styles.fadeIn}>
                  <h3>Education</h3>
                  {formData.education.map((edu, i) => (
                    <div key={i} className={styles.repeaterCard}>
                      <input value={edu.school} placeholder="University Name" onChange={(e)=>handleListChange(i,'school',e.target.value,'education')}/>
                      <input value={edu.degree} placeholder="Degree/Major" onChange={(e)=>handleListChange(i,'degree',e.target.value,'education')}/>
                      <input value={edu.year} placeholder="Completion Year" onChange={(e)=>handleListChange(i,'year',e.target.value,'education')}/>
                    </div>
                  ))}
                  <button className={styles.addBtn} onClick={()=>addMore('education', {school:'', degree:'', year:''})}>+ Add Education</button>
                </div>
              )}

              {step === 3 && (
                <div className={styles.fadeIn}>
                  <h3>Professional Work</h3>
                  {formData.experience.map((exp, i) => (
                    <div key={i} className={styles.repeaterCard}>
                      <input value={exp.company} placeholder="Company Name" onChange={(e)=>handleListChange(i,'company',e.target.value,'experience')}/>
                      <textarea value={exp.desc} placeholder="Key Responsibilities..." onChange={(e)=>handleListChange(i,'desc',e.target.value,'experience')}></textarea>
                    </div>
                  ))}
                  <button className={styles.addBtn} onClick={()=>addMore('experience', {company:'', desc:''})}>+ Add Job Role</button>
                </div>
              )}

              {step === 4 && (
                <div className={styles.fadeIn}>
                  <h3>Choose Template Style</h3>
                  <div className={styles.stylePicker}>
                    <div className={`${styles.styleTab} ${templateStyle === 'modern' ? styles.activeTab : ''}`} onClick={()=>setTemplateStyle('modern')}>Modern (with Photo)</div>
                    <div className={`${styles.styleTab} ${templateStyle === 'classic' ? styles.activeTab : ''}`} onClick={()=>setTemplateStyle('classic')}>Classic (Global Standard)</div>
                  </div>
                  <label style={{marginTop: '20px'}}>Technical Skills</label>
                  <textarea name="skills" value={formData.skills} placeholder="React, SQL, Management..." onChange={handleInput}></textarea>
                </div>
              )}
            </div>

            <div className={styles.formFooter}>
              <div className={styles.aiTipBox}><Zap size={14} color="#6c5ce7"/> <p>{aiTip}</p></div>
              <div className={styles.sHeader}><span>Resume Score</span><span>{strength}%</span></div>
              <div className={styles.sBar}><div style={{width: `${strength}%`}}></div></div>
              <div className={styles.footerBtns}>
                {step > 1 && <button onClick={() => setStep(step - 1)} className={styles.backBtn}><ChevronLeft /></button>}
                <button onClick={step < 4 ? () => setStep(step + 1) : handleDownload} className={styles.nextBtn}>
                  {step < 4 ? "Continue" : (isPaid ? "Download PDF" : "Unlock Pro & Download (₹49)")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW AREA */}
        <div className={styles.previewMain}>
          <div className={styles.previewHeader}><span>LIVE PREVIEW</span> <div className={styles.dot}></div></div>
          <div className={styles.paperWrapper}>
            <div id="resume-preview" className={`${styles.paper} ${templateStyle === 'classic' ? styles.classicPaper : ''}`}>
              {!isPaid && strength > 30 && <div className={styles.lockedOverlay}>GEEKO PRO PREVIEW</div>}
              
              <div className={templateStyle === 'modern' ? styles.modernHead : styles.classicHead}>
                {templateStyle === 'modern' && image && <div className={styles.pImg}><img src={image} alt="User" /></div>}
                <div className={styles.pTitle}>
                  <h1>{formData.firstName || 'NAME'} {formData.lastName}</h1>
                  <p>{formData.email} | {formData.phone}</p>
                </div>
              </div>

              <div className={styles.pBody}>
                <div className={styles.pSec}><h5>PROFESSIONAL SUMMARY</h5><p>{formData.summary}</p></div>
                <div className={styles.pSec}><h5>EXPERIENCE</h5>
                  {formData.experience.map((e,i)=><div key={i} className={styles.pItem}><b>{e.company}</b><p>{e.desc}</p></div>)}
                </div>
                <div className={styles.pSec}><h5>EDUCATION</h5>
                  {formData.education.map((edu,i)=><div key={i} className={styles.pItem}>{edu.degree} - {edu.school}</div>)}
                </div>
                <div className={styles.pSec}><h5>CORE SKILLS</h5><p>{formData.skills}</p></div>
              </div>
              <div className={styles.pWatermark}>Built with Geeko Studio Pro</div>
            </div>
          </div>
        </div>

        {/* MODAL SECTION */}
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalCard}>
              <button className={styles.closeBtn} onClick={() => setShowModal(false)}><X/></button>
              <Crown size={40} color="#6c5ce7"/>
              <h2>Unlock Global Access</h2>
              <p>Download the high-resolution, watermark-free PDF optimized for global recruiters.</p>
              <div className={styles.priceTag}>₹49 / $0.99</div>
              <div className={styles.qrRow}><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=likun@upi&pn=Likun%20Sahoo&am=49&cu=INR" alt="QR"/></div>
              <button className={styles.payBtn} onClick={()=>{setIsPaid(true); setShowModal(false)}}>Verify Payment & Download</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Builder;