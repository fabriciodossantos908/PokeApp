import React from 'react'
import { View, Text, Image } from 'react-native'

interface pokemon {
    id: number;
    name: string;
    height: number;
    sprites: {
        back_default: string,
    };
}

const CardPokemon: React.FC<pokemon> = ({id, name, height, sprites}) => {
    return (
        <View>
            <Text>
                Teste
            </Text>

            <Text>
                altura {height}
            </Text>

            {/* <Image source={sprites.back_default} /> */}
        </View>
    )
}

export default CardPokemon;