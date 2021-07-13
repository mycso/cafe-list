// kentico kontent
import { DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';

// models
import { Cafe } from './Models/cafe';

// environment variables
const projectId = process.env.REACT_APP_PROJECT_ID || '';

// configure type resolvers
let typeResolvers = [
  new TypeResolver('cafe', () => new Cafe()),
];

let Client = new DeliveryClient({
  projectId: projectId,
  typeResolvers: typeResolvers,
  previewApiKey: undefined,
  enablePreviewMode: false,
});

const resetClient = newProjectId => {
  Client = new DeliveryClient({
    projectId: newProjectId,
    typeResolvers: typeResolvers,
    previewApiKey: undefined,
    enablePreviewMode: false,
  });
};

export { Client, resetClient };
