// import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import App from "../App";

describe('App', () => {
    // test('should be Hello World!', () => {
    //     const welcome = 'Hello World!';
    //     const { getByText } = render(<App welcome={ welcome } />);

    //     expect(getByText(welcome)).toBeInTheDocument();
    // });

	// Enzyme

    test('should be <App />', () => {
        const welcome = 'Hello World!';
		const wrapper = shallow(<App welcome={ welcome } />);
		expect(wrapper).toMatchSnapshot();
    });

	test('should show description by props', () => {
		const welcome = 'Hello World!';
		const description = 'My description';

		const wrapper = shallow(
			<App welcome={ welcome } description={ description } />
		);

		const paragraphText = wrapper.find('p').text();
		expect(paragraphText).toBe(description);
	});
});
