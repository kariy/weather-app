import { FormEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: white;
	height: 50px;

	form {
		overflow: hidden;
		border: var(--border-light);
		box-shadow: var(--shadow-light);
		display: flex;
		height: 100%;
		border-radius: var(--rounded);
	}
`;

const Search = styled.input`
	font-size: 1rem;
	height: 100%;
	width: 100%;
	padding: 0.5rem 1.5rem;
	border: none;
`;

const Button = styled.button`
	/* outline: 1px solid green; */
	width: 50px;
	border: none;
	background-color: unset;
	cursor: pointer;
	transition: transform 100ms ease-in-out;

	&:active {
		transform: scale(0.9);
	}
`;

interface Props {
	onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function SearchBar({ onSubmit }: Props) {
	return (
		<Wrapper>
			<form onSubmit={onSubmit}>
				<Search
					type="search"
					placeholder="Search a location"
					name="query"
					required={true}
					autoComplete="off"
				/>

				<Button>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.5006 13.9999H14.7106L14.4306 13.7299C15.6306 12.3299 16.2506 10.4199 15.9106 8.38989C15.4406 5.60989 13.1206 3.38989 10.3206 3.04989C6.09063 2.52989 2.53063 6.08989 3.05063 10.3199C3.39063 13.1199 5.61063 15.4399 8.39063 15.9099C10.4206 16.2499 12.3306 15.6299 13.7306 14.4299L14.0006 14.7099V15.4999L18.2506 19.7499C18.6606 20.1599 19.3306 20.1599 19.7406 19.7499C20.1506 19.3399 20.1506 18.6699 19.7406 18.2599L15.5006 13.9999ZM9.50063 13.9999C7.01063 13.9999 5.00063 11.9899 5.00063 9.49989C5.00063 7.00989 7.01063 4.99989 9.50063 4.99989C11.9906 4.99989 14.0006 7.00989 14.0006 9.49989C14.0006 11.9899 11.9906 13.9999 9.50063 13.9999Z"
							fill="#323232"
						/>
					</svg>
				</Button>
			</form>
		</Wrapper>
	);
}
