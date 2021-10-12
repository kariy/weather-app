import { FormEventHandler } from 'react';
import { useLocationDispatch } from '../../contexts/LocationContext';
import SearchBar from './SearchBar';

export default function SearchBarContainer() {
	const dispatch = useLocationDispatch();

	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		const { query } = event.currentTarget;

		if (query && dispatch) dispatch(query.value);
	};

	return <SearchBar onSubmit={handleSubmit} />;
}
