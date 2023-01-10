import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "../component/Property";

import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl }) =>(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="hero-banner"/>
    <Box p="5">
      <Text color="blue.400" fontSize="sm" fontWeight="bold">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="600">{title1}<br />{title2}</Text>
      <Text fontSize="1g" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" backgroundColor="blue.400">
        <Link href={linkName} >{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    
    <Box>
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => <Property property={property} key ={property.id}/>)}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title1="Search, Find, Buy & own your"
        title2="Dream House"
        desc1="Explore Apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Houses"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008" 
      />
      <Flex flexWrap="wrap">
        {propertyForSale.map((property) => <Property property={property} key ={property.id}/>)}
        </Flex>
    </Box>
  )
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6 `)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits
    }
  }
}
