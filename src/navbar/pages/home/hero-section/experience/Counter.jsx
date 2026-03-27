import { useMotionValue, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Counter({ value, separateDigits = false, duration = 2, ease = 'easeOut', scrollTrigger = true }) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0');
  const [isInView, setIsInView] = useState(!scrollTrigger); // If no scroll trigger, start immediately
  const counterRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    if (!scrollTrigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Only observe once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [scrollTrigger, isInView]);

  // Animation effect - only runs when isInView becomes true
  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value and suffix from string (e.g., '20K+' -> 20, 'K+')
    const match = value.match(/^(\d+(?:,\d{3})*)/);
    
    if (!match) {
      // No numeric value found, just display the value as-is (for suffixes like 'K+', '+')
      setDisplayValue(value);
      return;
    }

    const numericValue = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = value.replace(/^\d+(?:,\d{3})*/, '');

    // Create an animation that updates the motion value
    const controls = animate(motionValue, numericValue, {
      duration: duration,
      ease: ease,
      onUpdate: (latest) => {
        // Format the number with commas
        const formattedNumber = Math.floor(latest).toLocaleString('en-US');
        setDisplayValue(formattedNumber + suffix);
      },
    });

    return () => {
      controls.stop();
    };
  }, [value, motionValue, duration, ease, isInView]);

  // If separateDigits is true, wrap each digit/character in a span
  if (separateDigits) {
    return (
      <div ref={counterRef}>
        {displayValue.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    );
  }

  return <div ref={counterRef}>{displayValue}</div>;
}

