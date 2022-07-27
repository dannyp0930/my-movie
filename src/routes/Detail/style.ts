import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const PrimeInfo = styled.section<{ color: string }>`
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    background-color: ${props => props.color};
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  };
`;

export const MovieBackdrop = styled.div<{ backdrop: string }>`
  background-image: url(${props => props.backdrop});
  background-size: cover;
  height: 100%;
  
  @media screen and (min-width: 1800px) {
    width: 50%;
  };
`;

export const MovieContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 2rem;
  position: relative;
  column-gap: 1rem;
`;

export const MovieImg = styled.img`
  width: 18rem;
  margin: auto;
  object-fit: fill;
`;

export const H2 = styled.h2`
  margin: 0;
`;

export const H3 = styled.h3`
  margin: 0;
`;

export const H4 = styled.h4`
  margin: 0;
`;

export const P = styled.p`
  margin: 0;
`;

export const MovieContent = styled.section`
  width: 90%;
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  ${P} {
    font-size: 16px;
  };
`;

export const BasicInfo = styled.div`
  display: flex;
  column-gap: .5rem;
  align-items: center;
`;

export const Certification = styled.div`
  border: 1px solid white;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 5px;
`;

export const Dot = styled.div`
  font-weight: bold;
`;

export const Text = styled.div`
`;

export const Tagline = styled(H3)`
  font-weight: normal;
  font-style: italic;
`;

export const Overview = styled(P)`
   
`;

export const Crews = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;

  ${H4} {
    margin-bottom: 0.5rem;
  }
  `

export const SubInfo = styled.section`
  margin: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`;

export const MainInfo = styled.article`
  margin: 1rem 0;
  height: 25rem;
  `;

export const SideInfo = styled.aside`

  ${H3} {
    margin-top: 1rem;
  };

  ${P} {
    margin-top: .5rem;
  };
`;

export const CastContainer = styled.article`
  width: 100%;
  position: relative;
  justify-content: center;
`;

export const Casts = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  position: absolute;

  &::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  };
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  };
`;

export const CardContainer = styled.div`
`;

export const Hompages = styled.ol`
  display: inline-block;
  list-style: none inside;
  padding: 0;
`;

export const Hompage = styled.li`
  float: left;
  margin-left: 1rem;
`

export const A = styled.a`
  /* font-size: 3rem;/ */
  color: white;
`