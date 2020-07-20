import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDg-dcxDuzJDmeuq7RjEPq6ln5xP-oujGM';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('Rico Almoete');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: '20',
                key: KEY
            }
        });
        
        var date = response.data.items[0].snippet.publishedAt;
        var selected = 0;
        for (var x = 1; x < response.data.items.length; x++) {
            if (response.data.items[x].snippet.publishedAt > date) {
                date = response.data.items[x].snippet.publishedAt;
                selected = x;
            }
        }
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[selected] 
        });

    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;