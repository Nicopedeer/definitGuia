import { PushpinFilled } from '@ant-design/icons';
import { Card } from 'antd';
import type InfoData from '../models/infoData.model';
import { Link } from 'react-router-dom';

const { Meta } = Card;

interface CustomCardProps {
    info: InfoData;
}

export default function CustomCard( {info} : CustomCardProps ){
  return(
    <Card
        style={{ width: 300 , backgroundColor: 'antiquewhite', padding: '10px', boxShadow:'17px 16px 30px 0px rgba(0,0,0,0.78)', borderRadius: '25px'}}
        cover={
        <img
            style={{borderRadius: '25px'}}
            draggable={false}
            alt="example"
            src={info.photoUrl}
        />
        }
        actions={[
        <Link className='welcomeLink' to={info.mapUrl} target="_blank" rel="noopener noreferrer"><PushpinFilled /> Ver en el mapa</Link>
        ]}
    >
        <Meta
        title={info.title}
        description={info.description}
        />
    </Card>
  )
};