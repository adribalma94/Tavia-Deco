/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Building2, CheckCircle2, Clock, Star, MessageCircle, Instagram, MapPin } from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream selection:bg-brand-brown/20">
      {/* Top Trust Bar */}
      <div className="bg-brand-dark text-brand-cream text-[10px] py-2 text-center tracking-[0.2em] uppercase font-bold overflow-hidden">
        <div className="flex justify-center items-center gap-8 whitespace-nowrap marquee-content">
          <span>Entrega rápida en 10 días</span>
          <span className="w-1 h-1 rounded-full bg-brand-warm-tan" />
          <span>Cuotas sin interés (Miércoles y Sábados)</span>
          <span className="w-1 h-1 rounded-full bg-brand-warm-tan" />
          <span>10% OFF en efectivo</span>
        </div>
      </div>

      {/* Simple Brand Header */}
      <header className="px-6 md:px-12 py-6 flex justify-start items-center border-b border-black/5 bg-white/50 backdrop-blur-sm">
        <div className="h-40 md:h-48">
          <img 
            src="/LOGO.jpeg" 
            alt="Tavia Deco" 
            className="h-full w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left: Content */}
        <section className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center gap-6">
          <motion.div 
            {...fadeInUp}
            className="inline-flex items-center self-start px-4 py-1.5 bg-brand-tan text-brand-brown text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-brand-brown/10"
          >
            Calidad Premium • Precio de Fábrica
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl xl:text-6xl font-serif leading-[1.05] text-[#1A1A1A] tracking-tight"
          >
            El sillón de tus sueños, <br />
            <span className="italic text-brand-brown font-normal">personalizado</span> y directo de fábrica.
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-light"
          >
            Diseñamos piezas exclusivas adaptadas a tu espacio. Elegí el tamaño, la tela y el diseño. Nosotros lo hacemos realidad con materiales de alta gama y terminaciones artesanales.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-4 mt-6"
          >
            <a 
              href="https://wa.me/541166504905" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-brand-dark text-white px-8 py-5 text-base md:text-lg font-bold uppercase tracking-tighter hover:bg-[#333] transition-all flex items-center justify-between w-full max-w-sm shadow-xl active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Mi presupuesto online
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            <p className="text-[11px] text-brand-brown italic font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Respuesta inmediata por WhatsApp
            </p>
          </motion.div>
        </section>

        {/* Right: Hero Image */}
        <section className="w-full lg:w-1/2 relative bg-brand-tan min-h-[600px] overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/HERO.JPG')`,
              referrerPolicy: "no-referrer"
            } as any}
          />
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="relative z-10 w-full h-full flex items-end p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-2xl w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-brand-brown gap-4"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-brown font-bold mb-1">Configuración destacada</p>
                <p className="text-xl md:text-2xl font-serif text-[#1A1A1A] tracking-tight">Modelo Esquinero Milano en Lino Premium</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-[9px] px-2 py-0.5 bg-green-100 text-green-700 font-bold uppercase tracking-wider rounded">10% OFF Efectivo</span>
                  <span className="text-[9px] px-2 py-0.5 bg-blue-100 text-blue-700 font-bold uppercase tracking-wider rounded">Cuotas sin interés</span>
                </div>
              </div>
              <a 
                href="https://wa.me/541166504905" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sm:text-right border-t sm:border-t-0 sm:border-l border-black/5 pt-4 sm:pt-0 sm:pl-8 w-full sm:w-auto block hover:opacity-70 transition-opacity"
              >
                <p className="text-[11px] uppercase tracking-widest text-[#1A1A1A] font-bold mb-1">Consultar presupuesto</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-brand-brown font-bold underline underline-offset-4">Click para WhatsApp</p>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Catalog Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">Nuestra Colección</h2>
              <p className="text-gray-500 font-light text-lg">
                Cada pieza es única, fabricada con materiales de primera calidad y diseñada para perdurar. 
                Adaptamos cada modelo a tus necesidades de espacio y confort.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Esquinero Milano", img: "/esquinero-1.jpg" },
              { id: 2, name: "Sillón Velvet Green", img: "/sillonverde-1.jpg" },
              { id: 3, name: "Sillón Individual Nórdico", img: "/sillonindividual-1.jpg" },
              { id: 4, name: "Sillón Grey Loft", img: "/sillongris.JPG" },
              { id: 5, name: "Sillón Deep Blue", img: "/sillonazul-1.jpg" },
              { id: 6, name: "Sillón Warm Yellow", img: "/sillonverdeamarillo-1.jpg" },
              { id: 7, name: "Sillón Dark Noir", img: "/sillonoscuro-1.jpg" },
              { id: 8, name: "Colección Exclusive 1", img: "/223D486D-E826-4666-ACE8-B8F0F11CDCB4.JPG" },
              { id: 9, name: "Colección Exclusive 2", img: "/44B54DEC-20ED-41F0-BFB1-8FBDFC7DA53F.JPG" }
            ].map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-brand-tan mb-6 relative">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href="https://wa.me/541166504905" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white py-4 text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl hover:bg-brand-dark hover:text-white transition-colors block text-center"
                    >
                      Consultar Medidas
                    </a>
                  </div>
                </div>
                <h3 className="text-xl mb-1">{product.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-brand-brown font-bold">Personalizable</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="bg-white border-t border-black/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/5">
        <div className="p-10 flex flex-col items-center text-center group hover:bg-brand-cream/50 transition-colors">
          <Building2 className="w-8 h-8 mb-4 text-brand-brown group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] mb-1">Venta Directa</h3>
          <p className="text-xs text-gray-500 font-light">Sin intermediarios ni costos extra</p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group hover:bg-brand-cream/50 transition-colors">
          <CheckCircle2 className="w-8 h-8 mb-4 text-brand-brown group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] mb-1">Calidad Premium</h3>
          <p className="text-xs text-gray-500 font-light">Telas importadas y maderas macizas</p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group hover:bg-brand-cream/50 transition-colors">
          <Clock className="w-8 h-8 mb-4 text-brand-brown group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] mb-1">Entrega Record</h3>
          <p className="text-xs text-gray-500 font-light">Envío a domicilio en solo 10 días</p>
        </div>
        <div className="p-10 flex flex-col items-center text-center bg-brand-cream/30 group hover:bg-brand-cream/80 transition-colors">
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand-warm-tan text-brand-warm-tan" />
            ))}
          </div>
          <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] mb-1">+1500 Clientes Felices</h3>
          <p className="text-xs text-brand-brown italic">"Excelente calidad y terminación"</p>
        </div>
      </section>

      {/* Macrame Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Nuestros trabajos en Macramé</h2>
            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">
              Piezas artesanales tejidas a mano para darle un toque natural a tus espacios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, img: "/macrame_1.jpg" },
              { id: 2, img: "/macrame_2.png" },
              { id: 3, img: "/macrame_3.jpg" },
              { id: 4, img: "/macrame_4.jpg" }
            ].map((work) => (
              <motion.div 
                key={work.id}
                whileHover={{ scale: 1.02 }}
                className="aspect-[3/4] overflow-hidden bg-brand-tan"
              >
                <img 
                  src={work.img} 
                  alt={`Macramé ${work.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/541166504905" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-brown font-bold uppercase tracking-widest text-sm hover:text-brand-dark transition-colors border-b border-brand-brown py-1"
            >
              Consultar por diseños especiales
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Otros Trabajos Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-tan border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Otros trabajos</h2>
            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">
              Respaldos de cama, sommiers, capitoné y proyectos a medida para tu habitación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, img: "/otros_1.jpg", title: "Respaldos" },
              { id: 2, img: "/otros_2.jpg", title: "Sommiers" },
              { id: 3, img: "/otros_3.png", title: "Capitoné" },
              { id: 4, img: "/otros_4.jpg", title: "Personalizados" }
            ].map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="group bg-white p-4 shadow-sm border border-black/5"
              >
                <div className="aspect-square overflow-hidden bg-brand-tan mb-4">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-center">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/541166504905" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-brown font-bold uppercase tracking-widest text-sm hover:text-brand-dark transition-colors border-b border-brand-brown py-1"
            >
              Consultar por otros servicios
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Contactanos</h2>
          <p className="text-gray-600 mb-12 text-lg font-light">
            Estamos para asesorarte en cada detalle. Escribinos por WhatsApp, visitanos en nuestro local o seguinos en Instagram.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a 
              href="https://maps.app.goo.gl/BEG6FeNcfUEyG2hN7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-tan/30 p-8 rounded-2xl flex flex-col items-center hover:bg-brand-tan/50 transition-all cursor-pointer group"
            >
              <MapPin className="w-8 h-8 text-brand-brown mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm uppercase font-bold tracking-widest mb-2">Visitanos</h3>
              <p className="text-gray-600 font-light text-sm italic mb-4 text-center">Blanco Encalada 2255<br />Galería Las Brujas • Local 9<br />Beccar, Buenos Aires</p>
              <span className="text-[10px] uppercase font-bold text-brand-brown border-b border-brand-brown pb-1">Ver en el mapa</span>
            </a>
            <div className="bg-brand-tan/30 p-8 rounded-2xl flex flex-col items-center">
              <Instagram className="w-8 h-8 text-brand-brown mb-4" />
              <h3 className="text-sm uppercase font-bold tracking-widest mb-2">Seguinos</h3>
              <a 
                href="https://www.instagram.com/tavia.deco/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-brown hover:text-brand-dark transition-colors font-medium border-b border-brand-brown"
              >
                @tavia.deco
              </a>
            </div>
          </div>

          <a 
            href="https://wa.me/541166504905" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-[#20ba59] transition-all shadow-2xl hover:scale-105 active:scale-95 group mb-4"
          >
            <MessageCircle className="w-8 h-8 fill-white/20" />
            <span>Chatear por WhatsApp</span>
          </a>
          <p className="text-[11px] text-brand-brown font-medium italic opacity-70">
            Respuesta inmediata por especialistas en diseño
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 flex flex-col items-center text-[10px] text-gray-400 bg-white border-t border-black/5 gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-bold text-brand-dark tracking-widest uppercase">Tavia Deco S.A.</span>
            <a 
              href="https://maps.app.goo.gl/BEG6FeNcfUEyG2hN7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
            >
              <MapPin className="w-3 h-3" />
              <span>Blanco Encalada 2255, Beccar</span>
            </a>
            <span className="opacity-60">© 2025 Todos los derechos reservados.</span>
          </div>

          <div className="flex gap-8">
            <a href="https://www.instagram.com/tavia.deco/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-brown transition-colors flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span className="uppercase tracking-widest font-bold">Instagram</span>
            </a>
            <a href="https://wa.me/541166504905" target="_blank" rel="noopener noreferrer" className="hover:text-brand-brown transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="uppercase tracking-widest font-bold">WhatsApp</span>
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="underline hover:text-brand-brown transition-colors">Legales</a>
            <a href="#" className="underline hover:text-brand-brown transition-colors">Privacidad</a>
          </div>
        </div>
        
        <div className="max-w-3xl text-center leading-relaxed font-light opacity-50 border-t border-black/5 pt-8">
          This site is not part of the Meta website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </div>
      </footer>
    </div>
  );
}
