import React, { useCallback, useEffect } from 'react';
import { Text } from 'react-native';
import { useStore } from '../../store/store';

import {
    getDBConnection, createTable, fetchAllData,
} from '../../../database/db-service';

import Container, { Button } from './Home.styled';

const Home = () => {
    const theme:any = useStore();

    const loadDataCallback = useCallback(async () => {
        try {
            const db = await getDBConnection();
            await createTable(db);
            const data = await fetchAllData(db);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);
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
