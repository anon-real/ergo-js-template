import React, {Fragment} from 'react';
import {currentHeight, getTokenBox} from "./ergo-related/explorer";
import {decodeNum, decodeString, encodeNum, encodeStr} from "./ergo-related/serializer";


export default class MyErgoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: NaN,
            tokenId: '01004ddddd67da4b34ab2a5a99f2fed6f1f280e3289508ed5b44ae2d948279ee'
        };
        this.decodeToken = this.decodeToken.bind(this)
    }

    componentDidMount() {
        currentHeight().then(res => {
            this.setState({height: res})
        })
        this.decodeToken(this.state.tokenId)
    }

    async decodeToken(tokenId) {
        let box = await getTokenBox(tokenId)
        if (!box) return
        let name = await decodeString(box.additionalRegisters.R4)
        let description = await decodeString(box.additionalRegisters.R5)
        let decimals = await decodeString(box.additionalRegisters.R6)
        this.setState({name: name, description: description, decimals: decimals})
    }

    render() {
        return (
            <Fragment>
                <p>Current Blockchain Height: {this.state.height}</p>
                <p>
                    Encode Number: <input
                    onChange={(e) => encodeNum(e.target.value).then(res => this.setState({encodedNum: res}))}
                    type='number' step="1" placeholder='Enter a number'/> {this.state.encodedNum}
                </p>
                <p>
                    Encode String: <input
                    onChange={(e) => encodeStr(e.target.value).then(res => this.setState({encodedStr: res}))}
                    type='text' step="1" placeholder='Enter text'/> {this.state.encodedStr}
                </p>
                <p>
                    Decode Token Fields: <input
                    defaultValue={this.state.tokenId}
                    style={{width: '100%'}}
                    onChange={(e) => {
                        this.setState({tokenId: e.target.value})
                        this.decodeToken(e.target.value)
                    }}
                    type='text' placeholder='Enter token ID'/>
                    <p>token's name: {this.state.name}</p>
                    <p>token's description: {this.state.description}</p>
                    <p>token's decimals: {this.state.decimals}</p>
                </p>
                <br/>
            </Fragment>
        );
    }
}
