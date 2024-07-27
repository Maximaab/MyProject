import { Header } from "../../../header/Header"
import { Footer } from "../../footer/Footer"
import { KatalogOfProduction } from "../Katalog"

import { KatalogHeadback } from "../KatalogMenu/KatalogHeader"

export const KatalogPart = () =>{
  
    return <div>
        <KatalogHeadback/>
        <KatalogOfProduction/>
        <Footer/>
    </div>
}