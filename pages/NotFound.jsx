import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "../src/hooks/useTranslation"
import styles from "./NotFound.module.css"

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <div className={styles.notFoundPage}>
            <div className={styles.content}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>{t("notFound.title")}</h1>
                <p className={styles.message}>
                    {t("notFound.message")}
                </p>
                <Link to="/" className={styles.homeButton}>
                    {t("notFound.cta")}
                </Link>
            </div>
        </div>
    )
}
