"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CoachingClient() {
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
                            <Heart className="w-4 h-4 text-brand-taupe" />
                            <span>Acompañamiento Personalizado</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-brand-olive-900 mb-6 font-serif">
                            Procesos de Coaching 1 a 1
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            Son encuentros confidenciales (virtuales o presenciales) de 60 minutos. Exploramos en profundidad aquello que querés desarmar o mirar distinto, al ritmo que necesites y sin fórmulas rígidas.
                        </p>

                        <div className="space-y-6 mt-8">
                            <div className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                <h3 className="text-xl font-bold text-brand-olive-900 mb-4">¿Cómo funciona?</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Sesiones individuales de 60 minutos, virtuales o presenciales.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Espacio confidencial, sin juicios ni apuros.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Avanzamos a tu ritmo, sin fórmulas rígidas ni recetas predefinidas.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Integración de cuerpo, emoción y lenguaje en cada encuentro.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                <h3 className="text-xl font-bold text-brand-olive-900 mb-4">¿Para quién es?</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Profesionales y líderes que acompañan a otros (coaches, terapeutas, docentes).</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Personas que sienten que están en &quot;piloto automático&quot; y buscan reconectarse con su autenticidad.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-taupe-dark shrink-0 mt-0.5" />
                                        <span className="text-stone-600">Líderes ejecutivos que buscan un liderazgo más consciente y evolutivo.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-brand-taupe pl-6 my-10 py-2">
                            <p className="text-xl text-brand-olive-dark font-serif italic mb-2">&quot;El impacto genuino no nace de la fuerza, sino de la presencia.&quot;</p>
                            <footer className="text-sm font-bold text-stone-500">— Erika Rios</footer>
                        </blockquote>

                        <div className="mt-8 bg-brand-taupe-50 p-6 rounded-2xl border border-brand-taupe-50/50">
                            <p className="text-brand-taupe-dark font-medium mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-brand-taupe" />
                                ¿Sentís que es tu momento? Escribime.
                            </p>
                            <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Quiero%20consultar%20sobre%20los%20Procesos%20de%20Coaching%201%20a%201." target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive transition-colors shadow-xl">
                                Agendar charla exploratoria
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl sticky top-32 hidden md:block"
                    >
                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Coaching</span>
                        </div>
                        <Image
                            src="https://i.postimg.cc/x8Hcr5MK/Erika-Sesion-7-(1).jpg"
                            alt="Proceso de Coaching 1 a 1 con Erika Rios"
                            fill
                            unoptimized
                            className="object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
