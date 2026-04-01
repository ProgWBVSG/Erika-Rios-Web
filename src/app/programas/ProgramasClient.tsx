"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";

export default function ProgramasClient({ services }: { services: Service[] }) {
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
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-brand-olive-900 mb-6 font-serif">
                            Programas Grupales
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            Inmersiones profundas donde fomentamos la escucha activa, la compasión y transformamos el enfoque automático de nuestras vidas.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-16">
                    {services.length === 0 && <p className="text-center text-stone-500">Pronto habrán nuevos programas disponibles.</p>}
                    {services.map((svc, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={svc.id} className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl border border-stone-100 relative overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                                    <div className={isEven ? "order-1" : "order-1 md:order-2"}>
                                        {svc.modality && <span className="text-brand-taupe-dark font-bold uppercase tracking-widest text-sm mb-4 block">{svc.modality}</span>}
                                        <h2 className="text-3xl md:text-4xl font-bold text-brand-olive-900 mb-6 font-serif">{svc.title}</h2>
                                        <p className="text-stone-600 text-lg mb-8 leading-relaxed whitespace-pre-wrap">
                                            {svc.description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <a href={`https://wa.me/5493572440360?text=Hola Erika! Quiero saber más sobre el programa ${encodeURIComponent(svc.title)}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive transition-colors shadow-xl">
                                                Quiero inscribirme
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className={`relative h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía</span>
                                        </div>
                                        {svc.image_url ? (
                                           <Image src={svc.image_url} alt={svc.title} fill className="object-cover" />
                                        ) : (
                                           <Image src={isEven ? "/images/FotoAprenderAAprender.jpeg" : "/images/identidad_img.jpg"} alt={svc.title} fill className="object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}
