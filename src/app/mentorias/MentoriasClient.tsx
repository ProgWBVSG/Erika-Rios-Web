"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";

export default function MentoriasClient({ services }: { services: Service[] }) {
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
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-brand-olive-900 mb-6 font-serif">
                            Mentorías
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed mb-8">
                            Acompañamiento grupal o personalizado en módulos profundos. Un espacio íntimo para escucharte y organizar tu verdad.
                        </p>

                        <p className="text-sm text-stone-500 italic mt-2 mb-6">Cada módulo es independiente del otro.</p>

                        <div className="space-y-6 mt-8">
                            {services.length === 0 && <p className="text-stone-500">Pronto habrán más mentorías disponibles.</p>}
                            {services.map((svc, index) => (
                                <div key={svc.id} className="bg-brand-olive-50 p-8 rounded-2xl border border-stone-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 rounded-full bg-brand-taupe-light flex items-center justify-center text-brand-olive-dark font-bold text-sm shrink-0">{index + 1}</span>
                                        <h3 className="text-xl font-bold text-brand-olive-900">{svc.title}</h3>
                                    </div>
                                    {svc.modality && <p className="text-sm text-brand-taupe-dark font-medium mb-2">{svc.modality}</p>}
                                    <p className="text-stone-600 whitespace-pre-wrap">{svc.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <a href="https://wa.me/5493572440360?text=Hola%20Erika!%20Quiero%20consultar%20sobre%20el%20proceso%20de%20Mentor%C3%ADas." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive transition-colors shadow-xl w-full sm:w-auto">
                                Consultar disponibilidad
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
                            <span className="text-stone-400 font-medium tracking-widest uppercase">Fotografía Mentoría</span>
                        </div>
                        <Image
                            src="/images/mentoria_img.jpg"
                            alt="Sesión de Mentoría"
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
