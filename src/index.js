import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBwEUe-tmjPwLu89FNMG2qQWAl7BCV4lXs';

// Create a new component. This component should procude some html 
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // When ever the key and value are same name, then the line below
            // is same as this.setState({ videos: videos })
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        }) ;
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos}/>
        </div>  
        );
    }
}

// Take this component, generate html and put it on the page (in the dom)
ReactDom.render(<App />, document.querySelector('.container'));