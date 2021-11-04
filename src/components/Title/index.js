import React from 'react';

import { TitleStyle } from './style';

export function Title(props) {
    return (
        <TitleStyle style={{ background: props.color }}>
            { props.text }
        </TitleStyle>
    )
}