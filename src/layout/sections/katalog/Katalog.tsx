import styled from "styled-components";

import { Container } from "../../../components/Container";

import { KatalogHeader } from "./KatalogHeader/KatalogHeader";
import { Navigation } from "./Navigation/Navigation";
import { Productions } from "../sectionsthree/productions/Productions";
import { Kartochka } from "./Navigation/Kartochki/Kartochka";
import { Thema } from "../../../styles/Thema";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ShowAllButton } from "./Navigation/ShawAllButton/ShowAll";
import PaginationComponent from "../../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
export const KatalogOfProduction = () => {

  const [cards, setCards] = useState([])

  const [page, setPage] = useState<number>(1)




    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8000/cards?page=${page}`,{
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setCards(data);
        } catch(error)     {
         console.log((error as any).message);
        }
 }  
      fetchData();
    }, [page])


  return (
    <KatalogStyled>
      <LocalContainer>
        <KatalogHeader />
        <ContainerSection>
          <Kartochka />
          <Kartochka />
          <Kartochka />
          <Kartochka />
          <Kartochka />
          <Kartochka />
          <Kartochka />
          <Kartochka />
          <Kartochka />
        </ContainerSection>
          <WrapperShowAll>
            <ShowAllButton />
          </WrapperShowAll>
          <PaginationWrapper>
            <PaginationComponent data={[]} itemsPerPage={1}/>
          </PaginationWrapper>
        <Navigation />
      </LocalContainer>
    </KatalogStyled>
  );
};

const KatalogStyled = styled.div`
  height: 1900px;
  padding-top: 150px;
`;

const ContainerSection = styled.div`
  position: absolute;

  padding-left: 40px;

  height: 1440px;
  width: 1100px;
  left: 250px;
  top: 125px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const LocalContainer = styled(Container)`
  height: 1760px;
`;
const WrapperShowAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;
 top:1490px;
  padding: 15px 100px 15px 100px;
`;
const PaginationWrapper = styled.div``;
