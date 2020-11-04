import React, { useEffect, useState } from 'react';
import styles from './Image.module.scss';

export default function Image({
    imageUrl,
    fallbackUrl,
    alt,
    extraContent,
}) {

    const [errored, setErrored] = useState(false);
    const [src, setSrc] = useState(imageUrl)

    useEffect(() => {
        setSrc(imageUrl)
        setErrored(false)
    }, [imageUrl])

    const onError = () => {
        setErrored(true)
        setSrc(fallbackUrl)
    }

    return (
        <div className={styles.imageContainer}>
            <img
                src={src}
                onError={onError}
                alt={alt}
            />
            { extraContent && extraContent()}
        </div>
    )
}

/* Image.propTypes = {
    imageUrl: PropTypes.string,
    fallbackUrl: PropTypes.string,
    extraContent: PropTypes.func,
}; */
