const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) => {
    const countriesDetails = countries.map(country => getCountryElements(country));
    console.log(countries[0])
    const countriesSection = document.getElementById('all-countries');
    countriesSection.innerHTML = countriesDetails.join(' ');
}
const getCountryElements = c => {
    const {name, flags} = c;
    return `
        <div>
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
}











loadCountries()