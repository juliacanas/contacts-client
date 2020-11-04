import React, { useContext } from 'react';
import ConnectionsSection from '../../components/connections/ConnectionsSection';
import SideBar from '../../components/sidebar/SideBar';
import styles from './ContactsPage.module.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthContext } from '../../context/auth/authContext';
import ProfileOptions from '../../components/profileOoptions/ProfileOptions';

export default function ContactsPage() {
    const { user, logout } = useContext(AuthContext)

    const manageLogout = () => {
        logout()
    }

    return (
        <div className={styles.main}>
            <section className={styles.header}>
                <h1>Contacts Tool</h1>
                <ProfileOptions
                    options={[
                        { id: 'edit-profile', label: 'Edit profile', action: () => { console.log('Change Me'); } },
                        { id: 'logout', label: 'Logout', action: () => manageLogout() },
                    ]}
                />
{/*                 <div className={styles.profile}>
                    <p>{user?.userName}</p>
                    <AccountCircleIcon />
                </div> */}
            </section>

            <section className={styles.content}>
                <SideBar />
                <ConnectionsSection />
            </section>
        </div>
    )
}
