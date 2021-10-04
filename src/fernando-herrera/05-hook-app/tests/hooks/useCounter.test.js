import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('useCounter tests', () => {
	const value = 50;

	test('should return default values', () => {
		const { result } = renderHook(() => useCounter());
		const { state, increment, decrement, reset } = result.current;

		expect(state).toBe(10);
		expect(typeof increment).toBe('function');
		expect(typeof decrement).toBe('function');
		expect(typeof reset).toBe('function');
	});

	test('should return inserted value', () => {
		const { result } = renderHook(() => useCounter(value));
		const { state } = result.current;

		expect(state).toBe(value);
	});

	test('should increment counter by 1', () => {
		const { result } = renderHook(() => useCounter(value));
		const { increment } = result.current;

		act(() => {
			increment();
		});

		const { state } = result.current;

		expect(state).toBe(value + 1);
	});

	test('should decrement counter by 1', () => {
		const { result } = renderHook(() => useCounter(value));
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		const { state } = result.current;

		expect(state).toBe(value - 1);
	});

	test('should reset to inserted value', () => {
		const { result } = renderHook(() => useCounter(value));
		const { decrement, reset } = result.current;

		act(() => {
			decrement();
			reset();
		});

		const { state } = result.current;

		expect(state).toBe(value);
	});
});
