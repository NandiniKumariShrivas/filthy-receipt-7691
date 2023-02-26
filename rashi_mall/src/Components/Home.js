import { Box, Flex } from '@chakra-ui/react'
import React from 'react'


function Home() {
  return (
    <div>
        <Box>

            <Flex>
                <Box> Category</Box>
                <Box> 
                     <input 
                     placeholder='Search the product'
                     />
                </Box>
                <Box>My orders</Box>
                <Box>Bag</Box>
                <Box>login</Box>

            </Flex>

        </Box>


    </div>
  )
}

export default Home