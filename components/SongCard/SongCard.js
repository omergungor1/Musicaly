import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './SongCard.styles';

const SongCard = props => {
    // console.log(props);
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.song.imageUrl }}
                style={styles.image}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.contentContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.artist}>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>
                    {props.song.isSoldOut && <View style={styles.soldOutContainer}>
                        <Text style={styles.soldOutTitle}>Tükendi</Text>
                    </View>}
                </View>
            </View>
        </View>
    )
}

export default SongCard;