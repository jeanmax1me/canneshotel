
import wheretosleep from "public/bgtest.webp";
import MainPicWrapper from './../MainPicWrapper/page';
import BookingWidget from './../BookingWidget/page';
import Image from 'next/image';
import "./maincontent.css";
import { playfair }  from './../../fonts.jsx'


function Page() {

    return (
        <div className="main-content-wrapper">
            <div className="main-headings">
                <h1 className={playfair.className}>Welcome to the heart of the French Riviera</h1>
            </div>
            <MainPicWrapper>
                <Image src={wheretosleep} alt="Cannes banner" />
            </MainPicWrapper>       
                <BookingWidget />
        </div>
    )
}

export default Page;
