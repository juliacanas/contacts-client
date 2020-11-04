import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './ProfileOptions.module.scss';

export default function ProfileOptions({
    options
}) {
    const [userSectionOpen, setUserSectionOpen] = useState(false);

    function handleToggleMenu(event) {
        if (event) event.stopPropagation();
        setUserSectionOpen(!userSectionOpen);
    }

    return (
        <div className={styles.container}>
            <div onClick={handleToggleMenu} className={styles.userSection}>
                <p>USERNAME</p>
                <AccountCircleIcon />
            </div>
            {userSectionOpen
                && (
                    <div className={styles.options}>
                        {
                            options?.map(({ id, label, action = () => { console.log('change me'); } }) => {
                                function manageClick(event) {
                                    event.stopPropagation();
                                    handleToggleMenu();
                                    action();
                                }
                                return (
                                    <div key={id} id={id} className='option-item' onClick={manageClick}>
                                        <p>{label}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
        </div >
    )
}
