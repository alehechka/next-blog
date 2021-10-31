import Link from 'next/link';
import Head from 'next/head';
import Layout from '@components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam necessitatibus fugiat tempora autem debitis
				repellat porro, rem ut earum voluptatum odit aliquid natus suscipit quas deserunt cumque delectus libero est?
			</p>
		</Layout>
	);
}
