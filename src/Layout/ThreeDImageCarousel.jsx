
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- MINIMIZED CSS Styles (Core 3D positioning + responsiveness remain) ---
const EMBEDDED_CSS = `
.cascade-slider_container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 20; 
    user-select: none;
    -webkit-user-select: none; 
    touch-action: pan-y;
}

.cascade-slider_slides {
    position: relative;
    height: 100%; 
}

.cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3); 
    transition: all 1s ease; 
    opacity: 0;
    z-index: 1; 
    cursor: grab; 
}
.cascade-slider_item.now { cursor: default; }
.cascade-slider_item:active { cursor: grabbing; }

.cascade-slider_item.next {
    left: 50%;
    transform: translateY(-50%) translateX(-120%) scale(0.6);
    opacity: 1;
    z-index: 4; 
}
.cascade-slider_item.prev {
    left: 50%;
    transform: translateY(-50%) translateX(20%) scale(0.6);
    opacity: 1;
    z-index: 4; 
}
.cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1.4);
    opacity: 1;
    z-index: 5; 
}

/* Arrows */
.cascade-slider_arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 6; 
    transform: translate(0, -50%);
    width: 40px; 
    height: 40px; 
    transition: all 0.3s ease;
}

@media screen and (max-width: 575px) {
    .cascade-slider_arrow-left { left: 5px; }
    .cascade-slider_arrow-right { right: 5px; }
}
@media screen and (min-width: 576px) {
    .cascade-slider_arrow-left { left: -4%; }
    .cascade-slider_arrow-right { right: -4%; }
}

.cascade-slider_slides img {
    max-width: 150px;
    height: auto; 
    border-radius: 10px;
    display: block;
    transition: filter 1s ease;
}
.cascade-slider_item:not(.now) img { filter: grayscale(0.95); }

@media screen and (min-width: 414px) {
    .cascade-slider_container { height: 40vh; }
    .cascade-slider_slides img { max-width: 200px; }
}
@media screen and (min-width: 576px) {
    .cascade-slider_container { height: 60vh; }
    .cascade-slider_slides img { max-width: 270px; }
}
@media screen and (min-width: 768px) {
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-125%) scale(1); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(25%) scale(1); }
    .cascade-slider_slides img { max-width: 350px; }
}
@media screen and (min-width: 991px) {
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-115%) scale(2); z-index: 4; }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(15%) scale(2); z-index: 4; }
    .cascade-slider_item.next2 { transform: translateY(-50%) translateX(-150%) scale(0.37); z-index: 1; }
    .cascade-slider_item.prev2 { transform: translateY(-50%) translateX(50%) scale(0.37); z-index: 2; }
    .cascade-slider_slides img { max-width: 300px; }
    .cascade-slider_container { height: 37vh; }
}
@media screen and (min-width: 1100px) {
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-130%) scale(1); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(30%) scale(1); }
    .cascade-slider_item.next2 { transform: translateY(-50%) translateX(-180%) scale(0.37); }
    .cascade-slider_item.prev2 { transform: translateY(-50%) translateX(80%) scale(0.37); }
    .cascade-slider_slides img { max-width: 350px; }
}
`;

// --- Helper Function ---
const getSlideClasses = (index, activeIndex, total, visibleCount) => {
    const diff = index - activeIndex;
    if (diff === 0) return 'now';
    if (diff === 1 || diff === -total + 1) return 'next';
    if (visibleCount === 5 && (diff === 2 || diff === -total + 2)) return 'next2';
    if (diff === -1 || diff === total - 1) return 'prev';
    if (visibleCount === 5 && (diff === -2 || diff === total - 2)) return 'prev2';
    return '';
};

// --- ThreeDImageCarousel Component ---
const ThreeDImageCarousel = ({
    slides,
    itemCount = 5,
    autoplay = false,
    delay = 3,
    pauseOnHover = true,
    className = '',
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const autoplayIntervalRef = useRef(null);
    const total = slides.length;

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const swipeThreshold = 50;

    const navigate = useCallback((direction) => {
        setActiveIndex(current => direction === 'next' ? (current + 1) % total : (current - 1 + total) % total);
    }, [total]);

    const startAutoplay = useCallback(() => {
        if (autoplay && total > 1) {
            if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
            autoplayIntervalRef.current = setInterval(() => navigate('next'), delay * 1000);
        }
    }, [autoplay, delay, navigate, total]);

    const stopAutoplay = useCallback(() => {
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
    }, []);

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    const handleStart = (clientX) => {
        setIsDragging(true);
        setStartX(clientX);
        stopAutoplay();
    };

    const handleEnd = (clientX) => {
        if (!isDragging) return;
        const distance = clientX - startX;
        if (Math.abs(distance) > swipeThreshold) {
            distance < 0 ? navigate('next') : navigate('prev');
        }
        setIsDragging(false);
        setStartX(0);
    };

    const handleMouseEnter = () => autoplay && pauseOnHover && stopAutoplay();
    const handleExit = (e) => {
        autoplay && pauseOnHover && startAutoplay();
        if (isDragging) handleEnd(e.clientX);
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />
            <div
                className={`cascade-slider_container ${className} bg-transparent w-full`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleExit}
                onMouseDown={(e) => handleStart(e.clientX)}
                onMouseUp={(e) => { handleEnd(e.clientX); startAutoplay(); }}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                onTouchEnd={(e) => { handleEnd(e.changedTouches[0].clientX); startAutoplay(); }}
            >
                <div className="cascade-slider_slides">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`cascade-slider_item ${getSlideClasses(index, activeIndex, total, itemCount)}`}
                        >
                            <a href={slide.href}>
                                <img
                                    src={slide.src}
                                    alt={`Slide ${index + 1}`}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = `https://placehold.co/350x200/4F46E5/ffffff?text=Slide%20${index + 1}`;
                                    }}
                                />
                            </a>
                        </div>
                    ))}
                </div>

                {total > 1 && (
                    <>
                        <span
                            className="cascade-slider_arrow cascade-slider_arrow-left rounded-full bg-black/30 text-white p-2 hover:bg-black/60 transition-colors duration-300"
                            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                        >
                            <ArrowLeftCircle size={30} />
                        </span>
                        <span
                            className="cascade-slider_arrow cascade-slider_arrow-right rounded-full bg-black/30 text-white p-2 hover:bg-black/60 transition-colors duration-300"
                            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                        >
                            <ArrowRightCircle size={30} />
                        </span>
                    </>
                )}
            </div>
        </>
    );
};

export default ThreeDImageCarousel;
