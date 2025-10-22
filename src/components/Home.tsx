import './Home.css';
import banner from '../assets/banner.png';
import island from '../assets/island.png';
import rage from '../assets/rage.png';
import krashpop from '../assets/krashpop.png';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <OurGamesSection />
      <FooterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="banner-zone">
      <div className="center-content">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="about-section content-section">
      <h2 className="about-title">## ABOUT ANIMALL</h2>
      
      <div className="about-content">
        <p className="about-text">Animall is an independent mobile game studio based in Seoul, South Korea.</p>
        <p className="about-text">We create fun and creative mobile games for global players.</p>
        <p className="about-text">Our mission is to bring unique Korean-style creativity to mobile gaming experiences worldwide.</p>
        
        <div className="about-divider"></div>
        
        <p className="about-text-kr">Animall은 서울에 기반을 둔 인디 모바일 게임 스튜디오입니다.</p>
        <p className="about-text-kr">우리는 전 세계 유저들을 위한 창의적이고 재미있는 게임을 만듭니다.</p>
        <p className="about-text-kr">한국적인 감성과 스토리텔링을 전 세계 게이머들에게 전달하는 것이 우리의 목표입니다.</p>
      </div>
    </div>
  );
}

function OurGamesSection() {
  return (
    <div className="games-section">
      <div className="games-content">
        <h2 className="games-title">## Our Games</h2>
        <p className="games-description">Explore Animall's original mobile games built with creativity, story, and fun for everyone.</p>
      </div>
      
      <div className="game-showcase content-section">
        <div className="game-image-container">
          <img src={island} alt="Survive on a Strange Island" className="game-image" />
        </div>
        <div className="game-info">
          <h3 className="game-title">### Survive on a Strange Island (2025)</h3>
          <p className="game-description">A survival-crafting adventure where you build, explore, and thrive on a mysterious tropical island.</p>
          <p className="game-description">Gather resources, craft tools, and uncover hidden secrets as you strive to escape.</p>
        </div>
      </div>
      
      <div className="game-showcase content-section">
        <div className="game-image-container">
          <img src={rage} alt="Bullet Rage" className="game-image" />
        </div>
        <div className="game-info">
          <h3 className="game-title">### Bullet Rage (2025)</h3>
          <p className="game-description">A post-apocalyptic shooter featuring SD-style heroes and intense arena battles.</p>
          <p className="game-description">Upgrade your weapons and fight through waves of enemies in fast-paced roguelike stages!</p>
        </div>
      </div>
      
      <div className="game-showcase content-section">
        <div className="game-image-container">
          <img src={krashpop} alt="Krash Pop" className="game-image" />
        </div>
        <div className="game-info">
          <h3 className="game-title">### Krash Pop (2025)</h3>
          <p className="game-description">A fast and colorful match-puzzle game blending Korean-style design with global casual gameplay.</p>
          <p className="game-description">Pop blocks, chain combos, and collect cute characters in this new K-style puzzle experience!</p>
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-content content-section">
        <h2 className="footer-title">## Contact & Business Info</h2>
        <p className="footer-subtitle">For partnership or press inquiries, please contact us using the details below.</p>
        
        <div className="footer-info-container">
          <div className="business-info">
            <h3 className="info-title">**BUSINESS INFORMATION**</h3>
            <ul className="info-list">
              <li><strong>Business Name:</strong> Animall</li>
              <li><strong>Business Type:</strong> Sole Proprietorship (Registered in South Korea)</li>
              <li><strong>Business Registration Number:</strong> 496-33-01800</li>
              <li><strong>D-U-N-S Number:</strong> 696621623</li>
              <li><strong>Address:</strong> 70 Namhyeon 4-gil, Gwanak-gu, Seoul, 08804, South Korea</li>
            </ul>
          </div>
          
          <div className="contact-info">
            <h3 className="info-title">**Address:**</h3>
            <div className="address-block">
              <p>70 Namhyeon 4-gil, 2F,</p>
              <p>Gwanak-gu, Seoul, 08804,</p>
              <p>Republic of Korea</p>
            </div>
            
            <h3 className="info-title email-title">**Email:**</h3>
            <p className="email">cnclub806@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-contact">
          <p>For inquiries, partnership, or publishing collaboration, please contact us at</p>
          <p className="email-highlight">📧 cnclub806@gmail.com</p>
        </div>
        
        <div className="footer-copyright">
          <p>© 2025 Animall. Independent Mobile Game Studio, Seoul, South Korea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Home;
