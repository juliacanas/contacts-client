import React from 'react';
import ConnectionsSection from '../../components/connections/ConnectionsSection';
import SideBar from '../../components/sidebar/SideBar';
import styles from './ContactsPage.module.scss';

export default function ContactsPage() {
    return (
        <div className={styles.main}>
            <section className={styles.header}>
                <h1>Contacts Tool</h1>
                <div className={styles.profile}>
                    <p>USERNAME</p>
                    <i className='fa fa-user-circle' />
                </div>
            </section>

            <section className={styles.content}>
                <SideBar />
                <ConnectionsSection />
            </section>
        </div>
    )
}
