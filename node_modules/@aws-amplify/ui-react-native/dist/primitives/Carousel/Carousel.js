import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, View, } from 'react-native';
import CarouselPageIndicator from './CarouselPageIndicator';
import { VIEWABILITY_CONFIG } from './constants';
import { styles } from './styles';
export default function Carousel(props) {
    const { data, indicatorActiveStyle, indicatorInactiveStyle, renderItem, style, } = props;
    const flatListRef = useRef(null);
    const indexRef = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const windowWidthRef = useRef(Dimensions.get('window').width);
    const [width, setWidth] = useState(windowWidthRef.current);
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length !== 1) {
            return;
        }
        const [item] = viewableItems;
        indexRef.current = item.index;
        setCurrentIndex(indexRef.current);
    });
    const updateOrientation = useCallback((updatedWidth) => {
        if (windowWidthRef.current !== updatedWidth) {
            windowWidthRef.current = updatedWidth;
            setWidth(updatedWidth);
        }
    }, []);
    useEffect(() => {
        // on width change (due to orientation change), jump to the new index offset
        flatListRef?.current?.scrollToOffset({
            offset: width * indexRef.current,
            animated: false,
        });
    }, [width]);
    useEffect(() => {
        const orientationHandler = ({ window }) => {
            updateOrientation(window.width);
        };
        const subscription = Dimensions.addEventListener('change', orientationHandler);
        return subscription.remove;
    }, [updateOrientation]);
    const carouselRenderItem = (renderInfo) => (<View style={{ width }}>{renderItem(renderInfo)}</View>);
    if (!data?.length) {
        return null;
    }
    return (<>
      <FlatList bounces={false} data={data} decelerationRate="fast" disableIntervalMomentum horizontal onViewableItemsChanged={onViewableItemsChanged.current} ref={flatListRef} renderItem={carouselRenderItem} renderToHardwareTextureAndroid showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} snapToAlignment="start" snapToInterval={width} style={style} viewabilityConfig={VIEWABILITY_CONFIG}/>
      <CarouselPageIndicator activeStyle={indicatorActiveStyle} currentIndex={currentIndex} inactiveStyle={indicatorInactiveStyle} numberOfItems={data.length} style={styles.indicator}/>
    </>);
}
