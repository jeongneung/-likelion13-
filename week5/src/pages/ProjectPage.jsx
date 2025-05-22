import styled from "styled-components";
import Header from "../components/header/Header";

// 이미지들 import (파일명은 예시로 작성했어요)
import proj1 from "../assets/images/project1.png";
import proj2 from "../assets/images/project2.png";
import proj3 from "../assets/images/project3.png";
import proj4 from "../assets/images/project4.png";
import proj5 from "../assets/images/project5.png";
import proj6 from "../assets/images/project6.png";
import proj7 from "../assets/images/project7.png";
import proj8 from "../assets/images/project8.png";

const projects = [
  { title: "달력일기", image: proj1 },
  { title: "travAI", image: proj2 },
  { title: "아이랑", image: proj3 },
  { title: "톡신", image: proj4 },
  { title: "파란사각형", image: proj5 },
  { title: "기록의 힘", image: proj6 },
  { title: "FrameOut", image: proj7 },
  { title: "TPocket", image: proj8 },
];

export default function ProjectPage() {
  return (
    <>
      <Header />
      <Container>
        <Title>🌸 Project</Title>
        <Description>
          2025 서경대학교 아이디어톤 프로젝트 파일입니다.클릭하여 상세한 정보를 확인하세요!<br />
          모아 놓으니 더 에쁘네요. 다들 너무 수고하셨습니다!
        </Description>

        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 80px 100px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 40px;
`;

const ProjectCard = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
