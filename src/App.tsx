/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Scale, 
  ShieldCheck, 
  Clock, 
  Users, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  MapPin,
  Briefcase,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Calculator,
  DollarSign,
  Calendar,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { GoogleGenAI } from "@google/genai";

// Función para registrar conversiones en Google Ads
export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-16641762776/URi1CK-Q04IaENjLtP89'
    });
  }
};

// --- Components ---

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Scale className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tight",
            scrolled ? "text-primary" : "text-white"
          )}>
            Despedido<span className="text-accent">Uy</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Servicios', 'Calculadora', 'Proceso', 'Testimonios', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium hover:text-accent transition-colors",
                scrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+59899039588"
            onClick={trackConversion}
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-transform active:scale-95"
          >
            <Phone size={18} />
            Llamar Ahora
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['Servicios', 'Calculadora', 'Proceso', 'Testimonios', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-700 hover:text-primary"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a 
                  href="tel:+59899039588"
                  onClick={trackConversion}
                  className="w-full bg-primary text-white text-center py-4 rounded-xl font-bold flex justify-center items-center gap-2"
                >
                  <Phone size={20} />
                  Llamar Ahora
                </a>
                <a 
                  href="https://wa.me/59891418114"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackConversion}
                  className="w-full bg-emerald-500 text-white text-center py-4 rounded-xl font-bold flex justify-center items-center gap-2"
                >
                  <WhatsAppIcon size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    departamento: 'Montevideo',
    situacion: 'Despido'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.departamento) return;
    trackConversion();
    const text = `Hola DespedidoUy. Quiero hacer una consulta.\n\n*Mis Datos:*\nNombre: ${formData.nombre}\nDepartamento: ${formData.departamento}\n\n*Mi Situación:*\n${formData.situacion}`;
    window.open(`https://wa.me/59891418114?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Law firm background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Respuesta en menos de 24hs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            ¿Tenés un problema <span className="text-accent italic">laboral?</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            Te ayudamos a reclamar lo que te corresponde. Sin vueltas, sin letra chica y con lenguaje claro. <span className="text-white font-semibold">Solo cobramos si vos cobrás.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://wa.me/59891418114"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="bg-accent hover:bg-accent/90 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-accent/20 transition-all active:scale-95 flex items-center justify-center gap-3 group"
            >
              Habla con un Abogado
              <WhatsAppIcon size={20} />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            {[
              { label: "Años de experiencia", val: "+10" },
              { label: "Casos resueltos", val: "+1200" },
              { label: "Respuesta media", val: "24hs" },
              { label: "Especializados en Derecho Laboral", val: "100%" },
            ].map((stat, i) => (
              <div key={i} className="relative pb-4">
                <p className="text-3xl font-bold text-white mb-1">{stat.val}</p>
                <p className="text-xs text-white/50 uppercase tracking-wider font-medium">{stat.label}</p>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[120px] opacity-30" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Consultanos sin compromiso</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Nombre</label>
                <input required type="text" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-all" placeholder="Tu nombre completo" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Departamento</label>
                <select required value={formData.departamento} onChange={e => setFormData({...formData, departamento: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-all appearance-none">
                  <option value="Montevideo" className="bg-primary">Montevideo</option>
                  <option value="Artigas" className="bg-primary">Artigas</option>
                  <option value="Canelones" className="bg-primary">Canelones</option>
                  <option value="Cerro Largo" className="bg-primary">Cerro Largo</option>
                  <option value="Colonia" className="bg-primary">Colonia</option>
                  <option value="Durazno" className="bg-primary">Durazno</option>
                  <option value="Flores" className="bg-primary">Flores</option>
                  <option value="Florida" className="bg-primary">Florida</option>
                  <option value="Lavalleja" className="bg-primary">Lavalleja</option>
                  <option value="Maldonado" className="bg-primary">Maldonado</option>
                  <option value="Paysandú" className="bg-primary">Paysandú</option>
                  <option value="Río Negro" className="bg-primary">Río Negro</option>
                  <option value="Rivera" className="bg-primary">Rivera</option>
                  <option value="Rocha" className="bg-primary">Rocha</option>
                  <option value="Salto" className="bg-primary">Salto</option>
                  <option value="San José" className="bg-primary">San José</option>
                  <option value="Soriano" className="bg-primary">Soriano</option>
                  <option value="Tacuarembó" className="bg-primary">Tacuarembó</option>
                  <option value="Treinta y Tres" className="bg-primary">Treinta y Tres</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Tu situación</label>
                <select value={formData.situacion} onChange={e => setFormData({...formData, situacion: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-all appearance-none">
                  <option value="Despido" className="bg-primary">Despido</option>
                  <option value="Trabajo en negro" className="bg-primary">Trabajo en negro</option>
                  <option value="Accidente laboral" className="bg-primary">Accidente laboral</option>
                  <option value="Sueldos impagos" className="bg-primary">Sueldos impagos</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-white text-primary font-bold py-5 rounded-2xl hover:bg-accent hover:text-white transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2">
                <WhatsAppIcon size={20} />
                Enviar Consulta
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Despidos",
      desc: "Defensa integral ante despidos.",
      subtitle: "Podés reclamar si:",
      items: ["No te pagaron la indemnización que corresponde", "Te hicieron firmar renuncia bajo presión", "Despido por enfermedad o embarazo", "Quieres darte por despedido indirectamente."],
      icon: <AlertCircle className="w-8 h-8 text-accent" />,
      color: "bg-slate-900"
    },
    {
      title: "Accidentes Laborales",
      desc: "Representación ante accidentes de trabajo y enfermedades profesionales.",
      subtitle: "PODÉS RECLAMAR:",
      items: ["Lesiones durante la jornada", "Problemas al reintegrarte.", "Indemnización deficiente", "Falta de atención médica"],
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      color: "bg-slate-900"
    },
    {
      title: "Sueldos y Deudas",
      desc: "Reclamo de haberes mal liquidados y diferencias.",
      subtitle: "PODÉS RECLAMAR:",
      items: ["Horas extras impagas", "Salario por debajo del mínimo.", "Diferencias salariales", "Otras Deudas Laborales"],
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      color: "bg-slate-900"
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">¿Podés reclamar?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Si te sentís identificado con alguna de estas situaciones, tenés derecho a iniciar un reclamo legal. <span className="text-primary font-bold">Te decimos si tu caso es viable sin vueltas.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[32px] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-primary rounded-2xl">
                  {s.icon}
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Especialidad</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-8 font-medium">{s.desc}</p>
              
              <div className="space-y-3 mb-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{s.subtitle}</p>
                {s.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/59891418114"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackConversion}
                className="w-full py-4 rounded-xl border-2 border-emerald-500 text-emerald-600 font-bold hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Consultar por WhatsApp
                <WhatsAppIcon size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CalculatorSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipo: 'mensual',
    monto: '',
    ingreso: '',
    egreso: '',
    diasLicencia: '',
    motivo: 'Despido común',
    nombre: '',
    departamento: 'Montevideo'
  });
  const [resultado, setResultado] = useState({
    ipd: 0,
    rubrosSalariales: 0,
    total: 0
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.monto || !formData.ingreso || !formData.egreso || !formData.diasLicencia) return;
      const fIngreso = new Date(formData.ingreso);
      const fEgreso = new Date(formData.egreso);
      if (fEgreso <= fIngreso) {
        alert("La fecha de egreso debe ser posterior a la de ingreso.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.nombre || !formData.departamento) return;
      calculate();
    }
  };

  const calculate = () => {
    const monto = parseFloat(formData.monto) || 0;
    const fIngreso = new Date(formData.ingreso);
    const fEgreso = new Date(formData.egreso);
    
    const diffTime = Math.abs(fEgreso.getTime() - fIngreso.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.ceil(diffDays / 365); // Fracción de año cuenta como año completo para IPD

    let ipd = 0;
    let sueldoMensual = formData.tipo === 'mensual' ? monto : monto * 25;

    // Incidencias para la base de cálculo de IPD
    const incidenciaAguinaldo = sueldoMensual / 12;
    const incidenciaLicencia = sueldoMensual * (20 / 300);
    const incidenciaSalarioVacacional = incidenciaLicencia * 0.85;
    const baseIPD = sueldoMensual + incidenciaAguinaldo + incidenciaLicencia + incidenciaSalarioVacacional;

    if (formData.motivo !== 'Renuncia') {
      ipd = baseIPD * Math.min(years, 6);

      // Multiplicadores por motivos especiales
      if (formData.motivo === 'Despido por enfermedad (Doble)') ipd *= 2;
      if (formData.motivo === 'Despido por accidente (Triple)') ipd *= 3;
      if (formData.motivo === 'Despido trabajadora grávida') ipd += (sueldoMensual * 6);
    }

    // Rubros Salariales
    const valorDiaLicencia = sueldoMensual / 30;
    
    // Licencia
    const diasLicencia = parseFloat(formData.diasLicencia) || 0;
    const licencia = diasLicencia * valorDiaLicencia;
    
    // Salario Vacacional
    const salarioVacacional = licencia * 0.85;

    // Aguinaldo
    const egresoMonth = fEgreso.getMonth();
    const egresoYear = fEgreso.getFullYear();
    let aguinaldoStartDate;

    if (egresoMonth >= 5 && egresoMonth <= 10) {
      aguinaldoStartDate = new Date(egresoYear, 5, 1); // 1° de junio
    } else {
      if (egresoMonth === 11) {
        aguinaldoStartDate = new Date(egresoYear, 11, 1); // 1° de diciembre
      } else {
        aguinaldoStartDate = new Date(egresoYear - 1, 11, 1); // 1° de diciembre del año anterior
      }
    }

    const actualAguinaldoStart = fIngreso > aguinaldoStartDate ? fIngreso : aguinaldoStartDate;
    const daysAguinaldo = Math.max(0, Math.ceil((fEgreso.getTime() - actualAguinaldoStart.getTime()) / (1000 * 60 * 60 * 24)));
    const totalEarningsAguinaldo = (sueldoMensual / 30) * daysAguinaldo;
    const aguinaldo = totalEarningsAguinaldo / 12;

    const rubrosSalariales = aguinaldo + licencia + salarioVacacional;

    setResultado({
      ipd: ipd,
      rubrosSalariales: rubrosSalariales,
      total: ipd + rubrosSalariales
    });
    setStep(3);
  };

  const handleWhatsApp = () => {
    trackConversion();
    const text = `Hola DespedidoUy. Usé la calculadora web.\n\n*Mis Datos:*\nNombre: ${formData.nombre}\nDepartamento: ${formData.departamento}\n\n*Mi Situación:*\nTipo: ${formData.tipo}\nMonto: $${formData.monto}\nIngreso: ${formData.ingreso}\nEgreso: ${formData.egreso}\nLicencia pendiente: ${formData.diasLicencia} días\nMotivo: ${formData.motivo}\n\n*Resultado estimado:* $${Math.round(resultado.total).toLocaleString('es-UY')}\n(IPD: $${Math.round(resultado.ipd).toLocaleString('es-UY')} | Rubros Salariales: $${Math.round(resultado.rubrosSalariales).toLocaleString('es-UY')})\n\nQuiero solicitar una consulta gratuita para analizar mi caso exacto.`;
    window.open(`https://wa.me/59891418114?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-4">
            <Calculator className="text-accent w-4 h-4" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Herramienta Gratuita</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Calculadora de Indemnización</h2>
          <p className="text-lg text-slate-600">Descubre un estimado de cuánto te corresponde.</p>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100">
            <div className={cn("flex-1 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold transition-colors", step >= 1 ? "bg-primary text-white" : "bg-slate-50 text-slate-400")}>1. Datos</div>
            <div className={cn("flex-1 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold transition-colors", step >= 2 ? "bg-primary text-white" : "bg-slate-50 text-slate-400")}>2. Contacto</div>
            <div className={cn("flex-1 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold transition-colors", step === 3 ? "bg-accent text-white" : "bg-slate-50 text-slate-400")}>3. Resultado</div>
          </div>

          <div className="p-5 sm:p-8 md:p-12">
            {step === 1 && (
              <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleNext} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Tipo de Remuneración</label>
                    <select value={formData.tipo} onChange={e => setFormData({...formData, tipo: e.target.value})} className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                      <option value="mensual">Mensual (Sueldo fijo)</option>
                      <option value="jornalero">Jornalero (Por día)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{formData.tipo === 'mensual' ? 'Salario Nominal ($, sin descuentos)' : 'Jornal Nominal ($, sin descuentos)'}</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input required type="number" min="0" value={formData.monto} onChange={e => setFormData({...formData, monto: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder={formData.tipo === 'mensual' ? "Ej: 45000" : "Ej: 1500"} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Fecha de Ingreso</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input required type="date" value={formData.ingreso} onChange={e => setFormData({...formData, ingreso: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Fecha de Egreso</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input required type="date" value={formData.egreso} onChange={e => setFormData({...formData, egreso: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Días de licencia pendientes</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input required type="number" min="0" value={formData.diasLicencia} onChange={e => setFormData({...formData, diasLicencia: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Ej: 14" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Motivo de finalización</label>
                    <select value={formData.motivo} onChange={e => setFormData({...formData, motivo: e.target.value})} className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                      <option>Despido común</option>
                      <option>Renuncia</option>
                      <option>Despido por enfermedad (Doble)</option>
                      <option>Despido por accidente (Triple)</option>
                      <option>Despido trabajadora grávida</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-8">
                  Siguiente Paso <ArrowRight size={20} />
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleNext} className="space-y-6">
                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-6 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p>Para mostrarte el cálculo exacto y poder asesorarte, necesitamos tus datos de contacto. Tu información es 100% confidencial.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input required type="text" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Ej: Juan Pérez" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Departamento</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <select required value={formData.departamento} onChange={e => setFormData({...formData, departamento: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none">
                      <option value="Montevideo">Montevideo</option>
                      <option value="Artigas">Artigas</option>
                      <option value="Canelones">Canelones</option>
                      <option value="Cerro Largo">Cerro Largo</option>
                      <option value="Colonia">Colonia</option>
                      <option value="Durazno">Durazno</option>
                      <option value="Flores">Flores</option>
                      <option value="Florida">Florida</option>
                      <option value="Lavalleja">Lavalleja</option>
                      <option value="Maldonado">Maldonado</option>
                      <option value="Paysandú">Paysandú</option>
                      <option value="Río Negro">Río Negro</option>
                      <option value="Rivera">Rivera</option>
                      <option value="Rocha">Rocha</option>
                      <option value="Salto">Salto</option>
                      <option value="San José">San José</option>
                      <option value="Soriano">Soriano</option>
                      <option value="Tacuarembó">Tacuarembó</option>
                      <option value="Treinta y Tres">Treinta y Tres</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                    Volver
                  </button>
                  <button type="submit" className="flex-1 bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                    Ver mi Cálculo
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <p className="text-slate-500 font-bold uppercase tracking-widest mb-2 text-xs sm:text-sm">Monto Total Estimado</p>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-8 flex items-center justify-center gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-4xl text-slate-400 font-medium">$</span>
                  {Math.round(resultado.total).toLocaleString('es-UY')}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between sm:block">
                    <p className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider sm:mb-1">Indemnización (IPD)</p>
                    <p className="text-lg sm:text-xl font-bold text-slate-800">$ {Math.round(resultado.ipd).toLocaleString('es-UY')}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between sm:block">
                    <p className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider sm:mb-1">Rubros Salariales</p>
                    <p className="text-lg sm:text-xl font-bold text-slate-800">$ {Math.round(resultado.rubrosSalariales).toLocaleString('es-UY')}</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl text-xs sm:text-sm mb-8 text-left leading-relaxed">
                  <strong>⚠️ Importante:</strong> Este valor es una estimación básica, no vinculante. No incluye posibles horas extras impagas u otros rubros salariales que podrían hacer variar <strong>significativamente</strong> este monto.
                </div>
                <button onClick={handleWhatsApp} className="w-full bg-emerald-500 text-white text-sm sm:text-lg font-bold py-4 sm:py-5 px-4 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 sm:gap-3 animate-pulse">
                  <WhatsAppIcon size={20} className="flex-shrink-0" />
                  <span>Solicitar Análisis Exacto por WhatsApp</span>
                </button>
                <button onClick={() => {setStep(1); setResultado({ipd:0, rubrosSalariales:0, total:0});}} className="mt-6 text-slate-400 font-medium hover:text-primary transition-colors text-sm sm:text-base">
                  Volver a calcular
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Contanos tu caso",
      desc: "Escribinos por WhatsApp hoy mismo. Aunque no tengas recibos, te orientamos sin costo. Todo es confidencial.",
      icon: "01"
    },
    {
      title: "Respondemos en 24hs",
      desc: "Estudiamos tu situación y te decimos si podés reclamar, cuánto te corresponde y cómo actuar. En lenguaje claro.",
      icon: "02"
    },
    {
      title: "Vos decidís",
      desc: "Te explicamos las opciones sin presionarte. Sin letra chica ni apuros. Vos decidís si querés avanzar o no.",
      icon: "03"
    },
    {
      title: "Actuamos juntos",
      desc: "Si decidís avanzar, comenzamos. Vas a hablar siempre con tu abogado directamente, sin intermediarios.",
      icon: "04"
    }
  ];

  return (
    <section id="proceso" className="py-16 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Cómo trabajamos</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Un proceso transparente diseñado para que te sientas respaldado en cada paso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-[32px] bg-accent text-white font-serif font-bold flex items-center justify-center text-4xl mb-8 shadow-2xl shadow-accent/20">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[40px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Nuestra Misión</h3>
            <p className="text-white/60 leading-relaxed">
              En DespedidoUy defendemos a quienes trabajan y sostienen el país. Nuestra misión es acompañarte con claridad y compromiso, para que puedas reclamar lo que te corresponde. Creemos en una abogacía cercana, rápida y humana.
            </p>
          </div>
          <button className="bg-white text-primary font-bold px-10 py-5 rounded-2xl hover:bg-accent hover:text-white transition-all whitespace-nowrap">
            Hablá con un Abogado Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo M.",
      role: "Ex-empleado Logística",
      text: "Me despidieron después de 10 años sin pagarme un peso cuando cerró la empresa. Pensé que no iba a poder cobrar nada pero se encargaron de todo y logramos un muy buen acuerdo.",
      rating: 5
    },
    {
      name: "Marta S.",
      role: "Vendedora",
      text: "Me despidieron estando embarazada. Hicimos juicio y logramos la indemnización que me pertenecía.",
      rating: 5
    },
    {
      name: "Esteban G.",
      role: "Operario",
      text: "Los contacté para firmar un acuerdo por mi despido. Recomiendo por su rapidez y seriedad.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-slate-600">La confianza de quienes ya defendimos es nuestro respaldo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative">
              <div className="flex text-accent mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
              <div className="absolute top-8 right-8 text-slate-200">
                <MessageSquare size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cuánto cuesta la consulta?",
      a: "La primera consulta es totalmente gratuita. Analizamos tu caso y te decimos si es viable iniciar un reclamo."
    },
    {
      q: "¿Cómo se manejan los honorarios?",
      a: "Trabajamos bajo la modalidad de 'Cuota Litis', lo que significa que nuestros honorarios son un porcentaje del resultado obtenido. Si tú no cobras, nosotros tampoco."
    },
    {
      q: "¿Cuánto tiempo tengo para reclamar un despido?",
      a: "El plazo de prescripción es de 1 año luego de finalizada la relación laboral."
    },
    {
      q: "¿Qué pasa si trabajo 'en negro'?",
      a: "Igualmente puedes realizar un reclamo laboral y adicionalmente ante el BPS por los aportes adeudados."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronRight className={cn("transition-transform", openIndex === i ? "rotate-90" : "")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-6">Nuestra Oficina</h2>
            <p className="text-white/70 mb-8">
              Ven a visitarnos para una atención personalizada. Estamos en una ubicación estratégica y accesible en el corazón de Montevideo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <p className="font-bold">Dirección</p>
                  <p className="text-white/60">Juncal 1408 of. 502</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Clock className="text-accent" />
                </div>
                <div>
                  <p className="font-bold">Horarios</p>
                  <p className="text-white/60">Lunes a Viernes: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Juncal+1408,+Montevideo,+Uruguay"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex bg-white text-primary font-bold px-8 py-4 rounded-xl items-center gap-2 hover:bg-accent hover:text-primary transition-all"
            >
              Cómo llegar <ArrowRight size={20} />
            </a>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto bg-slate-200 relative min-h-[400px]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=Juncal+1408,+Montevideo,+Uruguay&output=embed"
              allowFullScreen
              title="Ubicación DespedidoUy"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Scale className="text-accent w-8 h-8" />
            <span className="font-serif text-2xl font-bold tracking-tight">
              Despedido<span className="text-accent">Uy</span>
            </span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6">
            Especialistas en la defensa de los derechos del trabajador en Uruguay. Honestidad, compromiso y resultados.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/59891418114"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a 
              href="tel:+59899039588"
              onClick={trackConversion}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} DespedidoUy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a 
        href="https://wa.me/59891418114"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackConversion}
        className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl animate-bounce hover:bg-emerald-600 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      
      <Services />
      <CalculatorSection />
      <Process />
      <Testimonials />
      <FAQ />
      <LocationSection />
      
      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Hablamos de tu caso?</h2>
          <p className="text-xl text-white/70 mb-10">
            Protege tus derechos con el respaldo de un equipo especializado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/59891418114"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="bg-accent text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-xl hover:bg-accent/90 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <WhatsAppIcon size={24} />
              Habla con un Abogado
            </a>
            <a 
              href="tel:+59899039588"
              onClick={trackConversion}
              className="bg-white/10 text-white border border-white/20 text-lg font-bold px-10 py-5 rounded-2xl shadow-xl hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
