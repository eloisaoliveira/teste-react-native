import { VStack, Heading, Center, Text, ScrollView } from 'native-base'

import {Input} from '@components/Input'
import { Button } from '@components/Button'

export function SignUp(){
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg='gray.700' px={10}>
                <Center flex={1}>
                    <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
                        Crie sua conta
                    </Heading>

                    <Input 
                      placeholder='Nome'
                    />
                    <Input 
                      placeholder='E-mail'
                      keyboardType='email-address'
                      autoCapitalize='none'
                    />

                    <Input 
                      placeholder='Senha'
                      secureTextEntry
                    />

                    <Button title='Criar e acessar' />
                </Center>

                <Button
                  title='Voltar para o login'
                  variant='outline'
                  mt={24}
                />
            </VStack>
        </ScrollView>
    )
}