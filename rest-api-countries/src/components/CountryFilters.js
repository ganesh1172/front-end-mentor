const CountryFilters = () => {
  return (
    <div>
      <input type="text" name="text" placeholder="text" />
      <select>
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
};

export default CountryFilters;
