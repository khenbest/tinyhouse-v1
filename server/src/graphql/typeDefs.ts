import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    type Listing {
      id: string;
      title:string;
      image: string;
      address: string;
      price:  number;
      numOfGuests: number;
      numOfBeds: number;
      numOfBaths: number;
      rating: number;
    }

    type Query {
        listings: [Listing!]!
    }
    type Mutation {
        deleteListing(id: ID!): Listing!
    }
`;