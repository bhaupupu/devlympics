'use client';
import React from 'react';

export const HeroArtwork: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%', ...style }}
    >
      <svg
        viewBox="0 0 1600 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <defs>
          {/* Authentic Sumi-e Aged Parchment Sky Wash */}
          <linearGradient id="parchmentSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9C4BB" />
            <stop offset="25%" stopColor="#D4CFCA" />
            <stop offset="55%" stopColor="#DDD8D1" />
            <stop offset="80%" stopColor="#CEC9C0" />
            <stop offset="100%" stopColor="#B3ADA3" />
          </linearGradient>

          {/* Left Hero Mountain Gradient */}
          <linearGradient id="leftPeakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A8A399" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#959086" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7B766D" stopOpacity="0.95" />
          </linearGradient>

          {/* Distant Ridge Gradient (Layer 1) */}
          <linearGradient id="distantRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C0BBB0" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#AFA99E" stopOpacity="0.9" />
          </linearGradient>

          {/* Mid Ridge Gradient (Layer 2) */}
          <linearGradient id="midRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A39D92" />
            <stop offset="100%" stopColor="#878177" />
          </linearGradient>

          {/* Near Rolling Hills Gradient (Layer 3) */}
          <linearGradient id="nearRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#817B71" />
            <stop offset="100%" stopColor="#5E584F" />
          </linearGradient>

          {/* Woodcut / Stipple Pattern for the Crimson Sun */}
          <pattern id="sunWoodcutStipple" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#C84B31" />
            <circle cx="1.5" cy="1.5" r="0.9" fill="#982D16" opacity="0.65" />
            <circle cx="4.5" cy="4.5" r="1.0" fill="#E2583B" opacity="0.75" />
            <circle cx="4.5" cy="1.5" r="0.7" fill="#842410" opacity="0.5" />
            <circle cx="1.5" cy="4.5" r="0.8" fill="#B03A21" opacity="0.6" />
          </pattern>

          {/* Mountain Stipple Shading Pattern */}
          <pattern id="mountainNoise" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="transparent" />
            <circle cx="2" cy="3" r="0.8" fill="#1C1B18" opacity="0.08" />
            <circle cx="6" cy="7" r="0.8" fill="#1C1B18" opacity="0.08" />
            <circle cx="5" cy="2" r="0.6" fill="#1C1B18" opacity="0.06" />
          </pattern>

          {/* Subtle noise grain for authentic parchment wash */}
          <filter id="parchmentNoise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="turb" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.12  0 0 0 0 0.11  0 0 0 0 0.10  0 0 0 0.045 0"
            />
            <feBlend mode="multiply" in="SourceGraphic" />
          </filter>
        </defs>

        {/* ─── LAYER 1: Aged Parchment Sky Wash ─── */}
        <rect width="1600" height="900" fill="url(#parchmentSky)" />
        <rect width="1600" height="900" filter="url(#parchmentNoise)" fill="transparent" opacity="0.8" />

        {/* ─── LAYER 2: Distant Receding Mountain Ranges ─── */}
        {/* Layer 1: Farthest pale mountain mist */}
        <path
          d="M0 640 
             Q180 570 340 600 
             T700 580 
             T1060 610 
             T1380 570 
             Q1500 560 1600 590 
             L1600 900 L0 900 Z"
          fill="url(#distantRidgeGrad)"
        />

        {/* Layer 2: Midground mist ridges */}
        <path
          d="M0 680 
             Q140 640 280 655 
             T580 660 
             T920 640 
             T1240 650 
             T1480 630 
             Q1540 635 1600 660 
             L1600 900 L0 900 Z"
          fill="url(#midRidgeGrad)"
        />

        {/* Layer 3: Left Tall Hero Peak (reaches up towards the Crimson Sun) */}
        <path
          d="M-40 760 
             L-40 500 
             Q40 400 95 320 
             Q130 350 170 410 
             Q220 470 280 540 
             Q340 610 420 670 
             L450 760 Z"
          fill="url(#leftPeakGrad)"
        />
        {/* Left Hero Peak Texture Stipple */}
        <path
          d="M-40 760 L-40 500 Q40 400 95 320 Q130 350 170 410 Q220 470 280 540 Q340 610 420 670 L450 760 Z"
          fill="url(#mountainNoise)"
        />

        {/* Layer 4: Near Rolling Hills */}
        <path
          d="M0 750 
             Q240 700 480 720 
             T940 710 
             T1360 715 
             Q1480 710 1600 730 
             L1600 900 L0 900 Z"
          fill="url(#nearRidgeGrad)"
        />
        <path
          d="M0 750 Q240 700 480 720 T940 710 T1360 715 Q1480 710 1600 730 L1600 900 L0 900 Z"
          fill="url(#mountainNoise)"
        />

        {/* ─── LAYER 3: The Crimson Sun ─── */}
        <g id="crimsonSun">
          {/* Outer heat stipple halo */}
          <circle cx="215" cy="265" r="58" fill="#C84B31" opacity="0.25" />
          {/* Main textured woodcut sun disk */}
          <circle
            cx="215"
            cy="265"
            r="52"
            fill="url(#sunWoodcutStipple)"
            stroke="#161719"
            strokeWidth="1.5"
          />
        </g>

        {/* ─── LAYER 4: Traditional Oriental Auspicious Cloud Swirls (Sumi-e Xiangyun) ─── */}
        <g id="sumiCloudCanopy" fill="#121315">
          {/* Top-Left Framing Clouds (Over and around Sun) */}
          <path
            d="M-20 120 
               C10 85, 55 80, 85 105 
               C120 75, 175 80, 205 115 
               C245 95, 305 105, 330 145 
               C360 125, 410 135, 425 170 
               C395 195, 345 190, 315 170 
               C285 185, 230 180, 195 155 
               C160 175, 110 170, 80 150 
               C50 160, 10 155, -20 135 Z"
            opacity="0.94"
          />
          {/* Inner cloud cutout swirls (left) */}
          <path
            d="M50 115 C80 100, 120 105, 140 128 C120 138, 80 135, 60 125 Z 
               M180 115 C215 105, 255 115, 270 138 C245 148, 205 140, 190 128 Z"
            fill="#DAD5CC"
          />

          {/* Delicate cloud ribbon trailing below the Crimson Sun */}
          <path
            d="M245 305 
               C268 290, 296 292, 315 310 
               C328 298, 350 300, 362 318 
               C345 330, 318 328, 300 320 
               C285 330, 260 325, 245 312 Z"
            opacity="0.9"
          />

          {/* Top-Center Massive Swirling Cloud Bank */}
          <path
            d="M395 195 
               C425 155, 475 145, 520 170 
               C555 135, 620 130, 670 165 
               C710 140, 770 145, 805 180 
               C845 160, 910 170, 935 210 
               C905 240, 855 235, 825 220 
               C790 245, 730 245, 690 225 
               C655 245, 595 240, 560 215 
               C530 235, 480 235, 445 215 
               C415 225, 385 215, 395 195 Z"
            opacity="0.95"
          />
          {/* Negative cutout spirals inside Top-Center cloud */}
          <path
            d="M495 175 C535 160, 585 170, 610 195 C580 205, 530 200, 505 185 Z 
               M655 170 C695 155, 745 165, 768 190 C738 200, 688 195, 668 180 Z 
               M795 185 C835 175, 875 185, 895 208 C868 218, 828 212, 808 198 Z"
            fill="#DAD5CC"
          />

          {/* Top-Right Cloud Formations */}
          <path
            d="M985 130 
               C1015 100, 1065 100, 1095 128 
               C1130 110, 1180 115, 1205 148 
               C1175 170, 1125 165, 1090 148 
               C1060 165, 1015 160, 985 145 Z"
            opacity="0.92"
          />
          <path
            d="M1035 125 C1060 115, 1095 120, 1115 138 C1095 145, 1060 142, 1045 135 Z"
            fill="#DAD5CC"
          />

          {/* Upper Right Trailing Clouds */}
          <path
            d="M1280 215 C1310 195, 1360 200, 1385 228 C1355 242, 1305 238, 1285 225 Z 
               M1445 125 C1475 105, 1525 110, 1550 135 C1520 150, 1475 145, 1450 135 Z"
            opacity="0.9"
          />

          {/* Mid-Air Floating Auspicious Cloud Tendrils */}
          <path
            d="M570 330 C600 315, 640 320, 660 340 C630 350, 595 345, 575 335 Z"
            opacity="0.75"
          />
          <path
            d="M920 325 C950 310, 990 315, 1010 335 C980 345, 945 340, 925 332 Z"
            opacity="0.75"
          />
          <path
            d="M1210 320 C1245 305, 1295 310, 1315 330 C1285 340, 1240 335, 1215 325 Z"
            opacity="0.75"
          />
          <path
            d="M1420 315 C1450 300, 1490 305, 1510 325 C1480 335, 1445 330, 1425 322 Z"
            opacity="0.75"
          />
        </g>

        {/* ─── LAYER 5: Patapon Marching Squad Silhouettes ─── */}
        <g id="pataponWarriors" fill="#121315" stroke="#121315">
          {/* === UNIT 1: Left Halberd & Giant Feathered Lance Vanguard === */}
          {/* Tall Angled Halberd Polearm */}
          <line x1="85" y1="780" x2="65" y2="475" strokeWidth="4.5" strokeLinecap="round" />
          {/* Halberd Crescent Axe Blade & Spike */}
          <polygon points="65,475 58,445 74,435 76,480" fill="#121315" />
          <path d="M58,460 Q38,475 32,505 L48,500 Z" fill="#121315" />

          {/* Towering Giant Feathered Spear */}
          <line x1="170" y1="780" x2="165" y2="485" strokeWidth="5" strokeLinecap="round" />
          {/* Triple Chevron Feathers */}
          <path
            d="M148 510 L165 485 L182 510 L165 530 Z 
               M148 540 L165 515 L182 540 L165 560 Z 
               M148 570 L165 545 L182 570 L165 590 Z"
            fill="#121315"
          />

          {/* Bird-Mount Cavalry Rider (Left) */}
          {/* Bird Body */}
          <ellipse cx="205" cy="670" rx="36" ry="24" />
          {/* Bird Curved S-Neck & Head */}
          <path
            d="M230 665 Q255 640 250 595 Q248 572 235 562 Q245 552 265 568 Q270 585 262 620 L235 675 Z"
            fill="#121315"
          />
          {/* Sharp Beak */}
          <polygon points="265,568 290,576 262,586" />
          {/* Feathered Crest on Bird Head */}
          <path d="M235 562 Q220 538 208 542 Q224 552 233 565 Z" />
          {/* Stilt Bird Legs */}
          <line x1="192" y1="690" x2="178" y2="760" strokeWidth="4.5" />
          <line x1="220" y1="690" x2="236" y2="760" strokeWidth="4.5" />

          {/* Rider on Bird */}
          <circle cx="195" cy="635" r="14" />
          <line x1="195" y1="645" x2="195" y2="670" strokeWidth="6" />
          {/* Rider's Battle Pennant */}
          <line x1="205" y1="660" x2="225" y2="520" strokeWidth="3.5" />
          <polygon points="225,520 282,552 222,572" fill="#121315" />

          {/* === UNIT 2: Scout carrying Back-Quiver of Arrows === */}
          {/* Scout Body */}
          <circle cx="560" cy="710" r="13" />
          <path d="M552 722 L568 722 L564 760 L556 760 Z" />
          <line x1="555" y1="760" x2="545" y2="790" strokeWidth="4" />
          <line x1="565" y1="760" x2="575" y2="790" strokeWidth="4" />
          {/* Quiver of 3 Feathers pointing up */}
          <line x1="550" y1="720" x2="538" y2="650" strokeWidth="3" />
          <line x1="558" y1="720" x2="555" y2="640" strokeWidth="3" />
          <line x1="566" y1="720" x2="572" y2="648" strokeWidth="3" />
          <polygon points="538,650 532,662 544,662" />
          <polygon points="555,640 549,652 561,652" />
          <polygon points="572,648 566,660 578,660" />

          {/* === UNIT 3: Center-Right Bird Cavalry & Arrows === */}
          {/* Bird Body */}
          <ellipse cx="1040" cy="705" rx="32" ry="22" />
          {/* Bird Neck & Head */}
          <path
            d="M1060 700 Q1082 680 1076 650 Q1072 628 1060 618 Q1072 608 1088 622 Q1092 638 1084 668 L1060 710 Z"
            fill="#121315"
          />
          <polygon points="1088,622 1108,630 1085,638" />
          {/* Bird Legs */}
          <line x1="1030" y1="722" x2="1020" y2="775" strokeWidth="4" />
          <line x1="1055" y1="722" x2="1065" y2="775" strokeWidth="4" />
          {/* Rider */}
          <circle cx="1030" cy="672" r="12" />
          <line x1="1030" y1="682" x2="1030" y2="705" strokeWidth="5" />
          {/* Arrows on back */}
          <line x1="1020" y1="690" x2="1005" y2="630" strokeWidth="2.5" />
          <line x1="1025" y1="690" x2="1015" y2="625" strokeWidth="2.5" />
          <polygon points="1005,630 999,640 1011,640" />
          <polygon points="1015,625 1009,635 1021,635" />

          {/* === UNIT 4: Right Wing Battle Standard & Halberd === */}
          {/* Tall Fluttering Swallowtail Battle Standard */}
          <line x1="1295" y1="790" x2="1235" y2="520" strokeWidth="4.5" strokeLinecap="round" />
          {/* Bird Crest Top of Standard */}
          <polygon points="1235,520 1228,495 1245,505 1240,525" />
          {/* Swallowtail Long Ribbon Banner */}
          <path
            d="M1235 525 
               Q1195 550 1155 570 
               Q1125 585 1095 610 
               L1140 605 
               L1100 630 
               Q1135 605 1175 590 
               Q1210 575 1230 560 Z"
            fill="#121315"
          />

          {/* Halberd on Right */}
          <line x1="1440" y1="785" x2="1470" y2="530" strokeWidth="4" />
          <path d="M1470 530 Q1485 500 1510 480 Q1490 520 1475 540 Z" fill="#121315" />

          {/* Far Right Bird Scout */}
          <ellipse cx="1360" cy="725" rx="24" ry="16" />
          <path d="M1375 720 Q1390 705 1385 680 Q1380 665 1370 655 Q1380 650 1390 660 L1375 730 Z" />
          <polygon points="1390,660 1405,665 1388,672" />
          <line x1="1350" y1="735" x2="1345" y2="780" strokeWidth="3.5" />
          <line x1="1370" y1="735" x2="1380" y2="780" strokeWidth="3.5" />

          {/* Arrow cluster on Far Right */}
          <line x1="1485" y1="780" x2="1495" y2="560" strokeWidth="3.5" />
          <path d="M1485 580 L1495 560 L1505 580 Z M1485 610 L1495 590 L1505 610 Z" />
        </g>

        {/* ─── LAYER 6: Grass, Reeds, Cattails & Crimson Spider Lily Blossoms ─── */}
        <g id="foregroundGrass">
          {/* Main dense silhouette grass along the bottom ridge */}
          <path
            d="M0 860 
               Q30 805 50 755 Q60 805 80 860 
               Q110 785 130 735 Q140 795 160 860 
               Q190 795 220 745 Q235 805 260 860 
               Q290 775 320 725 Q335 795 360 860 
               Q390 765 410 715 Q430 795 450 860 
               Q480 785 510 745 Q530 805 560 860 
               Q590 775 620 725 Q635 795 660 860 
               Q700 755 730 705 Q745 785 770 860 
               Q800 775 830 725 Q845 795 870 860 
               Q900 765 930 715 Q950 795 970 860 
               Q1000 785 1030 735 Q1045 795 1070 860 
               Q1100 765 1130 705 Q1150 785 1180 860 
               Q1210 775 1240 725 Q1260 795 1280 860 
               Q1310 765 1340 715 Q1360 795 1380 860 
               Q1410 755 1440 695 Q1460 785 1480 860 
               Q1510 775 1540 725 Q1560 795 1600 860 
               L1600 900 L0 900 Z"
            fill="#101112"
          />

          {/* Overlapping long delicate curved grass strokes */}
          <path
            d="M20 870 Q45 815 60 775 Q70 820 90 870 
               M180 870 Q205 805 225 760 Q235 815 255 870 
               M380 870 Q405 800 425 755 Q440 815 460 870 
               M580 870 Q605 810 625 765 Q640 820 660 870 
               M780 870 Q805 805 825 755 Q840 815 860 870 
               M980 870 Q1005 805 1025 755 Q1040 815 1060 870 
               M1180 870 Q1205 800 1225 750 Q1240 815 1260 870 
               M1380 870 Q1405 790 1425 740 Q1445 810 1470 870"
            stroke="#101112"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Large curved reed silhouette on Far Right */}
          <path
            d="M1520 880 Q1560 770 1620 710 L1600 880 Z"
            fill="#101112"
          />

          {/* ─── Crimson Spider Lily / Wildflower Buds ─── */}
          <g id="crimsonBlossoms">
            {/* Center-Left Pair of Spider Lily Buds (exactly matching the image) */}
            <circle cx="932" cy="742" r="5" fill="#C84B31" />
            <line x1="932" y1="746" x2="934" y2="775" stroke="#101112" strokeWidth="2.2" />
            <circle cx="945" cy="752" r="4.5" fill="#C84B31" />
            <line x1="945" y1="756" x2="942" y2="780" stroke="#101112" strokeWidth="2" />

            {/* Left Blossom near soldier */}
            <circle cx="340" cy="755" r="4" fill="#C84B31" />
            <line x1="340" y1="760" x2="342" y2="785" stroke="#101112" strokeWidth="1.8" />

            {/* Right Blossom near scout */}
            <circle cx="1215" cy="748" r="4.5" fill="#C84B31" />
            <line x1="1215" y1="754" x2="1218" y2="782" stroke="#101112" strokeWidth="2" />
          </g>
        </g>

        {/* ─── LAYER 7: Cinematic Widescreen Letterbox Bars ─── */}
        <rect x="0" y="0" width="1600" height="28" fill="#0A0B0C" />
        <rect x="0" y="872" width="1600" height="28" fill="#0A0B0C" />
      </svg>
    </div>
  );
};

export default HeroArtwork;
