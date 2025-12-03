import type InfoData from "../models/infoData.model";
import CustomCard from "./card";

interface CardsContainerProps {
    info: InfoData[];
    title: string
}

export default function CardsContainerComponent({info, title} : CardsContainerProps){
    return(
        <div className="sectionContainer">
        <h1 className='title'>{title}</h1>
        <div className="cardContainer">
            {info.map(info =>
                <CustomCard info={info} />
            )}
        </div>
        </div>
    )
}