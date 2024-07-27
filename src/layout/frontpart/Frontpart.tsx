import { Header } from "../header/Header"
import { HeaderMobile } from "../header/headermobile/HeaderMobile"
import { Footer } from "../sections/footer/Footer"
import { Main } from "../sections/main/Main"
import { SectionTwo } from "../sections/sectionTwo/SectionTwo"
import { SectionsFour } from "../sections/sectionsFour/SectionsFour"
import { SectionsOne } from "../sections/sectionsOne/SectionsOne"

import { SectionsOneMobile } from "../sections/sectionsOne/MobileOneSection"
import { SectionsThree } from "../sections/sectionsthree/SectionsThree"
import { MainMobile } from "../sections/main/MainMobile"
import { SectionTwoMobile } from "../sections/sectionTwo/SectionTwoMobile"

export const Front = () =>{
    return <div>
        <HeaderMobile/>
        <Header />
      <Main />
      <MainMobile/>
      <SectionsOne/>
      <SectionsOneMobile/>
      <SectionTwo />
      <SectionTwoMobile/>
      <SectionsThree />
      <SectionsFour />
      <Footer />
    </div>
}