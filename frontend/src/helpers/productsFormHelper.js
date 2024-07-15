export const genderOptions = [
  { id: 1, value: "", text: "Select Gender" },
  { id: 2, value: "men", text: "Men" },
  { id: 3, value: "women", text: "Women" },
  { id: 4, value: "kids", text: "Kids" },
];

export const categoryOptions = [
  { id: 1, value: "", text: "Select Category" },
  { id: 2, value: "t-shirt", text: "T-Shirt" },
  { id: 3, value: "shirt", text: "Shirt" },
  { id: 4, value: "jeans", text: "Jeans" },
];

export const sizesOptions = [
  { name: "XS", checked: false },
  { name: "S", checked: false },
  { name: "M", checked: false },
  { name: "L", checked: false },
  { name: "XL", checked: false },
  { name: "XXL", checked: false },
  { name: "XXXL", checked: false },
];

export const colorsOptions = [
  { name: "red", checked: false },
  { name: "yellow", checked: false },
  { name: "blue", checked: false },
  { name: "purple", checked: false },
  { name: "green", checked: false },
  { name: "orange", checked: false },
  { name: "crimson", checked: false },
  { name: "turquoise", checked: false },
  { name: "lavender", checked: false },
  { name: "navy", checked: false },
];

export function getFormattedProductState(product) {
  const formattedState = { ...product };

  formattedState.sizes = sizesOptions.map((item) => {
    if (formattedState.sizes.includes(item.name)) {
      return { ...item, checked: true };
    }
    return item;
  });

  formattedState.colors = colorsOptions.map((item) => {
    if (formattedState.colors.includes(item.name)) {
      return { ...item, checked: true };
    }
    return item;
  });

  return formattedState;
}

export function getNamesArray(field) {
  const namesArray = field
    .filter((item) => {
      return item.checked;
    })
    .map((item) => {
      return item.name;
    });

  return namesArray;
}
