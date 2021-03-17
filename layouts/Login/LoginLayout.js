import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import classes from '../../styles/Login.module.css'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function LoginLayout(props) {
	const { t } = useTranslation('login')
	const router = useRouter()
	return (
		<div className={classes.loginContainer}>
			<MyHead title={t("title")} />
			<div className={`${classes.arch} ${router.locale!=="ar" && classes.archLeft}`}></div>
			<div className={classes.loginRow}>
				{props.children}
				<div className={classes.loginPresentation}>
					<img src="/images/logoAdminWhite.png"  />
					<h2>{t("welcome")}</h2>
					<h1>{t("company-name")}<br/>{t("company-job")}</h1>
					<p>
						{t("description")}
					</p>
				</div>
			 </div>
		</div>
	)
}