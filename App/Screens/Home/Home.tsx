import React from 'react';
import { Text } from 'react-native';
import { useStore } from '../../store/store';

import Container, { Button } from './Home.styled';

const Home = () => {
    const theme:any = useStore();
    return (
        <Container>
            <Text>
                Expense Tracker Home
                {' '}
                {theme.globalState.mode}
            </Text>
            <Button onPress={() => theme.dispatch({ type: 'CHANGE_THEME' })}>
                <Text>Press to change Theme</Text>
            </Button>
        </Container>
    );
};

export default Home;
