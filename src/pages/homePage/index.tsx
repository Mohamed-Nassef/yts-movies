import TopSection from "./components/topSection"
import PopularDownloads from "./components/popularDownloads/PopularDownloads"
import LatestMovies from "./components/latestMovies/LatestMovies"
import UpComingMovies from "./components/upcomingMovies/UpComingMovies"

function Home() {
    //const { data: popularMovies, } = usePopularMovies();
    //console.log(popularMovies);

    return (
        <>
            <TopSection />
            <PopularDownloads />
            <LatestMovies />
            <UpComingMovies />
        </>
    )
}

export default Home
