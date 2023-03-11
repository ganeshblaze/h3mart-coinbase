export const fetchData = async () => {
    try {
      const response = await fetch("https://api.coincap.io/v2/assets");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };