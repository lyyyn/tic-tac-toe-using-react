// class Header extends React.Component {
//     render() {
//         return (
//             <h1> React Tac Toe </h1>
//         )
//     }
// }

const Header = (prop) => {
    return (
        <h1> {prop.title} </h1>
    )
}

class Player extends React.Component {
    render() {
        return (
            <div className={this.props.whichPlayer}>
                <h2>Player {this.props.whichPlayer} </h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
        return (
            <div>
                <h4>A</h4>
            </div>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className='board'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title='React Tac Toe'/>
                <Player whichPlayer='X' />
                <Player whichPlayer='O' />
                <Board />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)