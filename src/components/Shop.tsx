import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight, Check, Heart } from 'lucide-react';

interface ShopProps {
  lang: 'es' | 'en';
}

export default function Shop({ lang }: ShopProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const content = {
    es: {
      tag: 'ROPA DE PATRIS',
      title: 'Viste los colores.',
      subtitle: 'Nuestra colección de ropa lleva el logo y los colores de Patris Surf. Pide tu prenda enviando un email a patrissurf@gmail.com con el asunto "Pedido ropa".',
      ctaDetails: 'Ver Detalle',
      favAdded: 'Guardado en Favoritos',
      viewAllBtn: 'Hacer un Pedido',
      modalAddToCart: 'Pedir esta Prenda',
      modalSizeLabel: 'Tallas disponibles',
      modalSpecsLabel: 'Información del producto',
      contactPrompt: 'Realiza tu pedido por email a patrissurf@gmail.com indicando en el asunto "Pedido ropa".',
      specs: [
        'Diseñada con el logo oficial de Patris Surf.',
        'Materiales de calidad pensados para el uso deportivo y cotidiano.',
        'Consulta la tabla de tallas antes de realizar el pedido.',
        'Pedidos por email: patrissurf@gmail.com — asunto "Pedido ropa".'
      ],
      products: [
        {
          id: 'sudadera-gris',
          title: 'Sudadera Gris',
          category: 'SUDADERAS',
          price: '50€',
          description: 'Sudadera Patris Surf en color gris. Cómoda y duradera para el día a día y la práctica deportiva.',
          image: '/Captura de pantalla 2026-05-28 122257.png',
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
          id: 'sudadera-azul-marino',
          title: 'Sudadera Azul Marino',
          category: 'SUDADERAS',
          price: '50€',
          description: 'Sudadera Patris Surf en color azul marino. El color representativo del club, ideal para lucir en el agua y fuera de ella.',
          image: '/Captura de pantalla 2026-05-28 122311.png',
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
          id: 'sudadera-azul-bondi',
          title: 'Sudadera Azul Bondi',
          category: 'SUDADERAS',
          price: '50€',
          description: 'Sudadera Patris Surf en color azul Bondi. Un tono vibrante que evoca el mar del Cantábrico.',
          image: '/Captura de pantalla 2026-05-28 122324.png',
          sizes: ['S', 'M', 'L']
        },
        {
          id: 'sudadera-capucha',
          title: 'Sudadera con Capucha',
          category: 'SUDADERAS',
          price: '50€',
          description: 'Sudadera con capucha Patris Surf en azul marino. Perfecta para los días frescos en la playa de la Zurriola.',
          image: '/Captura de pantalla 2026-05-28 122339.png',
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
          id: 'camiseta-blanca',
          title: 'Camiseta Blanca',
          category: 'CAMISETAS',
          price: '25€',
          description: 'Camiseta Patris Surf en color blanco. Ligera y fresca para los días de playa y entrenamientos.',
          image: '/Captura de pantalla 2026-05-28 122353.png',
          sizes: ['XS', 'S', 'M', 'L']
        },
        {
          id: 'camiseta-azul',
          title: 'Camiseta Azul',
          category: 'CAMISETAS',
          price: '25€',
          description: 'Camiseta Patris Surf en color azul. Consulta tallas disponibles directamente por email antes de realizar el pedido.',
          image: '/Captura de pantalla 2026-05-28 122411.png',
          sizes: ['Consultar']
        }
      ]
    },
    en: {
      tag: 'PATRIS CLOTHING',
      title: 'Wear the colours.',
      subtitle: 'Our clothing collection carries the Patris Surf logo and colours. Place your order by emailing patrissurf@gmail.com with the subject "Pedido ropa".',
      ctaDetails: 'View Details',
      favAdded: 'Saved to Favourites',
      viewAllBtn: 'Place an Order',
      modalAddToCart: 'Order this Item',
      modalSizeLabel: 'Available sizes',
      modalSpecsLabel: 'Product information',
      contactPrompt: 'Place your order by email at patrissurf@gmail.com with subject "Pedido ropa".',
      specs: [
        'Designed with the official Patris Surf logo.',
        'Quality materials suited for sport and everyday use.',
        'Check the size guide before placing your order.',
        'Orders by email: patrissurf@gmail.com — subject "Pedido ropa".'
      ],
      products: [
        {
          id: 'sudadera-gris',
          title: 'Grey Sweatshirt',
          category: 'SWEATSHIRTS',
          price: '€50',
          description: 'Patris Surf sweatshirt in grey. Comfortable and durable for everyday use and sport.',
          image: '/Captura de pantalla 2026-05-28 122257.png',
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
          id: 'sudadera-azul-marino',
          title: 'Navy Blue Sweatshirt',
          category: 'SWEATSHIRTS',
          price: '€50',
          description: "Patris Surf sweatshirt in navy blue — the club's signature colour, perfect in and out of the water.",
          image: '/Captura de pantalla 2026-05-28 122311.png',
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
          id: 'sudadera-azul-bondi',
          title: 'Bondi Blue Sweatshirt',
          category: 'SWEATSHIRTS',
          price: '€50',
          description: 'Patris Surf sweatshirt in Bondi blue — a vibrant shade that echoes the Cantabrian Sea.',
          image: '/Captura de pantalla 2026-05-28 122324.png',
          sizes: ['S', 'M', 'L']
        },
        {
          id: 'sudadera-capucha',
          title: 'Hooded Sweatshirt',
          category: 'SWEATSHIRTS',
          price: '€50',
          description: 'Patris Surf hooded sweatshirt in navy blue. Perfect for cool days at La Zurriola beach.',
          image: '/Captura de pantalla 2026-05-28 122335.png',
          sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
          id: 'camiseta-blanca',
          title: 'White T-Shirt',
          category: 'TEES',
          price: '25€',
          description: 'Patris Surf t-shirt in white. Light and fresh for beach days and training sessions.',
          image: '/Captura de pantalla 2026-05-28 122353.png',
          sizes: ['XS', 'S', 'M', 'L']
        },
        {
          id: 'camiseta-azul',
          title: 'Blue T-Shirt',
          category: 'TEES',
          price: '25€',
          description: 'Patris Surf t-shirt in blue. Please check available sizes directly by email before ordering.',
          image: '/Captura de pantalla 2026-05-28 122411.png',
          sizes: ['Check sizes']
        }
      ]
    }
  };

  const current = content[lang];

  const toggleFav = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(n => n !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section id="shop" className="relative py-24 md:py-32 bg-[#ffffff] border-t border-slate-100 overflow-hidden text-left">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-slate-50/50 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title Deck */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xs text-[#04f3af] font-bold tracking-[0.3em] uppercase mb-4 block">
            {current.tag}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-[#020617] mb-6 uppercase">
            {current.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 font-light leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Product Cards Block */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-16" id="apparel-grid-deck">
          {current.products.map((p) => {
            const isFav = favorites.includes(p.id);
            return (
              <div
                key={p.id}
                className="group relative cursor-default flex flex-col justify-between h-full rounded-none bg-white border border-slate-200 hover:border-[#04f3af]/45 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden border-b border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />

                  {/* Favourite heart clicker */}
                  <button
                    onClick={() => toggleFav(p.id)}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-none bg-white/95 border border-slate-200 text-slate-800 hover:text-[#04f3af] hover:border-[#04f3af] transition-all"
                    aria-label="Add Favorites"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-[#04f3af] text-[#04f3af]' : 'text-slate-700 hover:text-slate-900'}`} />
                  </button>

                  {/* Category overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2.5 py-1 text-[8px] font-mono font-bold tracking-widest text-[#04f3af] bg-white border border-[#04f3af]/20 uppercase">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content info block */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display font-black text-md sm:text-lg text-[#020617] group-hover:text-[#04f3af] transition-colors uppercase tracking-tight">
                        {p.title}
                      </h3>
                      <span className="font-display font-black text-lg text-[#04f3af]">
                        {p.price}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-500 font-light leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  {/* Click detail trigger */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-[#04f3af] transition-all uppercase"
                    >
                      <span>{current.ctaDetails}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex gap-1.5">
                      {p.sizes.map((s: string) => (
                        <span key={s} className="w-6 h-6 border border-slate-200 rounded-none flex items-center justify-center font-mono text-[8px] text-slate-600 font-bold bg-slate-50">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all button overlay */}
        <div className="flex justify-center mt-6">
          <a
            href="mailto:patrissurf@gmail.com?subject=Pedido%20ropa"
            className="px-8 py-4 bg-slate-50 border border-slate-200 hover:border-[#04f3af] text-slate-700 hover:text-[#020617] hover:bg-slate-100/50 hover:shadow-sm font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-[#04f3af]" />
            <span>{current.viewAllBtn}</span>
          </a>
        </div>

      </div>

      {/* Streetwear Modal Details */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="shop-modal">
            {/* Dark glass cover backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-none bg-white border border-slate-200 shadow-2xl z-10 grid grid-cols-1 sm:grid-cols-2"
            >
              {/* Product graphic panel */}
              <div className="relative h-[250px] sm:h-full aspect-[3/4] sm:aspect-auto border-r border-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale-[10%]"
                />

                {/* Category tag bubble */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-[8px] font-mono font-bold tracking-widest text-[#04f3af] bg-white border border-[#04f3af]/30 uppercase">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              {/* Product description panel */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-display font-black text-xl text-[#020617] uppercase tracking-tight">
                      {selectedProduct.title}
                    </h3>
                    <span className="font-display font-bold text-xl text-[#04f3af] shrink-0">
                      {selectedProduct.price}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-slate-600 font-light leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="mb-4">
                    <span className="font-sans text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                      {current.modalSizeLabel}
                    </span>
                    <div className="flex gap-2">
                      {selectedProduct.sizes.map((s: string) => (
                        <span key={s} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-none font-mono text-[10px] text-slate-700 font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="font-sans text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                      {current.modalSpecsLabel}
                    </span>
                    <div className="space-y-1.5">
                      {current.specs.map((spec: string, sIdx: number) => (
                        <div key={sIdx} className="flex items-start gap-2 text-[10px] text-slate-600 font-light leading-relaxed">
                          <Check className="w-3 h-3 text-[#04f3af] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add triggering */}
                <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
                  <Link
                    to="/contacto"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full py-3.5 bg-[#04f3af] text-white hover:bg-slate-900 font-display font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <span>{current.modalAddToCart}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <p className="text-[9px] font-sans text-slate-400 leading-relaxed text-center italic">
                    {current.contactPrompt}
                  </p>
                </div>
              </div>

              {/* Absolute Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-none bg-white border border-slate-200 text-slate-800 hover:text-[#04f3af] transition-all"
                aria-label="Close Product"
              >
                ✖
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
