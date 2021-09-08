import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests on useFetchGifs', () => {
	test('should return the initial state', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Megadeth'));
		const { data, loading } = result.current;

		// Para evitar errores con el siguiente test
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('should return an array of images and loading set on false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Megadeth'));
		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});
