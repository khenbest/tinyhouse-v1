import { IResolvers } from 'apollo-server-express';
import { ObjectId } from 'mongodb';
import { Database, Listing } from '../../../lib/types';

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root,
      _args,
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deletedRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deletedRes.value) {
        throw new Error('failed to delete listing');
      }
      return deletedRes.value;
    },
  },

  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
};
