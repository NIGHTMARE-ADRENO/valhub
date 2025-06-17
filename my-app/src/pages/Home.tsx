import '../App.css'
import Header from '../components/header'
import Body from '../components/body'
import Footer from '../components/footer'


const Home = () => {
    
    return (
        <div className="w-dvw h-dvh bg-black flex flex-col ">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

export default Home;
