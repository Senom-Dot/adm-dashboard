import React from 'react';

import { ButtonStyle } from './style';

export function Button(props) {
    return (
        <ButtonStyle style={{ background: props.color }}>
            { props.text }
        </ButtonStyle>
    )
}