import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('useForm tests', () => {
	const initialForm = {
		name: 'Frank',
		mail: 'example@mail.com'
	};

	const inputForm = {
		target: {
			name: 'name',
			value: 'Lazo',
		},
	};

	test('should return initial form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { values, handleInputChange, reset } = result.current;

		expect(values).toEqual(initialForm);
		expect(typeof handleInputChange).toBe('function');
		expect(typeof reset).toBe('function');
	});

	test('should change a form value', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { handleInputChange } = result.current;

		act(() => {
			handleInputChange(inputForm);
		});

		const { values } = result.current;
		expect(values).toEqual({ ...initialForm, name: 'Lazo' });
	});

	test('should reset the form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { handleInputChange, reset } = result.current;

		act(() => {
			handleInputChange(inputForm);
			reset();
		});

		const { values } = result.current;
		expect(values).toEqual(initialForm);
	});
});
