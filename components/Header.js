import { useEffect, useState } from "react"
import { EthColored } from "@web3uikit/icons"
import styles from "../styles/Home.module.css"
import { useAccount, useConnect, useDisconnect } from "wagmi"

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { isConnected } = useAccount()
    const { connect, connectors } = useConnect()
    const { disconnect, reset } = useDisconnect()

    useEffect(() => {
        if (isConnected) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [isConnected])

    const handleDisconnect = async () => {
        await disconnect()
        reset()
    }

    return (
        <section className={styles.header}>
            <section className={styles.header_logoSection}>
                <h1 className={styles.title}>Ether Staking</h1>
                <EthColored fontSize="30px" className={styles.eth} />
            </section>
            <section className={styles.header_btn}>
                {isLoggedIn ? (
                    <button onClick={handleDisconnect} className={styles.header_btn}>
                        DISCONNECT WALLET
                    </button>
                ) : (
                    <>
                        {/* for multiple wallets */}
                        {connectors.map((connector) => (
                            <button
                                key={connector.id}
                                onClick={() => connect({ connector })}
                                className={styles.connectBtn}
                                // disabled={!connector.ready}
                            >
                                CONNECT WALLET
                            </button>
                        ))}
                    </>
                )}
            </section>
        </section>
    )
}
