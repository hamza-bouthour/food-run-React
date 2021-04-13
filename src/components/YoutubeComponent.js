import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Loading  from './LoadingComponent';


class YoutubeRow extends Component {
    constructor(props) {
        super(props)
        this.state = {     
                part: 'snippet',
                q: null,
                maxResults: 12,
                key: 'AIzaSyCZqOzQqm-MUpftbQEjRR9kqlzF3jTtwKs',
                videoId:   'tAGnKpE4NCI'
        }
    }
    getQuery(queries) {
        const queryKey = Object.keys(queries).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`)
        return queryKey.join('&');
    }
    componentDidMount() {
         this.setState({q: this.props.query},
            () => {this.fetchUrl(this.state.q)}
            )
    }
   
    async fetchUrl(keyword) {
        if (keyword) {
            const uri = this.getQuery(this.state)
            console.log(uri)
            const url = 'https://www.googleapis.com/youtube/v3/search?' + uri;
            console.log(url)
            await fetch(url)
                .then(response => response.json())
                .then(response => console.log(response))
                .then(response => this.setState({videoId: response.items[1].id.videoId}))  
                .then(response => console.log(response.items[1].id.videoId))      
                .catch(error => {
                console.log(error);    
                });      
        }     
    }
   render() {
    const videoUriX = 'https://www.youtube.com/embed/';
    if (this.props.isLoading) {
        return <Loading />
    }
    return (
            <div className="row  mx-auto mb-3">
                <div className="col-12 m-0 p-0">
                <ReactPlayer className="mw-100" url={this.props.video} />
                    {/* <Media><iframe src={videoUriX + this.state.videoId}/></Media> */}
                    {/* <Media><iframe src='https://www.youtube.com/embed/tAGnKpE4NCI'/></Media> */}
                </div>
            </div> 
        )     
    }       
}             
export default YoutubeRow;

