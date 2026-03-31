import { Component } from 'react';
import poster from '../asset/imgs/poster.jpg';

class Home extends Component {
  render() {
    return (
      <div className="admin-home-viewport">
        <style>{`
          @import url('file:///Users/tuanngo/Desktop/FOOD&WATER/Korean%20street%20food%20mukbang%20experience.png');

          :root {
            --gold-mid:   #FFB300;
            --gold-deep:  #C8830A;
            --coral:      #FF6F61;
            --warm-brown: #795548;
          }

          /* ===========================
             VIEWPORT
          =========================== */
          .admin-home-viewport {
            height: calc(100vh - 80px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background:
              radial-gradient(ellipse at 15% 20%, rgba(255,179,0,0.20) 0%, transparent 45%),
              radial-gradient(ellipse at 85% 75%, rgba(255,111,97,0.16) 0%, transparent 45%),
              linear-gradient(160deg, #FFFDE7 0%, #FFF8E1 45%, #FFF3E0 100%);
            position: relative;
            overflow: hidden;
            font-family: 'Noto Serif KR', serif;
          }

          /* Lattice overlay */
          .admin-home-viewport::before {
            content: "";
            position: absolute; inset: 0;
            background-image:
              repeating-linear-gradient(45deg,  rgba(255,179,0,0.06) 0px, rgba(255,179,0,0.06) 1px, transparent 1px, transparent 32px),
              repeating-linear-gradient(-45deg, rgba(211,47,47,0.05) 0px, rgba(211,47,47,0.05) 1px, transparent 1px, transparent 32px);
            pointer-events: none; z-index: 0;
          }

          /* Orb glow top-left */
          .admin-home-viewport::after {
            content: "";
            position: absolute; top: -100px; left: -100px;
            width: 360px; height: 360px;
            background: radial-gradient(circle, rgba(255,224,82,0.28), transparent 70%);
            border-radius: 50%; z-index: 0;
            animation: orbPulse 8s ease-in-out infinite;
          }
          @keyframes orbPulse {
            0%, 100% { transform: scale(1);    opacity: 0.65; }
            50%       { transform: scale(1.12); opacity: 1;    }
          }

          /* Corner ornaments */
          .corner-ornament {
            position: absolute; z-index: 1;
            font-size: 36px; pointer-events: none;
            animation: cornerBreath 4s ease-in-out infinite;
          }
          .corner-ornament.tl { top: 16px;    left: 20px;  animation-delay: 0s;   }
          .corner-ornament.tr { top: 16px;    right: 20px; animation-delay: 1s;   }
          .corner-ornament.bl { bottom: 16px; left: 20px;  animation-delay: 2s;   }
          .corner-ornament.br { bottom: 16px; right: 20px; animation-delay: 1.5s; }
          @keyframes cornerBreath {
            0%, 100% { transform: scale(1);    opacity: 0.22; }
            50%       { transform: scale(1.15); opacity: 0.40; }
          }

          /* Floating food */
          .floating-food {
            position: fixed; z-index: 1;
            filter: drop-shadow(0 4px 10px rgba(0,0,0,0.14));
            animation: floatDrift 6s ease-in-out infinite;
            pointer-events: none;
          }
          .floating-food.f1 { top: 8%;    left: 2.5%;  font-size: 42px; animation-delay: 0s;   }
          .floating-food.f2 { top: 5%;    right: 3%;   font-size: 46px; animation-delay: 1.2s; }
          .floating-food.f3 { top: 40%;   left: 1%;    font-size: 34px; animation-delay: 2.4s; }
          .floating-food.f4 { top: 42%;   right: 1%;   font-size: 34px; animation-delay: 0.8s; }
          .floating-food.f5 { bottom:18%; left: 2.5%;  font-size: 40px; animation-delay: 1.8s; }
          .floating-food.f6 { bottom:14%; right: 2.5%; font-size: 38px; animation-delay: 0.4s; }
          .floating-food.f7 { bottom: 4%; left: 10%;   font-size: 32px; animation-delay: 3s;   }
          .floating-food.f8 { bottom: 4%; right: 10%;  font-size: 32px; animation-delay: 2s;   }
          @keyframes floatDrift {
            0%, 100% { transform: translateY(0px);   }
            50%       { transform: translateY(-18px); }
          }

          /* Cherry blossom petals */
          .petal {
            position: fixed; z-index: 1;
            opacity: 0.45; pointer-events: none;
            animation: petalFall linear infinite;
          }
          .petal:nth-child(1) { left: 7%;  font-size: 15px; animation-duration: 10s; animation-delay: 0s;   }
          .petal:nth-child(2) { left: 23%; font-size: 18px; animation-duration: 12s; animation-delay: 2s;   }
          .petal:nth-child(3) { left: 40%; font-size: 14px; animation-duration: 9s;  animation-delay: 4.5s; }
          .petal:nth-child(4) { left: 58%; font-size: 19px; animation-duration: 14s; animation-delay: 1s;   }
          .petal:nth-child(5) { left: 74%; font-size: 16px; animation-duration: 11s; animation-delay: 3s;   }
          .petal:nth-child(6) { left: 89%; font-size: 15px; animation-duration: 13s; animation-delay: 0.5s; }
          @keyframes petalFall {
            0%   { transform: translateY(-50px) rotate(0deg);   opacity: 0;    }
            10%  { opacity: 0.45; }
            90%  { opacity: 0.2;  }
            100% { transform: translateY(110vh)  rotate(360deg); opacity: 0;   }
          }

          /* Sparkles */
          .sparkle {
            position: absolute; z-index: 1; font-size: 17px;
            opacity: 0; pointer-events: none;
            animation: sparkleAnim 4s ease-in-out infinite;
          }
          .sparkle.s1 { top: 26%; left: 16%;  animation-delay: 0s;   }
          .sparkle.s2 { top: 62%; left: 86%;  animation-delay: 1.3s; }
          .sparkle.s3 { top: 15%; left: 54%;  animation-delay: 2.2s; }
          .sparkle.s4 { top: 74%; left: 26%;  animation-delay: 1.7s; }
          .sparkle.s5 { top: 66%; left: 68%;  animation-delay: 0.6s; }
          @keyframes sparkleAnim {
            0%, 100% { opacity: 0;   transform: scale(0.5); }
            50%       { opacity: 0.8; transform: scale(1.2); }
          }

          /* ===========================
             DASHBOARD CARD
          =========================== */
          .dashboard-card {
            position: relative; z-index: 2;
            padding: 18px 44px 20px;
            border-radius: 30px;
            box-shadow:
              0 2px 0px rgba(255,255,255,0.9) inset,
              0 24px 65px rgba(200,131,10,0.20),
              0 6px 18px rgba(211,47,47,0.12),
              0 0 0 1.5px rgba(255,200,60,0.32);
            text-align: center;
            background: linear-gradient(160deg, rgba(255,253,245,0.97) 0%, rgba(255,248,225,0.94) 100%);
            width: min(860px, 90vw);
            height: calc(100vh - 110px);
            max-height: calc(100vh - 110px);
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            transition: transform 0.5s cubic-bezier(.22,.8,.44,1), box-shadow 0.5s ease;
            animation: cardEntrance 0.9s cubic-bezier(.22,.8,.44,1) both;
          }
          @keyframes cardEntrance {
            from { opacity: 0; transform: translateY(28px) scale(0.96); }
            to   { opacity: 1; transform: translateY(0)    scale(1);    }
          }
          .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow:
              0 2px 0px rgba(255,255,255,0.9) inset,
              0 38px 90px rgba(200,131,10,0.26),
              0 8px 24px rgba(211,47,47,0.16),
              0 0 0 2px rgba(255,200,60,0.50);
          }
          .dashboard-card::before {
            content: ""; position: absolute; inset: 9px;
            border-radius: 24px;
            border: 1.5px dashed rgba(255,179,0,0.28);
            pointer-events: none; z-index: 0;
          }

          /* ===========================
             POSTER — chiếm toàn bộ card (trừ footer)
          =========================== */
          .poster-wrapper {
            position: relative; z-index: 1;
            flex: 1 1 0;
            min-height: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 14px;
            animation: fadeUp 0.8s 0.3s both;
          }

          .poster-glow-ring {
            position: absolute; inset: -10px; border-radius: 30px;
            background: linear-gradient(135deg, #FFB300, #FF6F61, #FFE082, #FF8A80, #FFB300);
            opacity: 0; filter: blur(14px); z-index: -1;
            animation: glowPulse 3s ease-in-out infinite;
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.35; transform: scale(1);    }
            50%       { opacity: 0.65; transform: scale(1.03); }
          }

          .poster-frame {
            position: relative;
            padding: 14px;
            background: linear-gradient(145deg, #FFE082 0%, #FFB300 30%, #FF6F61 65%, #FFE082 100%);
            border-radius: 22px;
            box-shadow:
              0 16px 50px rgba(200,131,10,0.34),
              0 4px 14px rgba(255,111,97,0.20),
              inset 0 1px 0 rgba(255,255,255,0.5);
            display: flex; justify-content: center; align-items: center;
            overflow: hidden;
            height: 100%; width: 100%;
            box-sizing: border-box;
          }
          .poster-frame::after {
            content: ""; position: absolute; inset: 0; border-radius: 22px;
            background: linear-gradient(120deg,
              rgba(255,255,255,0)    0%,
              rgba(255,255,255,0.26) 48%,
              rgba(255,255,255,0)    100%);
            pointer-events: none;
            animation: sheenSweep 5s ease-in-out infinite;
          }
          @keyframes sheenSweep {
            0%   { transform: translateX(-110%); opacity: 0; }
            30%  { opacity: 1; }
            60%  { transform: translateX(110%);  opacity: 0; }
            100% { transform: translateX(110%);  opacity: 0; }
          }

          .main-poster {
            display: block;
            border-radius: 12px;
            max-height: 100%;
            max-width: 100%;
            width: auto;
            height: 100%;
            object-fit: contain;
            box-shadow: 0 10px 34px rgba(0,0,0,0.30);
            transition: transform 0.6s cubic-bezier(.22,.8,.44,1), filter 0.5s ease;
          }
          .main-poster:hover {
            transform: scale(1.04);
            filter: brightness(1.06) saturate(1.08);
          }

          .poster-badge {
            position: absolute; top: -10px; right: -10px;
            width: 48px; height: 48px; border-radius: 50%;
            background: linear-gradient(135deg, #FF6F61, #FFB300);
            box-shadow: 0 4px 12px rgba(255,111,97,0.48);
            display: flex; align-items: center; justify-content: center;
            font-size: 22px; z-index: 3;
            animation: badgePulse 2.5s ease-in-out infinite;
          }
          @keyframes badgePulse {
            0%, 100% { transform: scale(1);    box-shadow: 0 4px 12px rgba(255,111,97,0.45); }
            50%       { transform: scale(1.12); box-shadow: 0 6px 20px rgba(255,111,97,0.70); }
          }

          /* ===========================
             FOOTER
          =========================== */
          .footer-status {
            position: relative; z-index: 1; flex-shrink: 0;
            font-size: clamp(11px, 1.5vw, 17px);
            font-weight: 700; color: #fff;
            background: linear-gradient(100deg, #D32F2F 0%, #FF6F61 40%, #FFB300 80%, #C8830A 100%);
            background-size: 200% auto;
            padding: 11px 40px;
            border-radius: 70px;
            box-shadow: 0 7px 22px rgba(211,47,47,0.34), 0 2px 0 rgba(255,255,255,0.20) inset;
            letter-spacing: 1px; text-transform: uppercase;
            font-family: 'Cinzel Decorative', serif;
            animation: footerShimmer 4s linear infinite, fadeUp 0.8s 0.4s both;
            white-space: nowrap;
          }
          .footer-status::before { content: "✦"; margin-right: 10px; opacity: 0.8; }
          .footer-status::after  { content: "✦"; margin-left:  10px; opacity: 0.8; }
          @keyframes footerShimmer {
            0%   { background-position: 0%   center; }
            100% { background-position: 200% center; }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0);    }
          }

          /* ===========================
             RESPONSIVE
          =========================== */
          @media (max-width: 768px) {
            .dashboard-card { padding: 14px 18px 16px; border-radius: 22px; width: 94vw; }
            .footer-status { font-size: 11px; padding: 9px 20px; }
            .floating-food { font-size: 26px; }
          }
          @media (max-width: 480px) {
            .dashboard-card { padding: 10px 10px 12px; }
            .footer-status { font-size: 9px; padding: 7px 12px; white-space: normal; text-align: center; }
            .floating-food.f3,.floating-food.f4,.floating-food.f7,.floating-food.f8 { display: none; }
          }
        `}</style>

        {/* Cherry blossom petals */}
        <div className="petal">🌸</div>
        <div className="petal">🌺</div>
        <div className="petal">🌸</div>
        <div className="petal">🌼</div>
        <div className="petal">🌸</div>
        <div className="petal">🌺</div>

        {/* Sparkles */}
        <div className="sparkle s1">✨</div>
        <div className="sparkle s2">⭐</div>
        <div className="sparkle s3">✦</div>
        <div className="sparkle s4">✨</div>
        <div className="sparkle s5">⭐</div>

        {/* Corner ornaments */}
        <div className="corner-ornament tl">🌸</div>
        <div className="corner-ornament tr">🌺</div>
        <div className="corner-ornament bl">🌼</div>
        <div className="corner-ornament br">🌸</div>

        {/* Floating food */}
        <div className="floating-food f1">🥘</div>
        <div className="floating-food f2">🍗</div>
        <div className="floating-food f3">🍜</div>
        <div className="floating-food f4">🥟</div>
        <div className="floating-food f5">🍱</div>
        <div className="floating-food f6">🍣</div>
        <div className="floating-food f7">🥩</div>
        <div className="floating-food f8">🍲</div>

        {/* Main card */}
        <div className="dashboard-card">
          <div className="poster-wrapper">
            <div className="poster-glow-ring"></div>
            <div className="poster-frame">
              <img className="main-poster" src={poster} alt="Korea Food Poster" />
              <div className="poster-badge">👑</div>
            </div>
          </div>

          <div className="footer-status">
            Chúc bạn một ngày làm việc hiệu quả nhé!
          </div>
        </div>
      </div>
    );
  }
}

export default Home;