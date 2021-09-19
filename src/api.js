export const getProductList = async (page) => {
  try {
    const res = await fetch(
      `https://acb-api.algoritmika.org/api/goods?page=${page}&limit=2`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
