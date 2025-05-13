import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CountryList({cities, isLoading}) {
        if(isLoading) return <Spinner />;

        if(!cities.length) return <Message message={"Add your first city by clicking a city on the map"} />

        const countries = cities.reduce((arr, city) => {
            if(!arr.map((el) => el.country).includes(city.country))
                return [...arr, { country: city.country, emoji: city.emoji}];
            else return arr;
        },[]);

        return(
            <ul className={styles.countryList}>
                {
                    countries.map((country) => ( <CountryItem country={country} key={country}/> ))
                }
            </ul>
        )
}

export default CountryList
 
/* 
    {
      "cityName": "Lisbon",
      "country": "Portugal",
      "emoji": "🇵🇹",
      "date": "2027-10-31T15:59:59.138Z",
      "notes": "My favorite city so far!",
      "position": {
        "lat": 38.727881642324164,
        "lng": -9.140900099907554
      },
      "id": 73930385
    }
*/