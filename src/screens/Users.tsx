import { VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserCard } from '@components/UserCard'

export function Users(){
    return(
        <VStack flex={1} mb={3}>
            <ScreenHeader title='Usuários' />

            <UserCard />
            <UserCard />
            <UserCard />
        </VStack>
    )
}