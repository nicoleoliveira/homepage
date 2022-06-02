const designTokensPositive = [
    {
        name: '--color-feedback-positive-lightest',
        token: '#DEF7ED'
    },
    {
        name: '--color-feedback-positive-lighter',
        token: '#7ECEAD'
    },
    {
        name: '--color-feedback-positive-light',
        token: '#41B483'
    },
    {
        name: '--color-feedback-positive-base',
        token: '#107048'
    },
    {
        name: '--color-feedback-positive-dark',
        token: '#0F5236'
    },
    {
        name: '--color-feedback-positive-darker',
        token: '#083A25'
    },
    {
        name: '--color-feedback-positive-darkest',
        token: '#002415'
    },
];

const designTokensNegative = [
    {
        name: '--color-feedback-negative-lightest',
        token: '#F6E6E5'
    },
    {
        name: '--color-feedback-negative-lighter',
        token: '#E3AEAB'
    },
    {
        name: '--color-feedback-negative-light',
        token: '#D58581'
    },
    {
        name: '--color-feedback-negative-base',
        token: '#BE3E37'
    },
    {
        name: '--color-feedback-negative-dark',
        token: '#9B2D27'
    },
    {
        name: '--color-feedback-negative-darker',
        token: '#72211D'
    },
    {
        name: '--color-feedback-negative-darkest',
        token: '#4A1512'
    },
];

const designTokensWarning = [
    {
        name: '--color-feedback-warning-lightest',
        token: '#FCF6E3'
    },
    {
        name: '--color-feedback-warning-lighter',
        token: '#F7DD97'
    },
    {
        name: '--color-feedback-warning-light',
        token: '#F1CD6A'
    },
    {
        name: '--color-feedback-warning-base',
        token: '#EFBA2A'
    },
    {
        name: '--color-feedback-warning-dark',
        token: '#D8A20E'
    },
    {
        name: '--color-feedback-warning-darker',
        token: '#705200'
    },
    {
        name: '--color-feedback-warning-darkest',
        token: '#473400'
    },
];

const designTokensInfo = [
    {
        name: '--color-feedback-info-lightest',
        token: '#E3E9F7'
    },
    {
        name: '--color-feedback-info-lighter',
        token: '#B0C1E8'
    },
    {
        name: '--color-feedback-info-light',
        token: '#7996D7'
    },
    {
        name: '--color-feedback-info-base',
        token: '#23489F'
    },
    {
        name: '--color-feedback-info-dark',
        token: '#173782'
    },
    {
        name: '--color-feedback-info-darker',
        token: '#0F2557'
    },
    {
        name: '--color-feedback-info-darkest',
        token: '#081536'
    },
];

import React from 'react';

class ColorsComponentPositive extends React.Component {
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
                {designTokensPositive.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

class ColorsComponentNegative extends React.Component {
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
                {designTokensNegative.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

class ColorsComponentWarning extends React.Component {
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
                {designTokensWarning.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}
class ColorsComponentInfo extends React.Component {
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
                {designTokensInfo.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

export {
    ColorsComponentPositive, ColorsComponentNegative, ColorsComponentWarning, ColorsComponentInfo
}