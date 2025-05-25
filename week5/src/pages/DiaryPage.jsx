import styled from "styled-components";
import Header from "../components/header/Header";
import diaryImg1 from "../assets/images/diary1.png";
import diaryImg2 from "../assets/images/diary2.png";
import diaryImg3 from "../assets/images/diary3.png";
import point3 from "../assets/images/point3.png";

import { Canvas, Note1, Note2, Note3, Note4, Note5, GroupPhoto, SlideImage, ScoreImage } from "../components/diary/Diary.styles";

export default function DiaryPage() {
  return (
    <>
      <Header />
      <Container>
        <TitleSection>
          <Title><Img src={point3} alt="포인트3" />Diary</Title>
          <Description>
            2024 아이디어톤에 참여한 소감은 어땠는지! 함께 했던 하루를 기록해 보아요.<br/>
            다양한 이야기들이 모여 더욱 의미 있는 추억이 될 거예요~
          </Description>
          <Button>방명록 쓰러가기</Button>
        </TitleSection>

        <Canvas>
          <Note1>다들 사랑해요호 !!!!!!!!</Note1>
          <Note2>최강동아리멋사<br />그 중 서경대가 최강</Note2>
          <GroupPhoto src={diaryImg1} alt="단체 사진" />
          <Note3>내가 더 더 더</Note3>
          <Note4>
            글씨를 이렇게도 작게 쓸 수 있어요<br />
            그치만 이렇게 쓰면 안보이겠죠?<br />
            시원하게 씁시다<br/>
            글씨를 이렇게도 작게 쓸 수 있어요<br />
            그치만 이렇게 쓰면 안보이겠죠?<br />
            시원하게 씁시다<br/>
            글씨를 이렇게도 작게 쓸 수 있어요<br />
            그치만 이렇게 쓰면 안보이겠죠?<br />
            시원하게 씁시다
          </Note4>
          <Note5>
            여기 후기 쓰는 곳임<br />
            그래서 제 소감은요...<br />
            (이하생략)
          </Note5>
          <SlideImage src={diaryImg2} alt="발표 슬라이드" />
          <ScoreImage src={diaryImg3} alt="점수 집계" />
        </Canvas>
      </Container>
    </>
  );
}
  const Container = styled.div`
  padding: 80px 100px;
  background-color: #fff;
`;

const TitleSection = styled.section`
  text-align: left;
  margin-bottom: 60px;
`;

const Img = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
 color: #1C1C1C;
font-family: Pretendard;
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 65px; 
`;

const Description = styled.p`
  color: #7C7C7C;
font-family: Pretendard;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 142.857% */
`;

const Button = styled.button`
  width: 367px;
height: 116px;
flex-shrink: 0;
  color: white;
  border-radius: 15px;
background: #00CE52;
  color: #FEFEFE;

text-align: center;
font-family: Pretendard;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: #1aa55a;
  }
  `;``


