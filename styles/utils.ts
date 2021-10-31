import styled from 'styled-components';
import Image from 'next/image';

export const Heading2Xl = styled.h1`
	font-size: 2.5rem;
	line-height: 1.2;
	font-weight: 800;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`;

export const HeadingXl = styled.h1`
	font-size: 2rem;
	line-height: 1.3;
	font-weight: 800;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`;

export const HeadingLg = styled.h2`
	font-size: 1.5rem;
	line-height: 1.4;
	margin: 1rem 0;
`;

export const HeadingMd = styled.h3`
	font-size: 1.2rem;
	line-height: 1.5;
`;

export const BorderCircle = styled(Image)`
	border-radius: 9999px;
`;

export const ColorInherit = styled.span`
	color: inherit;
`;

export const Padding1Px = styled.div`
	padding-top: 1px;
`;

export const List = styled.div`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const ListItem = styled.div`
	margin: 0 0 1.25rem;
`;

export const LightText = styled.div`
	color: #666;
`;
