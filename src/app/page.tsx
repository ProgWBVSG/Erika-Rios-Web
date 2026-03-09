"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, Users, Compass, HelpCircle, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  // Abrir automáticamente después de 30 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFaqOpen(true);
    }, 30000); // 30 segundos

    return () => clearTimeout(timer); // Limpieza si el componente se desmonta
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  const faqs = [
    {
      q: "¿Cómo son las sesiones 1 a 1?",
      a: "Son encuentros confidenciales (virtuales o presenciales) de 60 minutos. Exploramos en profundidad aquello que querés desarmar o mirar distinto, al ritmo que necesites y sin fórmulas rígidas."
    },
    {
      q: "¿En qué se diferencia el Programa 'Aprender a Aprender'?",
      a: "No es un curso teórico. Es un recorrido inmersivo de 4 meses donde integramos el cuerpo, la emoción y el lenguaje a través de talleres grupales, rutas individuales y acompañamiento personal."
    },
    {
      q: "¿Necesito conocimientos previos?",
      a: "En absoluto. Solo disposición para cuestionar el automático y apertura para transitar un proceso de aprendizaje."
    },
    {
      q: "¿Qué medios de pago aceptan?",
      a: "Aceptamos transferencias bancarias locales e internacionales. Para el programa podés consultar nuestros planes de financiación en cuotas."
    }
  ];

  return (
    <main className="min-h-screen bg-brand-olive-50 text-brand-olive-900 font-sans selection:bg-brand-taupe-light selection:text-brand-taupe-dark">

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-stone-200/50 bg-brand-olive-50/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-brand-olive-dark">ERIKA RIOS</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#sobre-mi" className="hover:text-brand-taupe-dark transition-colors">Sobre mí</a>
            <a href="#servicios" className="hover:text-brand-taupe-dark transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-brand-taupe-dark transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-olive transition-colors">
            Agendar Sesión
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/50 text-stone-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-brand-taupe" />
              <span>Embajadora del Liderazgo Evolutivo</span>
            </div>

            <h1 className="text-[#25D366]xl md:text-[#25D366]xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 text-brand-olive-900">
              Liderazgo audaz y consciencia evolutiva.
            </h1>

            <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg">
              Te acompaño a trascender tus límites, explorar tu autenticidad y liderar desde tu ser más elevado. Un espacio para quienes buscan una transformación real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="flex items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive transition-colors">
                Iniciar mi proceso
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#sobre-mi" className="flex items-center justify-center px-8 py-4 rounded-full font-medium border border-stone-300 hover:bg-stone-100 transition-colors text-stone-700">
                Conocer más
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full max-w-md mx-auto md:ml-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/erika_hero_real.jpg"
              alt="Erika Rios - Portada"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/erika_about_real.jpg"
              alt="Erika Rios"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <span className="text-brand-taupe-dark font-medium tracking-widest uppercase text-sm mb-4 block">Sobre mí</span>
            <h2 className="text-4xl md:text-[#25D366]xl font-bold mb-8 text-brand-olive-900 tracking-tight">Bienvenida consciencia</h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>Soy Erika Rios, creadora de Bienvenida Consciencia. Mi enfoque es disruptivo y está orientado a acompañar a quienes buscan trascender sus límites y explorar su autenticidad.</p>
              <p>Combino coaching, mentorías y talleres de aprendizaje para acompañar a la industria de personas que asisten a otros. Líderes y profesionales en procesos de transformación profunda, reconectándolos con su esencia.</p>
              <p>Mi propuesta es clara: fomentar un <strong>liderazgo audaz</strong>. Desafiar lo establecido, tomar decisiones desde la intuición y animarse a liderar sin miedo a transformarse a uno mismo.</p>

              <blockquote className="border-l-4 border-brand-taupe pl-6 my-8 py-2">
                <p className="text-xl text-brand-olive-dark font-serif italic mb-2">"El impacto genuino no nace de la fuerza, sino de la presencia. Suelta la carga de controlarlo todo, enciende tu luz y transfórmate en la inspiración que tu entorno necesita hoy."</p>
                <footer className="text-sm font-bold text-stone-500">— Erika Rios</footer>
              </blockquote>

              <div className="pt-8 mt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-6 sm:items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-taupe-50 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-brand-taupe-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-olive-900">Creadora</p>
                    <p className="text-sm text-stone-500">Bienvenida Consciencia</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-stone-200"></div>
                <a href="#contacto" className="text-brand-taupe-dark font-medium hover:text-brand-taupe-dark flex items-center gap-2 group">
                  Agendar charla exploratoria
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-brand-taupe font-medium tracking-widest uppercase text-sm mb-4 block">Mi Trabajo</span>
            <h2 className="text-4xl md:text-[#25D366]xl font-bold mb-6 tracking-tight">Desde tu ser, transforma lo complejo en algo simple.</h2>
            <p className="text-stone-400 text-lg">Diseño espacios de reflexión, aprendizaje y evolución para que puedas construir tu camino con claridad y propósito.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-stone-800/50 p-10 rounded-2xl border border-stone-700/50 hover:border-brand-taupe/30 transition-colors group flex flex-col"
            >
              <Compass className="w-10 h-10 text-brand-taupe mb-6" />
              <h3 className="text-[#25D366]xl font-bold mb-4">Mentorías 1 a 1</h3>
              <p className="text-stone-400 mb-8 flex-grow">Acompañamiento personalizado en módulos profundos: Poder Personal, El Arte de Conversar y Modelo de Negocio. Un espacio íntimo para escucharte y organizar tu verdad.</p>
              <Link href="/mentorias" className="text-brand-taupe font-medium text-sm flex items-center gap-2 w-fit group-hover:text-amber-300 transition-colors">
                Consultar mentorías <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-stone-800/50 p-10 rounded-2xl border border-stone-700/50 hover:border-brand-taupe/30 transition-colors group flex flex-col"
            >
              <Sparkles className="w-10 h-10 text-brand-taupe mb-6" />
              <h3 className="text-[#25D366]xl font-bold mb-4">Experiencias de Bienestar</h3>
              <p className="text-stone-400 mb-8 flex-grow">Desayunos con propósito, tertulias "El Arte de Envejecer", y jornadas de Trekking y Coaching ("Camino Abierto"). Pausamos para pensar y volver a vos.</p>
              <Link href="/bienestar" className="text-brand-taupe font-medium text-sm flex items-center gap-2 w-fit group-hover:text-amber-300 transition-colors">
                Conocer encuentros <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-stone-800/50 p-10 rounded-2xl border border-stone-700/50 hover:border-brand-taupe/30 transition-colors group flex flex-col"
            >
              <Users className="w-10 h-10 text-brand-taupe mb-6" />
              <h3 className="text-[#25D366]xl font-bold mb-4">Programas Grupales</h3>
              <p className="text-stone-400 mb-8 flex-grow">Inmersiones profundas como "Diseña tu Identidad" o "Aprender a Aprender". Fomentamos la escucha activa, la compasión y transformamos el enfoque automático de nuestras vidas.</p>
              <Link href="/programas" className="text-brand-taupe font-medium text-sm flex items-center gap-2 w-fit group-hover:text-amber-300 transition-colors">
                Ver programas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flagship Program Section */}
      <section className="py-24 bg-stone-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-brand-taupe-dark font-medium tracking-widest uppercase text-sm mb-4 block" id="aprender">Programa Estrella</span>
            <h2 className="text-4xl md:text-[#25D366]xl font-bold mb-6 text-brand-olive-dark tracking-tight">Aprender a Aprender</h2>
            <p className="text-xl text-stone-600 mb-8 font-serif italic">&quot;Desde tu ser, transforma lo complejo en algo simple.&quot;</p>
            <p className="text-stone-600 mb-8">Un itinerario profundo de 4 meses diseñado para quienes buscan desaprender viejos patrones y abrazar una nueva forma de ver su vida, fomentando la adaptabilidad, autoconsciencia y la innovación.</p>

            <ul className="space-y-6 mb-10 text-stone-700">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center shrink-0">1</div>
                <div>
                  <strong className="block text-brand-olive-900 text-lg">9 Talleres Online Grupales</strong>
                  <span>Espacios de aprendizaje vivencial y reflexivo (1 cada dos semanas, 2.5 hs c/u).</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center shrink-0">2</div>
                <div>
                  <strong className="block text-brand-olive-900 text-lg">5 Rutas de Aprendizaje Individual</strong>
                  <span>Lecturas y prácticas que podés hacer a tu propio ritmo para anclar el conocimiento.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center shrink-0">3</div>
                <div>
                  <strong className="block text-brand-olive-900 text-lg">4 Sesiones de Coaching 1 a 1</strong>
                  <span>1 mensual. Un espacio personal para profundizar tus propios desafíos en el programa.</span>
                </div>
              </li>
            </ul>

            <div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-taupe-500"></div>
              <p className="font-bold text-brand-olive-900 text-lg mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-taupe" />
                Próxima Edición: 31 de Julio – 20 hs (Arg)
              </p>
              <p className="text-stone-600 mb-6">Modalidad virtual por Zoom • Duración total: 4 meses (16 semanas)</p>

              <a href="#contacto" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-olive hover:shadow-lg transition-all group">
                Reservar tu lugar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-stone-400 mt-4 text-center sm:text-left">* Exclusivo. Cupos limitados para asegurar la intimidad del grupo.</p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/aprender_img.jpg"
              alt="Taller Aprender a Aprender"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Art & Reflection Section */}
      <section id="arte" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-brand-taupe font-medium tracking-widest uppercase text-sm mb-4 block">Arte y Reflexión</span>
            <h2 className="text-4xl md:text-[#25D366]xl font-bold mb-6 text-brand-olive-dark tracking-tight">El lienzo como espejo del alma.</h2>
            <p className="text-stone-600 text-lg">Un espacio donde el color y la pintura se encuentran con el autodescubrimiento. A través de mis cuadros, capturo y comparto las reflexiones que nacen de cuestionar lo preestablecido.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Pintura Contenedor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl bg-stone-100 aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center border border-stone-200"
            >
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              {/* Aquí Erika subirá la foto de su cuadro. Por ahora un placeholder estético */}
              <div className="text-stone-400 font-medium flex flex-col items-center gap-4 p-8 text-center relative z-20 group-hover:opacity-0 transition-opacity">
                <Sparkles className="w-8 h-8 opacity-50" />
                <p>Erika: Podrás subir la foto de tu pintura aquí</p>
                <span className="text-sm opacity-60">"Confía que donde estás es donde debes estar"</span>
              </div>
              <Image
                src="/images/placeholder_art.jpg"
                alt="Cuadro: Confía que donde estás es donde debes estar"
                fill
                className="object-cover opacity-0 transition-opacity duration-500"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>

            {/* Reflexión Contenedor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-brand-olive-50 p-8 md:p-12 rounded-2xl border border-stone-100 relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BookOpen className="w-24 h-24 text-brand-olive-dark" />
              </div>
              <h3 className="text-[#25D366]xl font-bold text-brand-olive-900 mb-6 italic font-serif">"Confía que donde estás es donde debés estar."</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed relative z-10">
                <p>¿Qué tanto confiamos cuando estamos atravesados por miedos? Miedos que se disfrazan de exigencias:</p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>Las expectativas de mamá, papá, pareja, hijos.</li>
                  <li>La presión laboral y la "obligación" de ser infalibles.</li>
                  <li>El miedo a perder nuestro falso lugar seguro.</li>
                </ul>
                <p>Aprendí que la vida no me exige ser perfecta. Solo me pide que esté presente, y que cada miedo, si lo escucho profundamente, puede volverse motor de transformación.</p>
                <p className="font-bold text-brand-olive-900 pt-4 border-t border-stone-200 mt-6 block">¿Cuál sería en vos ese cambio urgente si te despojaras por completo de tus miedos hoy?</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contacto" className="py-24 bg-stone-900 text-stone-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-4xl md:text-[#25D366]xl font-bold mb-6 text-white tracking-tight">Empecemos tu proceso.</h2>
            <p className="text-xl text-stone-400 mb-10 leading-relaxed font-light">
              Este es un espacio confidencial, sin juicios ni apuros. Si algo de lo que leíste te resonó y sentís que es el momento, escribime. Podemos charlar y ver juntos cuál es tu próximo paso.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Estoy%20viendo%20tu%20web%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl bg-stone-800/50 hover:bg-brand-olive border border-stone-700/50 transition-colors">
                <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-taupe transition-colors">WhatsApp Directo</h4>
                  <p className="text-sm text-stone-400">Respuesta más rápida</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 shadow-xl">
            <h3 className="text-[#25D366]xl font-bold mb-6 text-white block border-b border-stone-700 pb-4">Dejame tu mensaje</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1" htmlFor="nombre">Nombre completo</label>
                <input type="text" id="nombre" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-amber-500 transition-all" placeholder="Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1" htmlFor="correo">Correo electrónico</label>
                <input type="email" id="correo" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-amber-500 transition-all" placeholder="juan@correo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1" htmlFor="asunto">Asunto de consulta</label>
                <input type="text" id="asunto" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-amber-500 transition-all" placeholder="Interés en Mentoría" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1" htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" rows={4} className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Hola Erika, te escribo porque..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-taupe-dark text-white font-bold py-4 rounded-lg hover:bg-brand-taupe-500 transition-colors mt-2">
                Enviar Mensaje Segura
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 text-center border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-xl font-bold tracking-tighter text-stone-300">ERIKA RIOS</span>
          <p>© 2026 Erika Rios Consulting. Todos los derechos reservados.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 px-5 py-2 border border-stone-700 rounded-full text-sm text-stone-400 hover:bg-stone-800 hover:text-stone-200 transition-all"
          >
            ↑ Volver al inicio
          </button>
        </div>
      </footer>

      {/* FAQ Bubble & Modal */}
      <div className="fixed bottom-[92px] right-6 z-50">
        {/* Floating FAQ Button */}
        <button
          onClick={() => setIsFaqOpen(!isFaqOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 ${isFaqOpen
            ? 'bg-stone-800 text-white rotate-90 shadow-stone-900/20'
            : 'bg-white text-brand-olive-dark border border-stone-200 hover:bg-brand-olive-50 hover:shadow-xl'
            }`}
          aria-label="Preguntas Frecuentes"
        >
          {isFaqOpen ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
        </button>

        {/* Floating FAQ Panel */}
        <AnimatePresence>
          {isFaqOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-[calc(100vw-3rem)] sm:w-[380px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 overflow-hidden flex flex-col"
              style={{ maxHeight: 'calc(100vh - 180px)' }}
            >
              {/* FAQ Header */}
              <div className="bg-brand-olive-dark text-white p-5">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-taupe" />
                  Preguntas Frecuentes
                </h3>
                <p className="text-stone-400 text-sm mt-1">Resolvemos tus dudas rápidas</p>
              </div>

              {/* FAQ Body (Scrollable) */}
              <div className="overflow-y-auto p-2" style={{ maxHeight: '400px' }}>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-stone-100 last:border-0">
                    <button
                      onClick={() => setOpenQuestionIndex(openQuestionIndex === index ? null : index)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-brand-olive-50 transition-colors rounded-lg"
                    >
                      <span className="font-medium text-brand-olive-dark text-sm">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${openQuestionIndex === index ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestionIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="p-4 pt-0 text-sm text-stone-600 leading-relaxed bg-brand-olive-50/50">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* FAQ Footer CTA */}
              <div className="p-4 bg-brand-olive-50 border-t border-stone-100 text-center">
                <p className="text-xs text-stone-500 mb-2">¿Tenés otra consulta?</p>
                <a
                  href="https://wa.me/5493572440360?text=Hola%20Erika!%20Estaba%20leyendo%20las%20Preguntas%20Frecuentes%20y%20tengo%20una%20duda%20adicional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-taupe-dark hover:text-brand-taupe-dark transition-colors"
                >
                  Escribime por WhatsApp →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/5493572440360?text=Hola%20Erika!%20Estoy%20viendo%20tu%20web%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[#25D366]/30 transition-all group"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:rotate-12 transition-transform">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
