import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, User, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      .contact-section {
        padding: 5rem 0;
        background-color: #b3d2f35c; 
      }
        .titre {
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }
      
      .contact-header-icon {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      }
      
      .contact-card {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        height: 100%;
      }
      
      .contact-card:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      .info-icon {
        width: 48px;
        height: 48px;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .info-icon.blue {
        background: #dbeafe;
      }
      
      .info-icon.indigo {
        background: #e0e7ff;
      }
      
      .info-icon.purple {
        background: #f3e8ff;
      }
      
      .gradient-card {
        background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        color: white;
      }
      
      .form-card {
        background: white;
        border-radius: 1rem;
        padding: 3rem 2.5rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      .form-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #374151;
      }
      
      .form-control:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);
      }
      
      .btn-gradient {
        background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
        border: none;
        padding: 0.875rem 1.5rem;
        font-size: 1.125rem;
        font-weight: 500;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
      }
      
      .btn-gradient:hover {
        background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        transform: scale(1.02);
      }
      
      .faq-card {
        padding: 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 0.5rem;
        transition: all 0.3s ease;
        text-decoration: none;
        display: block;
      }
      
      .faq-card:hover {
        border-color: #3b82f6;
        background: #eff6ff;
      }
      
      .faq-card h4 {
        font-weight: 500;
        color: #111827;
        margin-bottom: 0.25rem;
        font-size: 1rem;
      }
      
      .faq-card:hover h4 {
        color: #2563eb;
      }
      
      .faq-card p {
        font-size: 0.875rem;
        color: #6b7280;
        margin: 0;
      }
      
      .additional-info {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
      }
      
      .text-blue-600 {
        color: #2563eb;
      }
      
      .text-indigo-600 {
        color: #4f46e5;
      }
      
      .text-purple-600 {
        color: #9333ea;
      }
      
      .text-blue-100 {
        color: #dbeafe;
      }
      
      .text-green-600 {
        color: #16a34a;
      }
      .form-control::placeholder {
        font-size: 17px !important; 
        font-weight: 400;
}
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message envoyé avec succès !", {
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}


        <div className="titre text-center mb-5">
              <div className="text-center mb-5">
                <h1 className="title display-4 fw-bold mb-3">Contactez-nous</h1>
          <p className="lead text-muted">
            Une question, un problème ou besoin d'aide ? Notre équipe est là pour vous répondre rapidement.
          </p>
              </div>
        </div>

        <div className="row g-4">
          {/* Contact Info Cards */}
          <div className="col-lg-4">
            <div className="row g-4">
              {/* Email Card */}
              <div className="col-12">
                <div className="contact-card">
                  <div className="d-flex gap-3">
                    <div className="info-icon blue">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="h5 fw-bold mb-2">Email</h3>
                      <p className="text-muted small mb-3">Envoyez-nous un email</p>
                      <a 
                        href="mailto:support@volontaction.fr"
                        className="text-blue-600 fw-medium text-decoration-none"
                      >
                        contact@ofppt.ma
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="col-12">
                <div className="contact-card">
                  <div className="d-flex gap-3">
                    <div className="info-icon indigo">
                      <Phone className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h3 className="h5 fw-bold mb-2">Téléphone</h3>
                      <p className="text-muted small mb-3">Du lundi au vendredi</p>
                      <a 
                        href="tel:+33123456789"
                        className="text-blue-600 fw-medium text-decoration-none"
                      >
                        +212 0 23 05 67 89
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="col-12">
                <div className="contact-card">
                  <div className="d-flex gap-3">
                    <div className="info-icon purple">
                      <MapPin className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="h5 fw-bold mb-2">Adresse</h3>
                      <p className="text-muted small mb-3">Venez nous rendre visite</p>
                      <p className="mb-0">
                        123 Rue de ...<br />
                        75001 Casablanca, Maroc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Localisation Card */}
              <div className="col-12 mt-4">
                <div className="contact-card p-0 overflow-hidden d-flex flex-column" style={{ minHeight: '300px' }}>
                  <div className="p-3 bg-white border-bottom d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <MapPin size={18} className="text-purple-600" />
                      <h3 className="h6 fw-bold mb-0">Notre Emplacement</h3>
                    </div>
                    <a 
                      href="https://www.google.com/maps?q=OFPPT+ISAG+Casablanca" 
                      target="_blank" 
                      rel="noreferrer"
                      className="small fw-medium"
                      style={{ color: "#F7AD19", textDecoration: "none" }}
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                  
                  <div className="flex-grow-1">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7144275034346!2d-7.632906424303761!3d33.58676257333642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2931a28a363%3A0x67584f93457a44f!2sCasablanca!5e0!3m2!1sfr!2sma!4v1710000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="form-card">
              <h3 className="h3 fw-bold mb-4">Envoyez-nous un message</h3>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    <User size={16} className="text-blue-600" />
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    <Mail size={16} className="text-blue-600" />
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label">
                    <MessageCircle size={16} className="text-blue-600" />
                    Sujet
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="De quoi voulez-vous parler ?"
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    <MessageCircle size={16} className="text-blue-600" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande en détail..."
                    rows="6"
                    className="form-control form-control-lg"
                    required
                  ></textarea>
                  <div className="form-text">Minimum 10 caractères</div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary btn-gradient">
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>

              {/* Additional Info */}
              <div className="additional-info">
                <div className="d-flex gap-3 text-muted small">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <p className="mb-0">
                    Nous nous engageons à répondre à toutes les demandes dans les 24 heures ouvrables.
                    Vos informations sont confidentielles et ne seront jamais partagées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
