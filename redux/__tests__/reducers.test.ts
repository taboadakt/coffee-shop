import reducer, { HYDRATE, setInventory, setMenu } from "../reducers";

const drinks = [
  {
    id: "latte",
    name: "Latte",
    price: 8.99,
    measurements: [
      {
        ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
        measureFlOz: 0.7,
        variant: {
          id: "milkFoam",
          name: "Milk foam",
        },
      },
      {
        ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
        measureFlOz: 10,
        variant: {
          id: "steamedMilk",
          name: "Steamed milk",
        },
      },
      {
        ingredientId: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
        measureFlOz: 2,
      },
    ],
  },
];

const inventory = [
  {
    id: "31096b88-2113-4861-ab8b-18c786568f87",
    name: "milk",
    stockFlOz: 100,
  },
  {
    id: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
    name: "espresso",
    stockFlOz: 100,
  },
];

test("should return the initial state", () => {
  expect(reducer(undefined, HYDRATE({}))).toEqual({
    inventory: undefined,
    menu: undefined,
  });
});

test("should update the inventory", () => {
  const previousState = {
    inventory,
    menu: {
      drinks,
    },
  };
  const newInventory = [
    {
      id: "31096b88-2113-4861-ab8b-18c786568f87",
      name: "milk",
      stockFlOz: 20,
    },
    {
      id: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
      name: "espresso",
      stockFlOz: 80,
    },
  ];
  expect(reducer(previousState, setInventory(newInventory))).toEqual({
    inventory: newInventory,
    menu: {
      drinks,
    },
  });
});

test("should update the menu", () => {
  const previousState = {
    inventory,
    menu: {
      drinks,
    },
  };
  const newMenu = {
    drinks: [
      {
        id: "test",
        name: "test",
        price: 10.99,
        measurements: [
          {
            ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
            measureFlOz: 2.88,
            variant: {
              id: "milkFoam",
              name: "Milk foam",
            },
          },
          {
            ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
            measureFlOz: 5,
            variant: {
              id: "steamedMilk",
              name: "Steamed milk",
            },
          },
          {
            ingredientId: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
            measureFlOz: 10,
          },
        ],
      },
    ],
  };
  expect(reducer(previousState, setMenu(newMenu))).toEqual({
    inventory,
    menu: newMenu,
  });
});
