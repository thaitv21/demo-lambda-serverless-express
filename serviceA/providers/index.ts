import MongoDatabaseProvider from "./MongoDatabaseProvider";

interface Providers {
  mongodbProvider: MongoDatabaseProvider
}

const providers : Providers = {
  mongodbProvider: new MongoDatabaseProvider()
}

export const {
  mongodbProvider,
} = providers;