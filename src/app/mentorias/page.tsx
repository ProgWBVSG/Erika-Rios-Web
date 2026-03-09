"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MentoriasPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-olive-dark transition-colors mb-12">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Volver a inicio
                </Link>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-700 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4 text-brand-taupe" />
                            <span>Proceso Profundo</span>
                        </div>
                        <h1 className="text-4xl md:text-[#25D366]xl lg:text-[#25D366]xl font-bold tracking-tight text-brand-olive-900 mb-6">
                            Mentorías 1 a 1
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            Acompañamiento personalizado en módulos profundos: Poder Personal, El Arte de Conversar y Modelo de Negocio. Un espacio íntimo para escucharte y organizar tu verdad.
                        </p>

                        <p className="text-sm text-stone-500 italic mt-2 mb-6">Cada módulo es independiente del otro.</p>

                        <div className="space-y-6 mt-8">
                            <div className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center text-brand-olive-dark font-bold text-sm shrink-0">1</span>
                                    <h3 className="text-xl font-bold text-brand-olive-900">Poder Personal</h3>
                                </div>
                                <p className="text-sm text-brand-taupe-dark font-medium mb-2">4 encuentros · 1½ h c/u · Teórico/práctico</p>
                                <p className="text-stone-600">Te permite reconocer tus recursos internos, reflexionar en relación a tu inteligencia emocional y establecer límites sanos para liderar tu vida desde la autenticidad.</p>
                            </div>

                            <div className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center text-brand-olive-dark font-bold text-sm shrink-0">2</span>
                                    <h3 className="text-xl font-bold text-brand-olive-900">Conversaciones para la Acción</h3>
                                </div>
                                <p className="text-sm text-brand-taupe-dark font-medium mb-2">4 encuentros · 1½ h c/u · Teórico/práctico</p>
                                <p className="text-stone-600">Te permite revisar tus habilidades para una conversación asertiva y potenciar habilidades desde la comunicación no violenta, lo que permite mejorar la calidad de tus relaciones personales y profesionales.</p>
                            </div>

                            <div className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center text-brand-olive-dark font-bold text-sm shrink-0">3</span>
                                    <h3 className="text-xl font-bold text-brand-olive-900">Gestión del Tiempo</h3>
                                </div>
                                <p className="text-sm text-brand-taupe-dark font-medium mb-2">3 encuentros · 1½ h c/u</p>
                                <p className="text-stone-600">Te permite organizar y gestionar tanto el tiempo y las tareas como también tus espacios, para encontrar un equilibrio que te acerque a mejorar la productividad y el enfoque.</p>
                            </div>

                            <div className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center text-brand-olive-dark font-bold text-sm shrink-0">4</span>
                                    <h3 className="text-xl font-bold text-brand-olive-900">Negociación para Emprendedores con Sentido</h3>
                                </div>
                                <p className="text-sm text-brand-taupe-dark font-medium mb-2">4 encuentros · 1½ h c/u</p>
                                <p className="text-stone-600">Herramientas y estrategias de negociación con propósito, orientadas a emprendedores que quieren crecer sin perder su esencia ni sus valores.</p>
                            </div>
                        </div>


                        <div className="mt-12">
                            <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Quiero%20consultar%20sobre%20el%20proceso%20de%20Mentor%C3%ADas%201%20a%201." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive transition-colors shadow-xl w-full sm:w-auto">
                                Consultar disponibilidad
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl sticky top-32"
                    >
                        {/* Placeholder imagen, se puede actualizar luego */}
                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Mentoría</span>
                        </div>
                        <Image
                            src="/images/mentoria_img.jpg"
                            alt="Sesión de Mentoría 1 a 1"
                            fill
                            className="object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
