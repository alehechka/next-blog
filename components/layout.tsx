import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { BorderCircle, ColorInherit, Heading2Xl, HeadingLg } from '@styles/utils';
import { FC } from 'react';

const name = 'Adam Lehechka';
export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
	home?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, home }) => {
	return (
		<Container>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content='Learn how to build a personal website using Next.js' />
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Header>
				{home ? (
					<>
						<BorderCircle priority src='/images/profile.png' height={144} width={144} alt={name} />
						<Heading2Xl>{name}</Heading2Xl>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<BorderCircle priority src='/images/profile.png' height={108} width={108} alt={name} />
							</a>
						</Link>
						<HeadingLg>
							<Link href='/' passHref>
								<ColorInherit as='a'>{name}</ColorInherit>
							</Link>
						</HeadingLg>
					</>
				)}
			</Header>
			<main>{children}</main>
			{!home && (
				<BackToHome>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</BackToHome>
			)}
		</Container>
	);
};

const Container = styled.div`
	max-width: 36rem;
	padding: 0 1rem;
	margin: 3rem auto 6rem;
`;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BackToHome = styled.div`
	margin: 3rem 0 0;
`;

export default Layout;
