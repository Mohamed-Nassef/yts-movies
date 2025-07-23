import TopSection from "./components/topSection"
import PopularDownloads from "./components/popularDownloads/PopularDownloads"
import LatestMovies from "./components/latestMovies/LatestMovies"
import UpComingMovies from "./components/upcomingMovies/UpComingMovies"

function Home() {
    // test
    return (
        <>
            <TopSection />
            <h1>Home</h1>
            <PopularDownloads />
            <LatestMovies />
            <UpComingMovies />
        </>
    )
}

export default Home
