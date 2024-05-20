export const getproducts = (): string => {
  return `{
  products(limit:50, offset: 0)
  {
    offset
    count
    total
    exists
    results {
      id
      key
      version
      productType {
        key
        name
        description
        id
        version
        createdAt
        lastModifiedAt
        attributeDefinitions {
          limit
          offset
          total
          results {
            name
            label
            isRequired
            inputTip
            inputHint
            isSearchable
            type {
              name
            }
           
          }
        }
      }
      masterData {
        current {
          name
          description
          
          
         
          categoryOrderHints {
            categoryId
            orderHint
          }
          categoriesRef {
            typeId
            id
          }
          categories {
            id
            key
            version
            name
            nameAllLocales {
              locale
              value
            }
            description
           
            slug
           
            lastModifiedBy {
              isPlatformClient
              externalUserId
              anonymousId
              attributedTo {
                clientId
                source
                userRef {
                  typeId
                  id
                }
              }
              clientId
              
             
            }
            createdBy {
              isPlatformClient
              externalUserId
              anonymousId
              attributedTo {
                clientId
                source
                userRef {
                  typeId
                  id
                }
              }
              clientId
             
             
             
            }
            custom {
              typeRef {
                typeId
                id
              }
              type {
                key
                name
                description
               
                
                resourceTypeIds
                fieldDefinitions {
                  name
                  required
                  inputHint
                  label
                 
                  type {
                    name
                  }
                }
                id
                version
                createdAt
                lastModifiedAt

              }
              customFieldsRaw {
                name
                value
                referencedResource {
                  id
                }
                referencedResourceSet {
                  id
                }
              }
            }
            assets {
              id
              key
              sources {
                uri
                key
                dimensions {
                  width
                  height
                }
                contentType
              }
              name
             
              description
              
              tags
              custom {
                typeRef {
                  typeId
                  id
                }
                type {
                  key
                  name
                  description
                  
                  resourceTypeIds
                  fieldDefinitions {
                    name
                    required
                    inputHint
                    label
                    labelAllLocales {
                      locale
                      value
                    }
                    type {
                      name
                    }
                  }
                  id
                  version
                  createdAt
                  lastModifiedAt
                  lastModifiedAt


                }
                customFieldsRaw {
                  name
                  value
                  referencedResource {
                    id
                  }
                  referencedResourceSet {
                    id
                  }
                }
              }
            }
            lastModifiedAt
            orderHint
            externalId
            metaTitle
            
            metaKeywords
          
            metaDescription
            
            stagedProductCount
            createdAt
          }
          searchKeywords {
            locale
            searchKeywords {
              text
              suggestTokenizer {
                type
              }
            }
          }
          metaTitle
        
          metaKeywords
         
          metaDescription
         
          masterVariant {
            id
            key
            sku
            prices {
              id
              value {
                type
                currencyCode
                centAmount
                fractionDigits
              }
              key
              country
              customerGroup {
                id
                version
                name
                key
                createdAt

                lastModifiedAt
                custom {
                  typeRef {
                    typeId
                    id
                  }
                  type {
                    key
                    name
                    description
                  }
                  customFieldsRaw {
                    name
                    value
                    referencedResource {
                      id
                    }
                    referencedResourceSet {
                      id
                    }
                  }
                }
                createdBy {
                  isPlatformClient
                  externalUserId
                  anonymousId
                  attributedTo {
                    clientId
                    source
                    userRef {
                      typeId
                      id
                    }
                  }
                }
                lastModifiedBy {
                  isPlatformClient
                  externalUserId
                  anonymousId
                  attributedTo {
                    clientId
                    source
                    userRef {
                      typeId
                      id
                    }
                  }
                }
              }
              customerGroupRef {
                typeId
                id
              }
              channel {
                id
                version
                key
                roles
                name
                
  geoLocation {
                  type
                }
                reviewRatingStatistics {
                  averageRating
                  highestRating
                  lowestRating
                  count
                  ratingsDistribution
                }
              }
              channelRef {
                typeId
                id
              }
              validFrom
              validUntil
              discounted {
                value {
                  type
                  currencyCode
                  centAmount
                  fractionDigits
                }
                discountRef {
                  typeId
                  id
                }
                discount {
                  predicate
                  validFrom
                  validUntil
                  isActive
                  sortOrder
                  isValid
                  key
                  name
                  description
                }
              }
              tiers {
                minimumQuantity
              }
              custom {
                typeRef {
                  typeId
                  id
                }
                type {
                  key
                  name
                  description
                }
                customFieldsRaw {
                  name
                  value
                }
              }
            }
            images {
              url
              label
            }
            assets {
              id
            }
            availability {
              noChannel {
                isOnStock
                restockableInDays
                availableQuantity
                version
                id
              }
              channels {
                limit
                offset
                total
                results {
                  channelRef {
                    typeId
                    id
                  }
                  channel {
                    id
                    version
                  }
                  availability {
                    isOnStock
                    restockableInDays
                    availableQuantity
                    version
                    id
                  }
                }
              }
            }
            attributesRaw {
              name
              value
            }
          }
          variants {
            id
          }
          allVariants {
            id
          }
          variant {
            id
          }
          slug
        }
      }
    }
  }
}

`;
};
