import "./App.css";
import jeongneungImg from './assets/이정능.jpg';
import snowmanImg from './assets/snowman.jpg';
import chickenImg from './assets/chicken.png';
export default function App(){//React 컴포넌트를 내보내는 코드
return (
<div>
    <header className="header">
        <h1>My Profile</h1>
        <p>나만의 웹사이트를 만들어봐요!</p>
    </header>

    <nav className="nav">
        <ul>
            <li><a href="#about">자기소개</a></li>
            <li><a href="#features">관심사</a></li>
            <li><a href="#contact">연락하기</a></li>
            <li><a href="https://skulikelion.com" target="_blank">멋사 사이트 바로가기</a></li>
        </ul>
    </nav>

    <main className="main">
        <section id="about" className="section">
            <h2>안녕하세요!</h2>
            <p>만나서 반갑습니다. 저는 컴퓨터공학과에 재학중인 22학번 이정능입니다.</p>
            <p>함께 즐거운 동아리 생활 보내봐요 ^^</p>
            <img className="img" src={jeongneungImg} alt="about_image" />
        </section>

        <section id="features" className="section">
            <h2>관심사</h2>
            
            <h3>취미</h3>
            <ul>
                <li>영화 보기</li>
                <li>게임 하기</li>
                <li>눈사람 만들기</li>
                <li>책 읽기기</li>
            </ul>
            <img className="img" src={snowmanImg} alt="snowman_image" />

            <h3>좋아하는 음식 순위</h3>
            <ol>
                <li>치킨</li>
                <li>피자</li>
                <li>햄버거</li>
            </ol>
            <img className="img" src={chickenImg} alt="about_image" />
        </section>

        <section id="contact" class="section">
            <h2>연락하기</h2>
            <p>이메일: jeong2052skuniv@ac.kr</p>
            <p>전화번호: 010-5912-5490</p>
        </section>
    </main>

    <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
    </footer>
    </div>
);
}