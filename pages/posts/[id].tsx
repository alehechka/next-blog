import Date from '@components/date';
import Layout from '@components/layout';
import { getAllPostIds, getPostData } from '@lib/posts';
import { HeadingXl, LightText } from '@styles/utils';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

const Post = ({ postData }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<HeadingXl>{postData.title}</HeadingXl>
				<LightText>
					<Date dateString={postData.date} />
				</LightText>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
};

export default Post;
