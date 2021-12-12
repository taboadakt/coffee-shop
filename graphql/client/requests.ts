import { gql } from "@apollo/client";

export const GET_INVENTORY = gql`
  query Inventory {
    inventory {
      id
      name
      stockFlOz
    }
  }
`;

export const GET_MENU = gql`
  query Menu {
    menu {
      drinks {
        id
        name
        price
        measurements {
          ingredientId
          measureFlOz
          variant {
            id
            name
          }
        }
      }
    }
  }
`;

export const ORDER_DRINK = gql`
  mutation orderDrink($input: OrderDrinkInput) {
    orderDrink(input: $input) {
      id
      name
      stockFlOz
    }
  }
`;
