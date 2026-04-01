"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";

export default function BienestarClient({ services }: { services: Service[] }) {
    return (
        <div className="bg-brand-olive-50 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-olive-dark transition-colors mb-12">
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
                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Naturaleza</span>
                        </div>
                        <Image
                            src="/images/bienestar_img.jpg"
                            alt="Experiencia Bienestar"
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
                            <Sparkles className="w-4 h-4 text-brand-taupe" />
                            <span>Conexión & Naturaleza</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-brand-olive-900 mb-6 font-serif">
                            Experiencias de Bienestar
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            La pausa para reflexionar y volver a uno mismo siendo parte fundamental del sistema al que perteneces.
                        </p>

                        <div className="space-y-6 mt-12">
                            {services.length === 0 && <p className="text-stone-500">Pronto habrán más experiencias disponibles.</p>}
                            {services.map((svc) => (
                                <div key={svc.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-brand-olive-900">{svc.title}</h3>
                                        {svc.modality && <span className="text-brand-taupe-dark bg-brand-taupe-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{svc.modality}</span>}
                                    </div>
                                    <p className="text-stone-600 mb-6 font-light whitespace-pre-wrap">{svc.description}</p>
                                    <a href={`https://wa.me/5493572440360?text=Hola Erika! Me gustaría saber más sobre ${encodeURIComponent(svc.title)}`} target="_blank" rel="noopener noreferrer" className="text-brand-olive-900 font-medium flex items-center gap-2 text-sm group hover:text-brand-taupe-dark transition-colors">
                                        Saber más <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-brand-taupe-50 p-6 rounded-2xl border border-brand-taupe-50/50">
                            <p className="text-brand-taupe-dark font-medium mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-taupe" />¿Querés recibir novedades sobre próximos encuentros?</p>
                            <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Avisame%20cuando%20tengas%20nuevos%20encuentros%20de%20Bienestar." target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-taupe-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-taupe-500 transition-colors">
                                Escribime por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
