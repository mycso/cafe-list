import { ContentItem } from '@kentico/kontent-delivery';

export class Cafe extends ContentItem {
  constructor() {
    super({
      propertyResolver: fieldName => {
        if (fieldName === 'zip_code') {
          return 'zipCode';
        }
        return fieldName;
      },
      linkResolver: '/cafes'
    });
  }
}
