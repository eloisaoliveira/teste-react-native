import { HStack, Heading, Image, VStack, Text } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {}

export function UserCard({ ...rest }: Props){
    return (
        <TouchableOpacity { ...rest }>
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
                <Image
                  source={{ uri: 'https://github.com/eloisaoliveira.png'}}
                  alt='Foto do usuário'
                  w={16}
                  h={16}
                  rounded='md'
                  mr={4}
                  resizeMode='center'
                />

                <VStack>
                    <Heading fontSize='lg' color='white'>
                        Eloisa de Oliveira
                    </Heading>

                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
                        eloisa.oliveira@email.com
                    </Text>
                </VStack>
            </HStack>
        </TouchableOpacity>
    )
}