import styles from "../styles/Home.module.css"

export default function StakingData() {
    return (
        <section className={styles.stakingDataContainer}>
            <section className={styles.stakingData}>
                <span>Total Staked Tokens</span>
                <span className={styles.stakingData_value}>$10,000,000</span>
            </section>
            <section className={styles.stakingData}>
                <span>Total Renewal Paid</span>
                <span className={styles.stakingData_value}>$5,000,000</span>
            </section>
            <section className={styles.stakingData}>
                <span>Stakers</span>
                <span className={styles.stakingData_value}>200,000</span>
            </section>
        </section>
    )
}
