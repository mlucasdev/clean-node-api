import { MongoClient, Collection, InsertOneResult } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  async getCollection (name: string): Promise<Collection> {
    return this.client.db().collection(name)
  },

  map (result: InsertOneResult<Document>, data: any): any {
    return {
      id: result.insertedId.toHexString(),
      ...data
    }
  }
}
