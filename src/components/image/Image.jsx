import React, { useState } from 'react';
import styles from './Image.module.scss';

export default function Image({
    imageUrl,
    fallbackUrl,
    alt,
    extraContent,
}) {

    const [errored, setErrored] = useState(false);

    return (
        <div className={styles.imageContainer}>
            <img
                src={errored ? fallbackUrl : imageUrl}
                onError={() => setErrored(true)}
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
