import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Menu from './MenuComponent';
import Inform from './InformComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent';
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent';
import Myorders from './MyordersComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotprods: [] // mảng rỗng ban đầu
    };
  }

  // ================= LIFECYCLE =================
  componentDidMount() {
    fetch('/api/hotprods')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ hotprods: Array.isArray(data) ? data : [] });
      });
  }

  // ================= RENDER =================
  render() {
    const { hotprods } = this.state;

    return (
      <div className="body-customer-premium">
        <style>{`
          /* CONTAINER TỔNG THỂ */
          .body-customer-premium {
            min-height: 100vh;
            background: #ffffff;
            font-family: 'Inter', -apple-system, sans-serif;
            position: relative;
          }

          /* HEADER WRAPPER - TẠO SỰ ẤN TƯỢNG BAN ĐẦU */
          .header-main-sticky {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: white;
            box-shadow: 0 10px 30px rgba(211, 47, 47, 0.08);
          }

          /* THANH HOT PRODUCTS - NÂNG CẤP THÀNH MARQUEE XỊN XÒ */
          .hot-bar-container {
            background: linear-gradient(90deg, #d32f2f 0%, #ff4d4d 50%, #ff9f43 100%);
            padding: 12px 0;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

          .hot-marquee {
            display: flex;
            white-space: nowrap;
            animation: marqueeEffect 30s linear infinite;
          }

          .hot-item {
            color: white;
            font-size: 13px;
            font-weight: 900;
            text-transform: uppercase;
            padding: 0 40px;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
          }

          .hot-item::before {
            content: '🔥';
            margin-right: 10px;
          }

          @keyframes marqueeEffect {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* ROUTING CONTAINER */
          .main-content-flow {
            max-width: 1440px;
            margin: 0 auto;
            padding: 30px 20px;
            animation: fadeIn 0.8s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* HIỆU ỨNG HÀO QUANG NỀN CHÌM */
          .body-customer-premium::after {
            content: '';
            position: fixed;
            bottom: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(211, 47, 47, 0.05) 0%, transparent 70%);
            z-index: -1;
            pointer-events: none;
          }
        `}</style>

        {/* HEADER SECTION - Gom nhóm Menu và Inform */}
        <div className="header-main-sticky">
          <Menu />
          <Inform />
        </div>

        {/* HOT PRODUCTS PREVIEW - Cải tạo thành thanh trượt ngang siêu thu hút */}
        {Array.isArray(hotprods) && hotprods.length > 0 && (
          <div className="hot-bar-container">
            <div className="hot-marquee">
              {/* Nhân đôi mảng để tạo hiệu ứng chạy liên tục */}
              {[...hotprods, ...hotprods].map((prod, index) => (
                <div key={`${prod._id}-${index}`} className="hot-item">
                  {prod.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROUTING - Giữ nguyên tuyệt đối cấu trúc Route của bạn */}
        <div className="main-content-flow">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home hotprods={hotprods} />} />
            <Route path="/product/category/:cid" element={<Product />} />
            <Route path="/product/search/:keyword" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/active' element={<Active />} />
            <Route path='/login' element={<Login />} />
            <Route path='/myprofile' element={<Myprofile />} />
            <Route path='/mycart' element={<Mycart />} />
            <Route path='/myorders' element={<Myorders />} />
          </Routes>
        </div>

        {/* FOOTER CHÌM ĐẬM CHẤT HÀN QUỐC */}
        <div style={{ textAlign: 'center', padding: '40px', opacity: 0.15, fontSize: '30px' }}>
          🥢 🇰🇷 🥢
        </div>
      </div>
    );
  }
}

export default Main;