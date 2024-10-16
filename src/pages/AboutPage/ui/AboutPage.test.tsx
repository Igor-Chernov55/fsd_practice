import renderer from 'react-test-renderer';

import {AboutPage} from "../index.ts";

describe('AboutPage', () => {
    it('test render', () => {
        renderer(<AboutPage />);

    })

})