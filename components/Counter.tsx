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
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{ fontSize: 24 }}>Counter</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <Button
                    title='   -   '
                    disabled={counter === 0}
                    onPress={handleDecrease} />

                <Text>{counter}</Text>

                <Button
                    title='   +   '
                    onPress={handleIncrease} />
            </View>
        </>
    )
}

export default Counter