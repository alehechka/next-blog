import Date from '@components/date';
import Layout from '@components/layout';
import { getAllPostIds, getPostData } from '@lib/posts';
import { HeadingXl, LightText } from '@styles/utils';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string);
	return {
		props: {
			postData,
		},
	};
};

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
