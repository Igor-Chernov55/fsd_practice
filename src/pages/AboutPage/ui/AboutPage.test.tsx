import {render, screen} from "@testing-library/react";
import {AboutPage} from "../index";

describe('AboutPage', () => {
    it('should render AboutPage', () => {
      const {getByText} = render(<AboutPage />);

      expect(screen.getByText('df'))
    })

})