/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  height?: number;
  imgClassName?: string;
  src?: string;
  onBlueBg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'horizontal', 
  height = 50, 
  imgClassName = '', 
  src,
  onBlueBg = false
}) => {
  const defaultSrc = variant === 'vertical' 
    ? 'https://res.cloudinary.com/dplhygs4v/image/upload/v1781878605/LOGO_VERTICAl_yh1bf0.png' 
    : 'https://res.cloudinary.com/dplhygs4v/image/upload/v1781878605/LOGO_HORIZONTAL_djzlgz.png';
  const finalSrc = src || defaultSrc;

  // Render SVG color matrix filter to convert blue colors in the PNG to white while preserving red.
  // We use key coefficients to detect the high relative blue value in brand blue and map it to white.
  const filterSvg = (
    <svg className="absolute w-0 h-0 pointer-events-none select-none" style={{ visibility: 'hidden', width: 0, height: 0 }} aria-hidden="true">
      <defs>
        <filter id="blue-to-white" colorInterpolationFilters="sRGB">
          {/* Mask creation: Red brand is #D62828 (high R, low B), Blue is #123C73 (low R, high B) */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    -5.0 0 8.0 0 0"
            result="blueMask"
          />
          <feFlood flood-color="#FFFFFF" flood-opacity="1" result="whiteColor" />
          <feComposite in="whiteColor" in2="blueMask" operator="in" result="whiteText" />
          <feComposite in="whiteText" in2="SourceGraphic" operator="in" result="cleanWhiteText" />
          <feComposite in="cleanWhiteText" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
    </svg>
  );

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        {onBlueBg && filterSvg}
        <img
          src={finalSrc}
          alt="RE Engenharia Elétrica"
          style={{ 
            height: `${height}px`, 
            width: 'auto',
            filter: onBlueBg ? 'url(#blue-to-white)' : undefined
          }}
          className={`object-contain ${imgClassName}`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal variant (Ideal for header)
  return (
    <div className={`flex items-center ${className}`}>
      {onBlueBg && filterSvg}
      <img
        src={finalSrc}
        alt="RE Engenharia Elétrica"
        style={{ 
          height: `${height}px`, 
          width: 'auto',
          filter: onBlueBg ? 'url(#blue-to-white)' : undefined
        }}
        className={`object-contain ${imgClassName}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

