const designTokens = [
    {
        name: 'color-feedback-positive-lightest',
        token: '#DEF7ED'
    },
    {
        name: 'color-feedback-positive-lighter',
        token: '#7ECEAD'
    },
    {
        name: 'color-feedback-positive-light',
        token: '#41B483'
    },
    {
        name: 'color-feedback-positive-base',
        token: '#107048'
    },
    {
        name: 'color-feedback-positive-base',
        token: '#107048'
    },
    {
        name: 'color-feedback-positive-dark',
        token: '#0F5236'
    },
    {
        name: 'color-feedback-positive-darker',
        token: '#083A25'
    },
    {
        name: 'color-feedback-positive-darkest',
        token: '#002415'
    },
];

import React from 'react';

export default class ColorsComponent extends React.Component {
    renderRow(row){
        const style = {
            backgroundColor: row.token
        };
        return (
 
            <tr>
                <td>{row.name}</td> 
                <td style={style}>{row.token}</td>
            </tr>
        )
      }
    render() {
        // return <div>Olá <ani-button>button</ani-button>!</div>;
        return (
        <table>
            <thead>
                <th>Nome</th>
                <th>Token</th>
            </thead>
            <tbody>
                {designTokens.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}