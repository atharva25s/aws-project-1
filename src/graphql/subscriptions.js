/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookOrder = /* GraphQL */ `
  subscription OnCreateBookOrder(
    $filter: ModelSubscriptionBookOrderFilterInput
  ) {
    onCreateBookOrder(filter: $filter) {
      id
      book_id
      order_id
      book {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        date
        total
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      bookOrdersId
      bookOrdersTitle
      orderBooksId
      customer
      __typename
    }
  }
`;
export const onUpdateBookOrder = /* GraphQL */ `
  subscription OnUpdateBookOrder(
    $filter: ModelSubscriptionBookOrderFilterInput
  ) {
    onUpdateBookOrder(filter: $filter) {
      id
      book_id
      order_id
      book {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        date
        total
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      bookOrdersId
      bookOrdersTitle
      orderBooksId
      customer
      __typename
    }
  }
`;
export const onDeleteBookOrder = /* GraphQL */ `
  subscription OnDeleteBookOrder(
    $filter: ModelSubscriptionBookOrderFilterInput
  ) {
    onDeleteBookOrder(filter: $filter) {
      id
      book_id
      order_id
      book {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        date
        total
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      bookOrdersId
      bookOrdersTitle
      orderBooksId
      customer
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $customer: String
  ) {
    onCreateOrder(filter: $filter, customer: $customer) {
      id
      user
      date
      total
      books {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $customer: String
  ) {
    onUpdateOrder(filter: $filter, customer: $customer) {
      id
      user
      date
      total
      books {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $customer: String
  ) {
    onDeleteOrder(filter: $filter, customer: $customer) {
      id
      user
      date
      total
      books {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
