const designTokensNeutralLight = [
    {
        name: '--color-neutral-light-00',
        token: '#FFF'
    },
    {
        name: '--color-neutral-light-05',
        token: '#F9F9FA'
    },
    {
        name: '--color-neutral-light-10',
        token: '#ECECEE'
    },
    {
        name: '--color-neutral-light-20',
        token: '#D0D0D7'
    },
    {
        name: '--color-neutral-light-30',
        token: '#B4B4C0'
    },
];

const designTokensNeutralMid = [
    {
        name: '--color-neutral-mid-40',
        token: '#9191A1'
    },
    {
        name: '--color-neutral-mid-60',
        token: '#69697C'
    },
];

const designTokensNeutralDark = [
    {
        name: '--color-neutral-dark-70',
        token: '#515162'
    },
    {
        name: '--color-neutral-dark-80',
        token: '#36364A'
    },
    {
        name: '--color-neutral-dark-90',
        token: '#1D1D30'
        
    },
    {
        name: '--color-neutral-dark-95',
        token: '#060613'
    },
];


import React from 'react';

class ColorsComponentNeutralLight extends React.Component {
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
                {designTokensNeutralLight.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

class ColorsComponentNeutralMid extends React.Component {
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
                {designTokensNeutralMid.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

class ColorsComponentNeutralDark extends React.Component {
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
                {designTokensNeutralDark.map(this.renderRow)}
            </tbody>
        </table>
        );
    }
}

export {
    ColorsComponentNeutralLight, ColorsComponentNeutralMid, ColorsComponentNeutralDark
}