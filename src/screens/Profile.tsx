import { Center, Heading, ScrollView, VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Profile(){
    return(
        <VStack flex={1}>
           <ScreenHeader title='Perfil'/>

           <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
            <Center mt={6} px={10}>
                <UserPhoto
                  source={{ uri: 'https://github.com/eloisaoliveira.png'}}
                  alt='Foto do usuário'
                  size={33}
                />

                <Input
                  mt={6}
                  bg='gray.600'
                  placeholder='Nome'
                />
                <Input
                  bg='gray.600'
                  placeholder='E-mail'
                  isDisabled
                />

                <Heading color='gray.200' fontSize='md' mb={2} alignSelf='flex-start' mt={12}>
                    Alterar senha
                </Heading>

                <Input
                  bg='gray.600'
                  placeholder='Senha antiga'
                  secureTextEntry
                />

                <Input
                  bg='gray.600'
                  placeholder='Nova senha'
                  secureTextEntry
                />

                <Input
                  bg='gray.600'
                  placeholder='Confirme a nova senha'
                  secureTextEntry
                />

                <Button
                  title='Atualizar'
                  mt={4}
                />
            </Center>
           </ScrollView>
        </VStack>
    )
}