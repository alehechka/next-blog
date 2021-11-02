import Head from 'next/head';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import Layout, { siteTitle } from '@components/layout';
import Date from '@components/date';
import { HeadingLg, HeadingMd, LightText, List, ListItem } from '@styles/utils';
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
			</HeadingMd>
			<HeadingMd as='section'>
				<HeadingLg>Blog</HeadingLg>
				<List as='ul'>
					{allPostsData.map(({ id, date, title }) => (
						<ListItem as='li' key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<LightText as='small'>
								<Date dateString={date} />
							</LightText>
						</ListItem>
					))}
				</List>
			</HeadingMd>
		</Layout>
	);
};

export default Home;
