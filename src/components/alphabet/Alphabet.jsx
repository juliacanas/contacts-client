import React, { useEffect, useState } from 'react'

export default function Alphabet({
    className,
    action
}) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [letterSelected, setLetterSelected] = useState('');

    useEffect(() => {
        action(letterSelected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letterSelected])

    return (
        <section className={className}>
            {alphabet.split('').map(letter => (
                <p 
                    key={`LETTER_${letter}`} 
                    /* className={styles.letter}  */
                    data-active={letterSelected === letter}
                    onClick={() => {
                        setLetterSelected(letterSelected === letter ? '' : letter)
                    }}
                >
                    {letter}
                </p>
            ))}
        </section>
    )
}
