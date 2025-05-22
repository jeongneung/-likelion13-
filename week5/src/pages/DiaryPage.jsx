import styled from "styled-components";
import Header from "../components/header/Header";
import diaryImg1 from "../assets/images/diary1.png";
import diaryImg2 from "../assets/images/diary2.png";
import diaryImg3 from "../assets/images/diary3.png";

export default function DiaryPage() {
  return (
    <>
      <Header />
      <Container>
        <TitleSection>
          <Emoji>🌸</Emoji>
          <Title>Diary</Title>
          <Description>
            2024 아이디어톤에 참여한 소감은 어땠는지! 함께 했던 하루를 기록해 보아요.
            다양한 이야기들이 모여 더욱 의미 있는 추억이 될 거예요.
          </Description>
          <Button>방명록 쓰러가기</Button>
        </TitleSection>

        <ContentSection>
          <Note color="#FFD86F" rotate="-3deg">다들 사랑해요호 !!!!!!!!</Note>
          <Note color="#A5E85C" rotate="2deg">최강동아리멋사<br />그 중 서경대가 최강</Note>
          <ImageBlock src={diaryImg1} alt="단체 사진" rotate="3deg" />
          <Note color="#7B84FC" rotate="-4deg">내가 더 더 더</Note>
          <Note color="#FF8484" rotate="1deg">
            글씨를 이렇게도 작게 쓸 수 있어요<br />
            그치만 이렇게 쓰면 안보이겠죠?<br />
            시원하게 씁시다<br />
            글씨를 이렇게도 작게 쓸 수 있어요<br />
            그치만 이렇게 쓰면 안보이겠죠?<br />
            시원하게 씁시다<br />
            글씨를 이렇게도 작게 쓸 수 있어요<br />
            그치만 이렇게 쓰면 안보이겠죠?<br />
            시원하게 씁시다
          </Note>
          <Note color="#B28DFF" rotate="0deg">
            여기 후기 쓰는 곳임<br />
            그래서 제 소감은요...<br />
            (이하생략)
          </Note>
          <ImageBlock src={diaryImg2} alt="발표 슬라이드" rotate="-2deg" />
          <ImageBlock src={diaryImg3} alt="점수 집계" rotate="1deg" />
        </ContentSection>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 80px 100px;
  background-color: #fff;
`;

const TitleSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
`;

const Emoji = styled.p`
  font-size: 30px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  background-color: #21c36b;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1aa55a;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const Note = styled.div`
  background-color: ${({ color }) => color || "#eee"};
  font-size: 20px;
  font-weight: bold;
  padding: 24px;
  border-radius: 12px;
  width: fit-content;
  max-width: 400px;
  text-align: center;
  transform: rotate(${({ rotate }) => rotate || "0deg"});
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const ImageBlock = styled.img`
  width: 500px;
  border-radius: 20px;
  transform: rotate(${({ rotate }) => rotate || "0deg"});
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;
