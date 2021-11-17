import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Welcome from './Welcome';

describe('Welcome component', () => {

    test('renders Hello World as a text', () => {
        render(<Welcome />);
        const HelloWorldElement = screen.getByText('Hello World');
        expect(HelloWorldElement).toBeInTheDocument();
    })

    test('not renders "good to see you" if button is not clicked', () => {
        render(<Welcome />);
        const outputElement = screen.getByText('good to see you')
        expect(outputElement).toBeInTheDocument();
    })

    test(' renders "welcome shabnam" if button is clicked', () => {
        //arrange
        render(<Welcome />);
        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        //assert
        const outputElement = screen.getByText('welcome shabnam')
        expect(outputElement).toBeInTheDocument();
    })
});