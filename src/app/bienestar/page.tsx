"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BienestarPage() {
    return (
        <div className="bg-stone-50 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors mb-12">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Volver a inicio
                </Link>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-[400px] md:h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl md:order-last"
                    >
                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Trekking/Naturaleza</span>
                        </div>
                        <Image
                            src="/images/placeholder_bienestar.jpg"
                            alt="Experiencia de Naturaleza y Bienestar"
                            fill
                            className="object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-stone-700 text-sm font-medium mb-6 shadow-sm">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span>Conexión Sensualidad & Naturaleza</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 mb-6">
                            Experiencias de Bienestar
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            Pausar para pensar y volver a vos. Desayunos con propósito, tertulias profundas y jornadas de conexión en la naturaleza para recordar quién sos debajo de tantas exigencias.
                        </p>

                        <div className="space-y-6 mt-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-stone-900">Camino Abierto (Trekking & Coaching)</h3>
                                    <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Mensual</span>
                                </div>
                                <p className="text-stone-600 mb-6 font-light">
                                    Una jornada donde la montaña es el escenario para desintoxicar la mente, caminar junto a otras personas y realizar dinámicas de reflexión en movimiento.
                                </p>
                                <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Me%20gustar%C3%ADa%20saber%20la%20pr%C3%B3xima%20fecha%20de%20Camino%20Abierto%20(Trekking)." target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium flex items-center gap-2 text-sm group hover:text-amber-600 transition-colors">
                                    Próxima fecha <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-stone-900">Desayunos con Propósito</h3>
                                </div>
                                <p className="text-stone-600 mb-6 font-light">
                                    Encuentros matutinos e íntimos en la ciudad. Abordamos temáticas específicas de liderazgo, límites y emociones compartiendo un desayuno de calidad.
                                </p>
                                <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Me%20interesa%20participar%20de%20los%20Desayunos%20con%20Prop%C3%B3sito." target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium flex items-center gap-2 text-sm group hover:text-amber-600 transition-colors">
                                    Saber más <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-stone-900">El Arte de Envejecer (Tertulia)</h3>
                                </div>
                                <p className="text-stone-600 mb-6 font-light">
                                    Un espacio sin tapujos para resignificar el paso del tiempo, el cuerpo, la vitalidad y cómo abordamos nuestra madurez desde la sabiduría.
                                </p>
                                <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Quiero%20m%C3%A1s%20info%20sobre%20la%20tertulia%20El%20Arte%20de%20Envejecer." target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium flex items-center gap-2 text-sm group hover:text-amber-600 transition-colors">
                                    Saber más <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 bg-amber-50 p-6 rounded-2xl border border-amber-100/50">
                            <p className="text-amber-900 font-medium mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-500" />¿Querés recibir novedades sobre próximos encuentros?</p>
                            <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Avisame%20cuando%20tengas%20nuevos%20encuentros%20de%20Bienestar." target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-amber-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-amber-500 transition-colors">
                                Escribime por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
