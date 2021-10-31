import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@components/layout';
import { HeadingMd } from '@styles/utils';

const Home = () => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<HeadingMd as='section'>
				<p>
					Hello, I'm <b>Adam</b>. I'm a software engineer and recent graduate at UNO.
				</p>
				<p>
					(Check out the first post here:{' '}
					<Link href='/posts/first-post'>
						<a>First Post</a>
					</Link>
					)
				</p>
			</HeadingMd>
		</Layout>
	);
};

export default Home;
