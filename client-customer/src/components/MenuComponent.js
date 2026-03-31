import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Dùng NavLink để nhận diện trang hiện tại
import withRouter from '../utils/withRouter';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }

  // ================= LIFECYCLE =================
  componentDidMount() {
    this.apiGetCategories();
  }

  // ================= EVENT HANDLERS =================
  btnSearchClick(e) {
    e.preventDefault();
    if (this.state.txtKeyword.trim()) {
      this.props.navigate('/product/search/' + this.state.txtKeyword);
    }
  }

  // ================= APIs =================
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      this.setState({ categories: res.data || [] });
    });
  }

  // ================= RENDER =================
  render() {
    const cates = this.state.categories.map((item) => (
      <li key={item._id} className="menu">
        {/* NavLink sẽ tự động thêm class .active khi URL khớp với 'to' */}
        <NavLink to={'/product/category/' + item._id}>
          {item.name}
        </NavLink>
      </li>
    ));

    return (
      <div className="border-bottom k-nav-cyber">
        <style>{`
          .k-nav-cyber {
            background: #ffffff;
            padding: 10px 40px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 9999;
            box-shadow: 0 4px 30px rgba(211, 47, 47, 0.15);
            border-bottom: 4px solid #d32f2f !important;
            font-family: 'Inter', sans-serif;
          }

          .k-nav-cyber::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #d32f2f, #ff9f43, #d32f2f);
            background-size: 200% auto;
            animation: moveGlow 3s linear infinite;
          }

          @keyframes moveGlow { to { background-position: 200% center; } }

          .float-left { display: flex; align-items: center; }
          
          ul.menu {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 12px;
          }

          /* STYLE CƠ BẢN CHO MENU */
          li.menu a {
            text-decoration: none;
            color: #333;
            font-weight: 800;
            font-size: 13px;
            padding: 10px 22px;
            border-radius: 12px;
            text-transform: uppercase;
            transition: all 0.3s ease;
            display: inline-block;
          }

          /* TÍNH NĂNG QUAN TRỌNG: GIỮ MÀU KHI ĐANG Ở TRANG ĐÓ (ACTIVE) */
          li.menu a.active {
            color: white !important;
            background: linear-gradient(135deg, #d32f2f 0%, #ff9f43 100%) !important;
            box-shadow: 0 5px 15px rgba(211, 47, 47, 0.4);
            transform: translateY(-2px);
          }

          /* HOVER CHO CÁC NÚT CHƯA ĐƯỢC CHỌN */
          li.menu a:hover:not(.active) {
            background: rgba(211, 47, 47, 0.1);
            color: #d32f2f;
          }

          /* SEARCH BOX RỘNG RÃI */
          .float-right { display: flex; align-items: center; flex: 1; justify-content: flex-end; margin-left: 50px; }
          
          .search {
            display: flex;
            background: #f8f9fa;
            border: 2px solid #eee;
            border-radius: 50px;
            padding: 5px;
            transition: 0.3s;
            width: 100%;
            max-width: 500px; /* Kéo dài thanh tìm kiếm ra cho thoải mái */
          }

          .search:focus-within {
            border-color: #ff9f43;
            background: #fff;
            box-shadow: 0 0 20px rgba(255, 159, 67, 0.15);
          }

          .keyword {
            border: none;
            background: transparent;
            padding: 8px 20px;
            outline: none;
            font-weight: 700;
            flex: 1;
            font-size: 15px;
            color: #d32f2f;
          }

          input[type="submit"] {
            background: linear-gradient(135deg, #d32f2f 0%, #ff9f43 100%);
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 50px;
            font-weight: 900;
            cursor: pointer;
            transition: 0.3s;
            text-transform: uppercase;
          }

          input[type="submit"]:hover {
            filter: brightness(1.1);
            transform: scale(1.05);
          }

          .float-clear { clear: both; }
        `}</style>

        {/* MENU TRÁI - TIẾNG VIỆT */}
        <div className="float-left">
          <ul className="menu">
            <li className="menu">
              <NavLink to="/home">Trang Chủ</NavLink>
            </li>
            {cates}
          </ul>
        </div>

        {/* SEARCH BOX KÉO DÀI ĐẲNG CẤP */}
        <div className="float-right">
          <form className="search" onSubmit={(e) => this.btnSearchClick(e)}>
            <input
              type="search"
              placeholder="Bạn muốn tìm món ăn gì hôm nay?..."
              className="keyword"
              value={this.state.txtKeyword}
              onChange={(e) => {
                this.setState({ txtKeyword: e.target.value });
              }}
            />
            <input
              type="submit"
              value="TÌM KIẾM"
            />
          </form>
        </div>

        <div className="float-clear" />
      </div>
    );
  }
}

export default withRouter(Menu);