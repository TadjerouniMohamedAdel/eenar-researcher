import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import classes from '../../styles/Login.module.css'
export default function LoginLayout(props) {

	return (
		<div className={classes.loginContainer}>
			<MyHead title="تسجيل الدخول"/>
			<div className={classes.arch}></div>
			<div className={classes.loginRow}>
				{props.children}
				<div className={classes.loginPresentation}>
					<img src="/images/colored-logo.png" width={100} />
					<h2>مرحبا بكم في</h2>
					<h1>منتدى كوالالمبور<br/>شبكة الباحثين</h1>
					<p>
						هي مؤسسة عالمية تعمل تحت مظلة منتدى كوالالمبور تعنى ببناء المسارات البحثية  وتنسيق وتثمين ونشر جهود الباحثين في مجال الحضارة والفكر الإسلامي، وتقديمها للمهتمين وصناع القرار، ويمكن أن تأخذ ترخيصا قانونيا خاصا بها.
					</p>
				</div>
			 </div>
		</div>
	)
}