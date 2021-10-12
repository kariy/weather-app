import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	top: 0;
	bottom: 0;
	width: 70%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const LoaderBar = styled.div`
	width: 100%;
	overflow: hidden;
	border-radius: 100px;
	height: 20px;
	position: relative;

	&:last-child {
		margin-top: 20px;
		width: 50%;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 200%;
		background: linear-gradient(
			90deg,
			rgba(224, 224, 224, 1) 0%,
			rgba(224, 224, 224, 1) 20%,
			rgba(247, 247, 247, 1) 50%,
			rgba(224, 224, 224, 1) 80%,
			rgba(224, 224, 224, 1) 100%
		);
		animation-name: loading;
		animation-duration: 1.5s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes loading {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}
`;

export default function BigLoader() {
	return (
		<Container>
			<LoaderBar />
			<LoaderBar />
		</Container>
	);
}
