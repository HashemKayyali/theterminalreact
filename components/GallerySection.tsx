import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
    'https://picsum.photos/seed/gallery1/1200/800',
    'https://picsum.photos/seed/gallery2/1200/800',
    'https://picsum.photos/seed/gallery3/1200/800',
    'https://picsum.photos/seed/gallery4/1200/800',
    'https://picsum.photos/seed/gallery5/1200/800',
    'https://picsum.photos/seed/gallery6/1200/800',
    'https://picsum.photos/seed/gallery7/1200/800',
    'https://picsum.photos/seed/gallery8/1200/800',
];

const GallerySection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(current => (current === 0 ? galleryImages.length - 1 : current - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(current => (current === galleryImages.length - 1 ? 0 : current + 1));
    };

    return (
        <section id="gallery" className="py-20 md:py-28 bg-[#111111] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">Our Gallery</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A glimpse into the stunning visuals and epic moments from our games.
                    </p>
                </div>
                
                <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[450px] md:h-[600px] flex items-center justify-center">
                    {/* Image Carousel */}
                    <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
                        {galleryImages.map((src, index) => {
                            const offset = index - currentIndex;
                            const isVisible = Math.abs(offset) <= 2;

                            const getTransformStyle = () => {
                                if (offset === 0) {
                                    return 'translateX(0%) scale(1)';
                                }
                                const sign = Math.sign(offset);
                                return `translateX(${sign * 45}%) scale(0.7)`;
                            };

                            return (
                                <div
                                    key={index}
                                    className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out"
                                    style={{
                                        transform: getTransformStyle(),
                                        zIndex: galleryImages.length - Math.abs(offset),
                                        opacity: isVisible ? 1 : 0,
                                        pointerEvents: offset === 0 ? 'auto' : 'none',
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        className={`w-full h-full object-contain transition-all duration-500 ease-out rounded-xl
                                            ${offset === 0 
                                                ? 'shadow-2xl shadow-blue-500/30' 
                                                : 'blur-sm brightness-50'}`
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
