import { useNavigation } from '@react-navigation/native'
import { VStack, Heading, Center, ScrollView } from 'native-base'
import { useForm, Controller } from 'react-hook-form'

import {Input} from '@components/Input'
import { Button } from '@components/Button'

export function SignUp(){

  const { control, handleSubmit } = useForm()

  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp(data: any) {
    console.log(data)
  }

  return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} px={10}>
          <Center flex={1}>
            <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
              Crie sua conta
            </Heading>

            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, value } }) => (
                <Input 
                  placeholder='Nome'
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <Input 
                  placeholder='E-mail'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, value } }) => (
                <Input 
                  placeholder='Senha'
                  secureTextEntry
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name='password_confirm'
              render={({ field: { onChange, value } }) => (
                <Input 
                  placeholder='Confirme a senha'
                  secureTextEntry
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType='send'
                />
              )}
            />

            <Button title='Criar e acessar'
              onPress={handleSubmit(handleSignUp)} 
            />
          </Center>

          <Button
            title='Voltar para o login'
            variant='outline'
            mt={24}
            onPress={handleGoBack}
          />
        </VStack>
      </ScrollView>
  )
}