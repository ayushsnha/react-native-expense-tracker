import React from 'react';
import {
    SafeAreaView, ScrollView, Text, View,
} from 'react-native';

const App = () => (
    <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <Text>Expense Tracker</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);

export default App;
