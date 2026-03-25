
import PageCategory from '../components/comman/PageCategory'
import Poster from '../components/comman/Poster'
import Posters from '../components/comman/Posters'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'

const Home = () => {
    return (
        <div>
            <Hero />
            <PageCategory/>
            <ProductSection/>
            <ProductSection/>
            <Poster/>
        </div>
    )
}

export default Home
