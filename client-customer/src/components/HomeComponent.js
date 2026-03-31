import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }

  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }

  // ================= RENDER TỪNG MÓN ĂN (GIỮ NGUYÊN TUYỆT ĐỐI LOGIC) =================
  renderProductSection(products) {
    return products.map((item) => {
      if (!item || !item.image) return null;

      return (
        <div key={item._id} className="premium-item-wrapper">
          <div className="premium-card">
            <Link to={'/product/' + item._id} className="card-outer-link">
              <div className="premium-img-box">
                <img
                  src={'data:image/jpg;base64,' + item.image}
                  alt={item.name}
                  className="premium-food-img"
                />
                <div className="img-overlay-soft"></div>
                <div className="luxury-tag">KOREAN ARTISAN</div>
              </div>
            </Link>
            
            <div className="premium-info">
              <div className="brand-accent">MUKBANG EXCLUSIVE</div>
              <h3 className="premium-food-name">{item.name}</h3>
              <div className="premium-price-row">
                <span className="price-label">Investment</span>
                <span className="price-value">{item.price?.toLocaleString()} <small>VNĐ</small></span>
              </div>
              <div className="luxury-line"></div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="luxury-home-container">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@300;500;800&display=swap');

          :root {
            --ruby-red: #9B111E;
            --pure-black: #0A0A0A;
            --champagne-gold: #D4AF37;
            --soft-white: #fffdfa; /* Màu trắng sứ mịn */
          }

          .luxury-home-container {
            min-height: 100vh;
            background: var(--soft-white);
            color: var(--pure-black);
            font-family: 'Montserrat', sans-serif;
            overflow-x: hidden;
          }

          /* HERO BANNER - NÂNG CẤP KHUNG TRANH TRIỂN LÃM ĐA CHIỀU */
          .hero-banner-section {
            width: 100%;
            padding: 50px;
            background: var(--soft-white);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .hero-frame {
            position: relative;
            width: 100%;
            max-width: 1500px;
            overflow: hidden;
            border: 1px solid #eee;
            box-shadow: 0 40px 100px rgba(0,0,0,0.06);
            /* HIỆU ỨNG CHUYỂN ĐỘNG CẢ NGƯỜI LẪN ẢNH (Parallax nhẹ) */
            transform: translateZ(0); 
            transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          }

          .hero-frame:hover {
            transform: scale(1.02);
            box-shadow: 0 50px 120px rgba(155, 17, 30, 0.08);
          }

          .hero-main-img {
            width: 100%;
            height: auto;
            display: block;
            filter: contrast(1.03) brightness(1.01);
            transition: transform 2s;
          }

          /* HIỆU ỨNG PHẢN QUANG GLASSMORPHISM chạy qua ảnh */
          .hero-frame::after {
            content: '';
            position: absolute;
            top: 0; left: -100%; width: 50%; height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
            transform: skewX(-25deg);
            animation: reflect 5s infinite;
          }

          /* TIÊU ĐỀ KIỂU TẠP CHÍ SẮC NÉT */
          .luxury-title-box {
            text-align: center;
            margin-bottom: 120px;
          }

          .luxury-title-box h2 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 70px;
            font-weight: 700;
            color: var(--pure-black);
            margin: 0;
            letter-spacing: -2px;
            position: relative;
            display: inline-block;
            padding: 0 20px;
          }

          /* VIỀN MẢNH ĐỊNH HÌNH TIÊU ĐỀ */
          .luxury-title-box h2::before, .luxury-title-box h2::after {
            content: '';
            position: absolute;
            height: 1px; width: 100px;
            background: var(--champagne-gold);
            top: 50%; transform: translateY(-50%);
          }
          .luxury-title-box h2::before { left: -110px; }
          .luxury-title-box h2::after { right: -110px; }

          .luxury-title-box .sub-heading {
            display: block;
            font-size: 13px;
            letter-spacing: 12px;
            color: var(--ruby-red);
            text-transform: uppercase;
            margin-bottom: 20px;
            font-weight: 600;
          }

          /* GRID HỆ THỐNG CAO CẤP */
          .premium-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 120px 60px; /* Tăng khoảng trắng sang trọng */
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 60px;
          }

          /* CARD MÓN ĂN - THIẾT KẾ CỰC SANG, SẮC NÉT */
          .premium-card {
            background: #fff;
            transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
            position: relative;
            border: 1px solid #f2f2f2; /* Viền định hình card */
          }

          .premium-img-box {
            position: relative;
            height: 480px;
            overflow: hidden;
            background: #f8f8f8;
            border-bottom: 1px solid #eee;
          }

          .premium-food-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 1.8s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .img-overlay-soft {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.01);
            pointer-events: none;
          }

          .luxury-tag {
            position: absolute; bottom: 30px; left: 30px;
            background: #fff; color: #000;
            padding: 8px 25px; font-size: 10px; font-weight: 800;
            letter-spacing: 3px; box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            border: 1px solid var(--champagne-gold);
          }

          /* HOVER EFFECTS SANG TRỌNG */
          .premium-card:hover { transform: translateY(-20px); box-shadow: 0 30px 70px rgba(155, 17, 30, 0.05); }
          .premium-card:hover .premium-food-img { transform: scale(1.1) rotate(1deg); }

          /* INFO INFO */
          .premium-info { padding: 40px 10px; text-align: center; }
          
          .brand-accent {
            font-size: 12px; color: var(--ruby-red); font-weight: 800;
            letter-spacing: 4px; margin-bottom: 15px;
          }

          .premium-food-name {
            font-family: 'Cormorant Garamond', serif;
            font-size: 34px; font-weight: 700; color: #1a1a1a;
            margin-bottom: 25px;
          }

          .premium-price-row {
            display: flex; justify-content: center; align-items: center; gap: 10px;
          }

          .price-label { font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 2px; }
          .price-value { font-size: 24px; font-weight: 300; color: #000; letter-spacing: 1px; }
          .price-value small { font-size: 12px; font-weight: 600; color: var(--ruby-red); }

          /* ĐƯỜNG CHỈ LUXURY CHẠY KHI HOVER */
          .luxury-line {
            width: 0; height: 1px; background: var(--ruby-red);
            margin: 30px auto 0; transition: 0.9s ease;
          }
          .premium-card:hover .luxury-line { width: 150px; }

          /* KEYFRAMES */
          @keyframes reflect {
            0% { left: -100%; }
            20% { left: 150%; }
            100% { left: 150%; }
          }

          @media (max-width: 1200px) {
            .premium-grid { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); padding: 0 30px; }
            .luxury-title-box h2 { font-size: 50px; }
          }
        `}</style>

        {/* HERO BANNER - TOÀN DIỆN, CHUYỂN ĐỘNG & SÁNG SỦA */}
        <section className="hero-banner-section">
          <div className="hero-frame">
            <img 
              src="/images/hero-bg.png" 
              alt="Mukbang Premium Experience" 
              className="hero-main-img" 
            />
          </div>
        </section>

        <div className="content-wrapper-box">
          {/* MÓN MỚI RA LÒ (GIỮ NGUYÊN LOGIC) */}
          <section style={{marginTop:'50px'}}>
            <div className="luxury-title-box">
              <span className="sub-heading">New Artisan Collection</span>
              <h2>Món Mới Cực Hot</h2>
            </div>
            <div className="premium-grid">
              {this.state.newprods.length > 0 
                ? this.renderProductSection(this.state.newprods) 
                : <div className="text-center" style={{letterSpacing:'4px'}}>CURATING THE EXPERIENCE...</div>
              }
            </div>
          </section>

          {/* MÓN ĐƯỢC YÊU THÍCH NHẤT (GIỮ NGUYÊN LOGIC) */}
          {this.state.hotprods.length > 0 && (
            <section style={{marginTop: '180px'}}>
              <div className="luxury-title-box">
                <span className="sub-heading">Chef's Masterpieces</span>
                <h2>Món Ngon Phải Thử</h2>
              </div>
              <div className="premium-grid">
                {this.renderProductSection(this.state.hotprods)}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  // ================= APIs (GIỮ NGUYÊN TUYỆT ĐỐI) =================
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      this.setState({ newprods: res.data || [] });
    });
  }

  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      this.setState({ hotprods: res.data || [] });
    });
  }
}

export default Home;