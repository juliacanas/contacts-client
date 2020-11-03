import React, { useContext } from 'react';
import ConnectionsSection from '../../components/connections/ConnectionsSection';
import SideBar from '../../components/sidebar/SideBar';
import styles from './ContactsPage.module.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthContext } from '../../context/auth/authContext';

export default function ContactsPage() {
    const { user } = useContext(AuthContext)
    return (
        <div className={styles.main}>
            <section className={styles.header}>
                <h1>Contacts Tool</h1>
                <div className={styles.profile}>
                    <p>{user?.userName}</p>
                    <AccountCircleIcon />
                </div>
            </section>

            <section className={styles.content}>
                <SideBar />
                <ConnectionsSection />
            </section>
        </div>
    )
}
