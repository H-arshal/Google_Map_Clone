import { Flex } from '@chakra-ui/react';
import { useState,filter } from 'react';
import { useEffect } from 'react';
import Map from '../components/Map';
import Header from '../components/Header';
import List from '../components/List';
import { getPlacesData } from './api';
const Home = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setfilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude })
      }
    );
  }, []);

  useEffect(() => {
    const filteredData=places.filter((place)=>place.rating>ratings);
    setfilteredPlaces(filteredData)
    console.log(ratings)
  }, [ratings]);

  useEffect(()=>{
    setIsLoading(true)
    getPlacesData(type,bounds?.sw,bounds?.ne).then((data)=>{
      console.log(data);
      setPlaces(data)
      setIsLoading(true)
    });
  },[type,coordinates,bounds])
  
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      {/* <List places={ places } isLoading={isLoading} />
      <Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds}places={places } /> */}

      <List places={ filteredPlaces.length ? filteredPlaces : places } isLoading={isLoading} />
      <Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds}places={ filteredPlaces.length ? filteredPlaces : places } />
    
    
    </Flex>
  );
};
export default Home;
