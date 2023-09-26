import React, { useState } from 'react';
import styles from '@/styles/components/caroussel.module.sass'

const Caroussel = ({ images }) => {
    const [Images, SetImages] = useState(0);

    function lengthImages(images) {
        return images[Images]
    };
    const moreImages = (operator) => {
        operator === '+' && (
            SetImages(Images + 1),
            Images >= images.length - 1 && SetImages(0)
        );
        operator === '-' && (
            SetImages(Images - 1),
            Images === 0 && SetImages(images.length-1)
        );
    }
    return (
        <div className={styles.carousselMain}>
            <button onClick={() => moreImages('-')}>-</button>
            {lengthImages(images)}
            <button onClick={() => moreImages('+')}>+</button>
        </div>
    )
}

export default Caroussel
