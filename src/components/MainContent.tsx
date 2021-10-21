import Header  from "./Header";
import Footer from "./Footer";
import { FC } from "react";

const MainContent:FC = ({children})  =>{
    return(
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
};
export default MainContent;
