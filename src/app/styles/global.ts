import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Circe', sans-serif;
        ul {
            list-style-type: none;
        }
    }
    body {
        overflow: hidden;
    }


    @font-face {
        font-family: 'Circe';
        src: url('../../assets/fonts/Circe-Light.eot');
        src: local('Circe Light'), local('Circe-Light'),
        url('../../assets/fonts/Circe-Light.eot?#iefix') format('embedded-opentype'),
        url('../../assets/fonts/Circe-Light.woff2') format('woff2'),
        url('../../assets/fonts/Circe-Light.woff') format('woff'),
        url('../../assets/fonts/Circe-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circe Extra';
        src: url('../../assets/fonts/Circe-ExtraBold.eot');
        src: local('Circe Extra Bold'), local('Circe-ExtraBold'),
        url('../../assets/fonts/Circe-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('../../assets/fonts/Circe-ExtraBold.woff2') format('woff2'),
        url('../../assets/fonts/Circe-ExtraBold.woff') format('woff'),
        url('../../assets/fonts/Circe-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circe';
        src: url('../../assets/fonts/Circe-Thin.eot');
        src: local('Circe Thin'), local('Circe-Thin'),
        url('../../assets/fonts/Circe-Thin.eot?#iefix') format('embedded-opentype'),
        url('../../assets/fonts/Circe-Thin.woff2') format('woff2'),
        url('../../assets/fonts/Circe-Thin.woff') format('woff'),
        url('../../assets/fonts/Circe-Thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circe';
        src: url('../../assets/fonts/Circe-Regular.eot');
        src: local('Circe'), local('Circe-Regular'),
        url('../../assets/fonts/Circe-Regular.eot?#iefix') format('embedded-opentype'),
        url('../../assets/fonts/Circe-Regular.woff2') format('woff2'),
        url('../../assets/fonts/Circe-Regular.woff') format('woff'),
        url('../../assets/fonts/Circe-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circe';
        src: url('../../assets/fonts/Circe-Bold.eot');
        src: local('Circe Bold'), local('Circe-Bold'),
        url('../../assets/fonts/Circe-Bold.eot?#iefix') format('embedded-opentype'),
        url('../../assets/fonts/Circe-Bold.woff2') format('woff2'),
        url('../../assets/fonts/Circe-Bold.woff') format('woff'),
        url('../../assets/fonts/Circe-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

`
