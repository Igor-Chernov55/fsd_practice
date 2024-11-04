import {screen} from "@testing-library/dom";
import AboutPage from "./AboutPage";
import {renderWithTranslations} from "../../../shared/lib/renderWithTranslations/renderWithTranslations";

describe('AboutPage', () => {
    it('should render AboutPage', () => {
        renderWithTranslations(<AboutPage/>)

        expect(screen.getByText('some')).toBeInTheDocument();

    })

})