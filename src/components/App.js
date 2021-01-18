import React from 'react';
import languages from "../apis/gAPI";
import LanguageList from './LanguageList';

class App extends React.Component {
    state = {
        languages: []
    }

    onLoad = async () => {
        const responses = await languages.get();
        console.log("responses type", typeof responses.data.Languages)
        console.log("responses", responses.data.Languages)
        const arrayedResponses = Object.values(responses)
        console.log("arrayedResponses", typeof arrayedResponses)
        console.log("arrayedResponses", arrayedResponses[0])
        this.setState({ languages: arrayedResponses })
    }

    componentDidMount() {
        this.onLoad();
    }

    render() {
        return (
            <LanguageList languages={this.state.languages} />
        )
    }
}

export default App