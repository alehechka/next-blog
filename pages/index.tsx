import Head from 'next/head';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import Layout, { siteTitle } from '@components/layout';
import { HeadingLg, HeadingMd, List, ListItem } from '@styles/utils';
import { getSortedPostsData } from '@lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

const Home = ({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
			<HeadingMd as='section'>
				<HeadingLg>Blog</HeadingLg>
				<List as='ul'>
					{allPostsData.map(({ id, date, title }) => (
						<ListItem as='li' key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</ListItem>
					))}
				</List>
			</HeadingMd>
		</Layout>
	);
};

export default Home;
