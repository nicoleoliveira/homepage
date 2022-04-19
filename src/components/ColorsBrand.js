const designTokensBrand01 = [
    {
        name: '--color-brand-01-lightest',
        token: '#EBEBF5'
    },
    {
        name: '--color-brand-01-lighter',
        token: '#C2C2E5'
    },
    {
        name: '--color-brand-01-light',
        token: '#9898CD'
    },
    {
        name: '--color-brand-01-base',
        token: '#4545A1'
    },
    {
        name: '--color-brand-01-dark',
        token: '#1F1F7A'
    },
    {
        name: '--color-brand-01-darker',
        token: '#0D0D59'
    },
    {
        name: '--color-brand-01-darkest',
        token: '#030330'
    },
];

const designTokensAction = [
    {
        name: '--color-action-default',
        token: '#4545A1',
        value: 'color-brand-01-base'
    },
    {
        name: '--color-action-hover',
        token: '#1F1F7A',
        value: 'color-brand-01-dark'
    },
    {
        name: '--color-action-pressed',
        token: '#0D0D59',
        value: 'color-brand-01-darker'
    },
    {
        name: '--color-action-disabled',
        token: '#B4B4C0',
        value: 'color-neutral-light-30'
    },
    {
        name: '--color-action-focus',
        token: '#030330',
        value: 'color-brand-01-darkest'
    },
];

import React from 'react';

class ColorsComponentBrand01 extends React.Component {
    renderRow(row){
        const style = {
            backgroundColor: row.token
        };
        return (
 
            <tr>
                <td>{row.name}</td>
                <td style={style}></td> 
                <td>{row.token}</td>
            </tr>
        )
      }
    render() {
        return (
        <table>
            <thead>
                <th>Token</th>
                <th>Amostra</th>
                <th>HEX</th>
            </thead>
            <tbody>
                {designTokensBrand01.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

class ColorsComponentAction extends React.Component {
    renderRow(row){
        const style = {
            backgroundColor: row.token
        };
        return (
 
            <tr>
                <td>{row.name}</td>
                <td style={style}></td> 
                <td>{row.value}</td>
            </tr>
        )
      }
    render() {
        return (
        <table>
            <thead>
                <th>Token</th>
                <th>Amostra</th>
                <th>Valor padrão</th>
            </thead>
            <tbody>
                {designTokensAction.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

export {
    ColorsComponentBrand01, ColorsComponentAction
}