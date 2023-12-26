import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<a href='https://isree.dev' target='_'>
					<p> Sree </p>
				</a>
			</div>

			<div className={styles.center}>
				<div className={styles.hey_there_div}>
					<h2 className={styles.hey_there_title}>
						Hey there! I'm Sree
					</h2>
					<p>
						A developer armed with a diverse skill set, I thrive in
						the dynamic and ever-evolving landscape of software
						development.
					</p>
					{/* <button>
						<a href='https://twitter.com/isree1998' target='_'>
							Contact me
						</a>
					</button> */}
				</div>
			</div>

			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>🚀 Background</h2>
					<p>
						I made the leap from the world of aerospace to the realm
						of development, where I found my true passion for
						crafting digital solutions.
					</p>
				</div>
				<div className={styles.card}>
					<h2>💡 Philosophy</h2>
					<p>
						I believe in solving problems efficiently, always
						keeping a keen eye on the delicate balance of cost and
						time. Let's build something amazing together!
					</p>
				</div>
				<div className={styles.card}>
					<h2>🌐 Let's Talk Projects</h2>
					<p>
						Got a project in mind? Excited about the potential of
						collaboration? Feel free to reach out through the form
						below. Let's turn your ideas into reality!
					</p>
				</div>
				<div className={styles.card}>
					<h2>💻 Tech Stack</h2>
					<p>
						I'm fluent in TypeScript, JavaScript, React, and
						MongoDB. My playground includes server-side REST APIs,
						Kafka, Kubernetes, and GraphQL
					</p>
				</div>
			</div>
		</main>
	);
}
