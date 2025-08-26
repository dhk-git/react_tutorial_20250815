import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer:React.FC = () => {
    const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'});
}
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">회사소개</h3>
            <p>저희 회사는 최고의 서비스를 제공하기 위해 노력하고 있습니다.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">빠른링크</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-white transition-colors">홈</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">회사 정보</Link></li>
              <li><Link to="/leadership" onClick={scrollToTop} className="hover:text-white transition-colors">임원 소개</Link></li>
              <li><Link to="/board" onClick={scrollToTop} className="hover:text-white transition-colors">업무 게시판</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors">제공 기술</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
                <li>울산광역시 북구</li>
                <li>중산동</li>
                <li>전화 : 052-000-0000</li>
                <li>HP : 010-0000-0000</li>
                <li>E-Mail : 010@0000.0000</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">소셜미디어</h3>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;2025 XXX Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
