import { Flex, Text, Image ,Badge} from "@chakra-ui/react";
import {Rating} from "@material-ui/lab"
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceDetail = ({ place }) => {
  return (
    <Flex
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      ml={2}
      mb={2}
      borderRadius={2}
      shadow={"lg"}
      direction={"column"}
      alignItems={"start"}
      justifyContent={"space-between"}
    >
      <Flex justifyContent={"space-between"} width="full">
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width={"full"}
          px={2}
        >
          <Flex
            alignItems={"center"}
            width="full"
            justifyContent={"space-between"}
          >
            <Text
              textTransform={"capitalize"}
              width={"200px"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {place.name}
            </Text>
            <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
              {place.price }
            </Text>
          </Flex>
          {/* {Ratings} */}
          <Flex alignItems={"center"} width="full" fontSize={"15px"} fontWeight={'bold'}color={'gray.700'} gap={2}>
            <Rating fontSize='small' value={Number(place.rating)} readOnly/>
            <Text>({place.num_reviews})</Text>
          </Flex>
          <Flex>
            <Text fontSize={'13px'} color='gray.500'>{place.ranking}</Text>
          </Flex>
          <Flex>
            <Text  fontSize={'13px'} color='black'>{place.open_now_text}</Text>
          </Flex>
          <Flex>
            {
              place?.dietary_restrictions&&(
                <Flex flexWrap={'wrap'} width={'full'}>
                  {
                    place.dietary_restrictions.map((n,i)=>(
                      <Badge colorScheme={"cyan"} cursor={'pointer'} key={i} mt={'1'} m={'1'}fontSize={'10px'}>
                        {n.name}
                      </Badge>
                    ))
                  }
                </Flex>
              )
            }
          </Flex>
        </Flex>
        <Image
          border={"1px"}
          objectFit={"cover"}
          width={"90px"}
          height={"120px"}
          rounded="lg"
          src={place.photo ? place.photo.images.large.url: "http://www.hotelgreenfort.in/images/bed11.png"}
        />
      </Flex>
      <Flex display={'inline-flex'} width={'full'}>
        <Flex fontSize={'20px'} align={'center'}><IoLocationSharp/></Flex>
        <Text ml={'2'} fontSize={'15px'}color={'gray.700'} isTruncated>{place.address} </Text>
      </Flex>
    </Flex>
  );
};
export default PlaceDetail;
