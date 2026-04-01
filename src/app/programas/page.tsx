"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramasPage() {
    return (
        <div className="bg-brand-olive-50 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-olive-dark transition-colors mb-12">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Volver a inicio
                </Link>

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-stone-100 text-sm font-medium mb-6 shadow-sm">
                            <Users className="w-4 h-4 text-brand-taupe" />
                            <span>Inmersiones Colectivas</span>
                        </div>
                        <h1 className="text-4xl md:text-[#25D366]xl lg:text-[#25D366]xl font-bold tracking-tight text-brand-olive-900 mb-6">
                            Programas Grupales
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            Inmersiones profundas donde fomentamos la escucha activa, la compasión y transformamos el enfoque automático de nuestras vidas.
                        </p>
                    </motion.div>
                </div>

                {/* Programa 1: Aprender a Aprender (Estrella) */}
                <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl border border-stone-100 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-taupe-500/5 -skew-x-12 translate-x-32 hidden md:block"></div>

                    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <span className="text-brand-taupe-dark font-bold uppercase tracking-widest text-sm mb-4 block">Programa Estrella</span>
                            <h2 className="text-[#25D366]xl md:text-[#25D366]xl font-bold text-brand-olive-900 mb-6 font-serif">Aprender a Aprender</h2>
                            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                                El mundo cambia rápido, y sostener viejas formas de percibir y accionar ya no es suficiente. Este programa de 4 meses es una provocación profunda para revisar tus certezas y abrir espacio a lo nuevo.
                            </p>

                            <ul className="space-y-4 mb-10 text-stone-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-taupe-50 flex items-center justify-center shrink-0 mt-1"><Sparkles className="w-3 h-3 text-brand-taupe-dark" /></div>
                                    <p>Descubre creencias invisibles que dirigen tu forma de ser, obstáculos que te impiden avanzar y explorar una nueva perspectiva conectada con las posibilidades.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-taupe-50 flex items-center justify-center shrink-0 mt-1"><Sparkles className="w-3 h-3 text-brand-taupe-dark" /></div>
                                    <p>Reconocer y comprender las propias emociones y estados de ánimo para escuchar nuestra casa cuerpo es fundamental.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-taupe-50 flex items-center justify-center shrink-0 mt-1"><Sparkles className="w-3 h-3 text-brand-taupe-dark" /></div>
                                    <p>Cultiva el pensamiento crítico y la creatividad.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-taupe-50 flex items-center justify-center shrink-0 mt-1"><Sparkles className="w-3 h-3 text-brand-taupe-dark" /></div>
                                    <p>Integra practicas de mindfulnes y bienestar integral.</p>
                                </li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Quiero%20saber%20m%C3%A1s%20e%20inscribirme%20al%20programa%20Aprender%20a%20Aprender." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive transition-colors shadow-xl">
                                    Quiero inscribirme
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                                <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Aprender</span>
                            </div>
                            <Image
                                src="/images/FotoAprenderAAprender.jpeg"
                                alt="Aprender a Aprender"
                                fill
                                className="object-cover"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                        </div>
                    </div>
                </div>

                {/* Programa 2: Diseña tu Identidad */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] md:h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl order-last md:order-first">
                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Identidad</span>
                        </div>
                        <Image
                            src="/images/identidad_img.jpg"
                            alt="Diseña tu Identidad"
                            fill
                            className="object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </div>

                    <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-sm border border-stone-100">
                        <h2 className="text-[#25D366]xl md:text-4xl font-bold text-brand-olive-900 mb-6 font-serif">Diseña tu Identidad</h2>
                        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                            Dejamos de intentar reparar "lo que somos" para empezar a diseñar, de forma lúdica y consciente, <strong>quiénes queremos ser.</strong> Una inmersión transformadora para dejar ir la vieja personalidad.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4 p-4 rounded-xl bg-brand-olive-50 border border-stone-100">
                                <BookOpen className="w-6 h-6 text-brand-taupe shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-olive-900">Mapeo de la Vieja Identidad</h4>
                                    <p className="text-sm text-stone-600 mt-1">Reconocer rutinas y patrones automáticos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-brand-olive-50 border border-stone-100">
                                <Sparkles className="w-6 h-6 text-brand-taupe shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-olive-900">Construcción de Futuro</h4>
                                    <p className="text-sm text-stone-600 mt-1">Generar acciones consistentes con el ser audaz que declaramos ser.</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Me%20interesa%20sumarme%20al%20desaf%C3%ADo%20Dise%C3%B1a%20tu%20Identidad." target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-brand-taupe-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-taupe-500 transition-colors shadow-lg">
                            Sumate al desafío
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
