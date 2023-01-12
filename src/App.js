import React from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Movies } from "./Components/Movies";



class App extends React.Component {

  state = {
    movie: [],
    isLoaded: false
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=f426164a&s=marvel')
      .then(res => res.json())
      .then(result => {
        this.setState({
          movie: result.Search
        });
      })
  }

  render() {
    const {movie} = this.state

    return (
      <>
        <Header />
        {movie.length ? <Movies films={movie} /> : <h5>...Loading</h5>}
        <Footer />
      </>
    )
  }
}

export default App;
