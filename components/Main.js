import styles from "../styles/Home.module.css"

import Staking from "./Staking.js"
import StakingData from "./StakingData.js"

export default function Main() {
    return (
        <section className={styles.container}>
            <Staking />
            <StakingData />
        </section>
    )
}
