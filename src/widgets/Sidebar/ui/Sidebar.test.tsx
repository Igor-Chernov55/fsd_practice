import {screen, render, fireEvent} from "@testing-library/react";
import {Sidebar} from "./Sidebar";

describe("Sidebar", () => {
    it(('render Sidebar'), () => {
        render(<Sidebar />)

       expect(screen.getByRole('button')).toBeInTheDocument();
    })

    it('click button theme ', () => {
        render(<Sidebar />);

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByTestId('sidebar-toggle')).toHaveStyle('width: 160px');

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByTestId('sidebar-toggle')).toHaveStyle('width: 40px');
    });

})