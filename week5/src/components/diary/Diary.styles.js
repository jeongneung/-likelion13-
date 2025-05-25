import styled from "styled-components";

export const Canvas = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 1920px;
height: 4860px;
background: #FEFEFE;
`;
export const Note1 = styled.div`
position: absolute;
display : flex;
left: 103px ;
top: 674px ;
width: 782px ;
height: 806px ;
flex-shrink: 0;
border-radius: 15px;
background: #FFD15B;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
color: #151515;
font-family: Pretendard;
font-size: 128px;
font-style: normal;
font-weight: 900;
line-height: 160px; /* 125% */
text-align: center;

`;

export  const Note2 = styled.div`
position: absolute;
display: flex;
left: 806px;
top: 867px;    
width: 884px;
height: 451px;
flex-shrink: 0;
border-radius: 15px;
background: #BEE317;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
color: #151515;
font-family: Pretendard;
font-size: 88px;
font-style: normal;
font-weight: 900;
line-height: 120px; /* 136.364% */
text-align: center;
`;

export  const Note3 = styled.div`
position: absolute;
display : flex;
left: 195px ;
top: 2009px ;
width: 560px;
height: 372.796px;
transform: rotate(-6.485deg);
flex-shrink: 0;
border-radius: 15px;
background: #5A5DFF;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
transform: rotate(-7.678deg);
color: #FEFEFE;
font-family: Pretendard;
font-size: 96px;
font-style: normal;
font-weight: 900;
line-height: 160px; /* 166.667% */
text-align: center;
`;

export  const Note4 = styled.div`
position: absolute;
display : flex;
left: 545px ;
top: 2522px ;
width: 522px;
height: 537px;
flex-shrink: 0;
border-radius: 15px;
background: #FF7984;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
color: #FEFEFE;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 900;
line-height: 50px; /* 156.25% */
text-align: center;
`;

export  const Note5 = styled.div`
position: absolute;
display : flex;
left: 1155px ;
top: 3136px ;
width: 665px;
height: 444px;
flex-shrink: 0;
border-radius: 15px;
background: #593A6D;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
color: #FEFEFE;
font-family: Pretendard;
font-size: 64px;
font-style: normal;
font-weight: 900;
line-height: 90px; /* 140.625% */
text-align: center;
`;

/* 이미지들도 개별 스타일링 가능 */
export  const GroupPhoto = styled.img`
position: absolute;
display : flex;
left: 830.66px ;
top: 1560px ;
width: 1016.477px;
height: 573.549px;
transform: rotate(13.168deg);
flex-shrink: 0;
border-radius: 15px;
background: url(<path-to-image>) lightgray 50% / contain no-repeat;

box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
`;

export  const SlideImage = styled.img`
position: absolute;
display : flex;
left: 155px ;  
top: 2934px ;
width: 473px;
height: 537px;
flex-shrink: 0;
border-radius: 15px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
`;

export  const ScoreImage = styled.img`
position: absolute;
display : flex;
left: 446px ;
top: 3659px ;
width: 1034px;
height: 1033px;
flex-shrink: 0;
border-radius: 15px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
`;
