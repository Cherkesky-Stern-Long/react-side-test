import React from 'react';
import languages from "../apis/gAPI";

class App extends React.Component {
    state = {
        languages: []
    }

    onLoad = async () => {
        const response = await languages.get();
        console.log("response", response.data)
        this.setState({ languages: response.data})
    }

    componentDidMount() {
        this.onLoad();
    }

    render() {
        return (
            <div>it works</div>
        )
    }
}
// fix gitignore

export default App