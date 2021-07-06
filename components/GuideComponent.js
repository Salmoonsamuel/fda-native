import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Guide(props) {

    const renderGuideItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                heading={item.heading}
                subtitle={item.description}
            />
        );
    };

    return (
        <FlatList
            data={props.guideData}
            renderItem={renderGuideItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Guide;