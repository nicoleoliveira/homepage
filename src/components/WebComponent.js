
import BrowserOnly from '@docusaurus/BrowserOnly';

import React from 'react';

export default class WebComponentReact extends React.Component {
    render() {
        return (
            <BrowserOnly
                fallback={<div>The fallback content to display on prerendering</div>}>
                {() => {
                    require('@webcomponents/custom-elements');
                    require('@animaliads/ani-button');
                    return <div>Olá <ani-button>button</ani-button>!</div>;
                }}
            </BrowserOnly>
        );
    }
}
