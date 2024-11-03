import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();

    

    return (
        <div>
            <Header></Header>
           <h2>Home Page</h2>
           {
            navigation.state === "loading" ? <h2>Loading data</h2> : <Outlet></Outlet>
           } 
           
        </div>
    );
};

export default Home;