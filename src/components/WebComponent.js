// import '@webcomponents/custom-elements';
// import '@webcomponents/webcomponentsjs';

// import '@animaliads/ani-button';

import React from 'react';

export default class WebComponentReact extends React.Component {
    render() {
        return <div>Olá !</div>;
        // return <div>Olá <ani-button>button</ani-button>!</div>;
    }
}

// export const MyComponent = () => {
//     return (
//       <BrowserOnly
//         fallback={<div>The fallback content to display on prerendering</div>}>
//         {() => {
//         require('@animaliads/ani-button');
//         <ani-button>button</ani-button>
//         }}
//       </BrowserOnly>
//     );
//   };
