/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../../contexts/CityContext";
// eslint-disable-next-line react/prop-types
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map"></Message>
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}></CountryItem>
      ))}
    </ul>
  );
}

export default CountryList;
