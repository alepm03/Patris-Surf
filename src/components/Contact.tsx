import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Calendar, ArrowRight, CheckCircle2, Send, Instagram, Waves } from 'lucide-react';

interface ContactProps {
  lang: 'es' | 'en';
}

export default function Contact({ lang }: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'surf-lessons',
    level: 'Beginner',
    date: '',
    notes: ''
  });

  const content = {
    es: {
      tag: 'CONTACTO',
      title: 'Contacta con nosotros.',
      subtitle: 'Escríbenos o llámanos para inscribirte, solicitar información o para cualquier consulta sobre nuestras actividades en la playa de la Zurriola, Donostia.',
      formHeader: 'Formulario de Contacto',
      formLabels: {
        name: 'Tu nombre completo',
        email: 'Tu correo electrónico',
        experience: 'Actividad de interés',
        level: 'Nivel técnico actual',
        date: 'Fecha de inicio tentativa',
        notes: 'Comentarios o información adicional',
        submit: 'Enviar Mensaje',
        successTitle: '¡Mensaje enviado!',
        successDesc: 'Nos pondremos en contacto contigo en menos de 24 horas para responder a tu consulta.',
        whatsappCta: 'Confirmar por WhatsApp'
      },
      experiencesNames: {
        'entrenamientos-surfistas': 'Entrenamientos para Surfistas',
        'surf-inclusion': 'Actividades Surf & Inclusión',
        'guarda-tablas': 'Servicio Guarda-Tablas',
        'medioambiental': 'Jornadas Medioambientales (Gratuitas)',
        'vacaciones': 'Actividades Vacaciones Escolares'
      },
      mapLabels: {
        title: 'Sede Patris Surf — Donostia',
        coordinates: '43.3194° N, 1.9802° W',
        desc: 'Nuestra sede se encuentra en la Calle Usandizaga 7, barrio de Gros, junto a la playa de la Zurriola en Donostia / San Sebastián.',
        spots: {
          camp: 'Sede Patris Surf (C/ Usandizaga 7)',
          beach: 'Playa de la Zurriola',
          parking: 'Barrio de Gros'
        }
      }
    },
    en: {
      tag: 'CONTACT',
      title: 'Get in touch.',
      subtitle: 'Write to us or call us to sign up, request information, or ask any question about our activities at La Zurriola beach in Donostia.',
      formHeader: 'Contact Form',
      formLabels: {
        name: 'Your full name',
        email: 'Your email address',
        experience: 'Activity of interest',
        level: 'Current skill level',
        date: 'Tentative start date',
        notes: 'Comments or additional information',
        submit: 'Send Message',
        successTitle: 'Message sent!',
        successDesc: 'We will get back to you within 24 hours to answer your enquiry.',
        whatsappCta: 'Confirm via WhatsApp'
      },
      experiencesNames: {
        'entrenamientos-surfistas': 'Surf Training',
        'surf-inclusion': 'Surf & Social Inclusion',
        'guarda-tablas': 'Board Storage Service',
        'medioambiental': 'Environmental Sessions (Free)',
        'vacaciones': 'School Holiday Activities'
      },
      mapLabels: {
        title: 'Patris Surf HQ — Donostia',
        coordinates: '43.3194° N, 1.9802° W',
        desc: 'Our headquarters are at Calle Usandizaga 7, Gros neighbourhood, next to La Zurriola beach in Donostia / San Sebastián.',
        spots: {
          camp: 'Patris Surf HQ (C/ Usandizaga 7)',
          beach: 'La Zurriola Beach',
          parking: 'Gros Neighbourhood'
        }
      }
    }
  };

  const current = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  // Generate customized WhatsApp click-to-chat API links containing preorder parameters
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hello Patris Surf! My name is ${formData.name}. I'd love to pre-book the "${
        formData.experience
      }" session. Level: ${formData.level}. Startup Date: ${formData.date || 'Any'}. Note: ${
        formData.notes || 'None'
      }`
    );
    return `https://wa.me/34688734123?text=${message}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#ffffff] border-t border-slate-100 overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-1/4 w-[35vw] h-[35vw] rounded-full bg-slate-50/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Blocks */}
        <div className="max-w-3xl mb-16 md:mb-24 text-left">
          <span className="font-mono text-xs text-[#38bdf8] font-bold tracking-[0.3em] uppercase mb-4 block">
            {current.tag}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] mb-6 uppercase">
            {current.title}
          </h2>
          <p className="font-sans text-base text-slate-600 font-light leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Dynamic Split Screen Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Left Block: Inquiry form */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="p-8 md:p-10 rounded-none bg-white border border-slate-200 shadow-md overflow-hidden relative">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="contact-form-node"
                  >
                    <h3 className="font-display font-bold text-lg text-[#020617] mb-6 flex items-center gap-2 uppercase tracking-wide">
                      <Calendar className="w-5 h-5 text-[#38bdf8]" />
                      <span>{current.formHeader}</span>
                    </h3>

                    {/* Name Input */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="name" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                        {current.formLabels.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Patricia Díaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-none text-slate-800 font-sans text-sm focus:border-[#38bdf8] focus:bg-white focus:outline-none transition-all placeholder-slate-400"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="email" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                        {current.formLabels.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="patri@patrissurf.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-none text-slate-800 font-sans text-sm focus:border-[#38bdf8] focus:bg-white focus:outline-none transition-all placeholder-slate-400"
                      />
                    </div>

                    {/* Selecting Experiences grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Course select */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="experience" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                          {current.formLabels.experience}
                        </label>
                        <select
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-none text-slate-800 font-sans text-xs focus:border-[#38bdf8] focus:bg-white focus:outline-none transition-all"
                        >
                          {Object.entries(current.experiencesNames).map(([id, name]) => (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Ability select */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="level" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                          {current.formLabels.level}
                        </label>
                        <select
                          id="level"
                          value={formData.level}
                          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                          className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-none text-slate-850 font-sans text-xs focus:border-[#38bdf8] focus:bg-white focus:outline-none transition-all"
                        >
                          <option value="Beginner">Beginner (First Time)</option>
                          <option value="Intermediate">Intermediate (Paddling nicely)</option>
                          <option value="Advanced">Advanced (Carving rails)</option>
                        </select>
                      </div>

                    </div>

                    {/* Date select picker */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="date" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                        {current.formLabels.date}
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-none text-slate-800 font-sans text-sm focus:border-[#38bdf8] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Accessibility & notes area */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="notes" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                        {current.formLabels.notes}
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        placeholder={lang === 'es' ? 'Cuéntanos si deseas material adaptado o tienes necesidades físicas...' : 'Let us know if you require adaptive gear or physical safety specifications...'}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-none text-slate-800 font-sans text-sm focus:border-[#38bdf8] focus:bg-white focus:outline-none transition-all resize-none placeholder-slate-400"
                      />
                    </div>

                    {/* Button trigger */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-none bg-[#38bdf8] hover:bg-[#020617] text-white font-display font-medium text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <span>{current.formLabels.submit}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                    id="success-form-payload"
                  >
                    <div className="w-16 h-16 border-2 border-[#38bdf8] rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle2 className="w-10 h-10 text-[#38bdf8]" />
                    </div>

                    <h3 className="font-display font-black text-2.5xl text-[#020617] mb-4 uppercase tracking-tight">
                      {current.formLabels.successTitle}
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-slate-600 font-light leading-relaxed max-w-sm mb-8">
                      {current.formLabels.successDesc}
                    </p>

                    {/* Direct WhatsApp Preorder Bridge with sharp corners */}
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-8 py-4 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold tracking-widest uppercase shadow-lg"
                    >
                      <span>{current.formLabels.whatsappCta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 text-[10px] uppercase tracking-widest font-mono font-bold text-slate-400 hover:text-[#020617] transition-colors"
                    >
                      {lang === 'es' ? 'Modificar datos' : 'Modify information'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Block: Customized Topography Map Mock */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="p-8 md:p-10 rounded-none bg-slate-50 border border-slate-200 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Outer Coordinates overlay */}
              <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-[#38bdf8]/85 tracking-widest uppercase select-none">
                {current.mapLabels.coordinates}
              </div>

              {/* Header metrics */}
              <div className="mb-6 relative z-10 text-left text-[#020617]">
                <h3 className="font-display font-black text-xl mb-2 uppercase tracking-tight flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  <span>{current.mapLabels.title}</span>
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-light">
                  {current.mapLabels.desc}
                </p>
              </div>

              {/* Premium Topographical vector illustration */}
              <div className="w-full aspect-[4/3] relative rounded-none bg-[#ffffff] border border-slate-200 overflow-hidden shadow-inner group">
                
                {/* Visual waves / sand depth patterns represented as background divs */}
                <div className="absolute inset-0 bg-[#f8fafc]/90 opacity-90" />
                
                {/* Simulated contour lines */}
                <div className="absolute inset-x-0 top-1/4 h-[1px] bg-slate-350/20 rounded-none border-t border-dashed transform -rotate-3 pointer-events-none" />
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-350/20 rounded-none border-t border-dashed transform -rotate-6 pointer-events-none" />
                <div className="absolute inset-y-0 left-1/3 w-[1px] bg-slate-350/20 rounded-none border-l border-dashed transform rotate-3 pointer-events-none" />

                {/* Simulated Sand beach banks area overlay */}
                <div className="absolute bottom-0 inset-x-0 h-1/4 bg-amber-100/30 border-t border-slate-200" />

                {/* romping waves animation pattern */}
                <div className="absolute inset-x-0 bottom-1/4 h-8 bg-gradient-to-t from-[#38bdf8]/15 to-transparent flex items-center justify-around overflow-hidden pointer-events-none">
                  <Waves className="w-4 h-4 text-[#38bdf8]/35 animate-pulse" />
                  <Waves className="w-4 h-4 text-[#38bdf8]/35 animate-pulse delay-200" />
                  <Waves className="w-4 h-4 text-[#38bdf8]/35 animate-pulse delay-500" />
                </div>

                {/* Coordinates targets hover pins */}
                
                {/* Swells break spot Pin (Razo Beach) */}
                <div className="absolute bottom-[35%] left-[60%] z-20 group/pin pointer-events-auto">
                  <div className="flex flex-col items-center">
                    <span className="px-2.5 py-1 whitespace-nowrap bg-slate-900 text-white border border-slate-800 font-mono text-[8px] font-bold uppercase rounded-none tracking-widest shadow opacity-0 group-hover/pin:opacity-100 transition-opacity translate-y-[-4px]">
                      {current.mapLabels.spots.beach}
                    </span>
                    <span className="flex h-3.5 w-3.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#38bdf8] cursor-pointer"></span>
                    </span>
                  </div>
                </div>

                {/* Basecamp HQ Pin */}
                <div className="absolute bottom-[15%] left-[25%] z-20 group/pin pointer-events-auto">
                  <div className="flex flex-col items-center">
                    <span className="px-2.5 py-1 whitespace-nowrap bg-[#38bdf8] text-white font-mono text-[8px] font-bold uppercase rounded-none tracking-widest shadow opacity-0 group-hover/pin:opacity-100 transition-opacity translate-y-[-4px]">
                      {current.mapLabels.spots.camp}
                    </span>
                    <span className="flex h-3.5 w-3.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#38bdf8] cursor-pointer"></span>
                    </span>
                  </div>
                </div>

                {/* Viewpoint Parking lookout Pin */}
                <div className="absolute top-[35%] left-[20%] z-20 group/pin pointer-events-auto">
                  <div className="flex flex-col items-center">
                    <span className="px-2.5 py-1 whitespace-nowrap bg-slate-100 border border-slate-300 text-slate-800 font-mono text-[8px] font-bold uppercase rounded-none tracking-widest shadow opacity-0 group-hover/pin:opacity-100 transition-opacity translate-y-[-4px]">
                      {current.mapLabels.spots.parking}
                    </span>
                    <span className="flex h-3.5 w-3.5 relative">
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#38bdf8]/50 cursor-pointer"></span>
                    </span>
                  </div>
                </div>

                {/* Mini orientation navigation compass overlay */}
                <div className="absolute bottom-4 right-4 pointer-events-none opacity-40">
                  <div className="w-10 h-10 border border-slate-300 rounded-none flex items-center justify-center font-mono text-[7px] text-slate-500">
                    <span>N</span>
                  </div>
                </div>
              </div>

              {/* Direct clickable address deck metrics */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-4 text-left">
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <Mail className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <a href="mailto:patrissurf@gmail.com" className="hover:text-[#38bdf8] transition-colors font-sans">
                    patrissurf@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <Phone className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <a href="tel:+34688734123" className="hover:text-[#38bdf8] transition-colors font-sans">
                    688 734 123
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <Instagram className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/patrissurf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#38bdf8] transition-colors font-sans"
                  >
                    @patrissurf
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
