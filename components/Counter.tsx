import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        if (counter === 0) return;

        setCounter(counter - 1);
    }

    return (
        <>
            <View style={{
                marginBottom: 8,
                alignItems: 'center'
            }}>
                <Text style={styles.title}>Counter</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }}>
                <Button
                    title='   -   '
                    disabled={counter === 0}
                    onPress={handleDecrease} />

                <Text style={styles.counter}>{counter}</Text>

                <Button
                    title='   +   '
                    onPress={handleIncrease} />
            </View>
        </>
    )
}

const styles = {
    title: { fontSize: 24 },
    counter: { fontSize: 16 }
}

export default Counter