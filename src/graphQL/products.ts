export const getproducts = (): string => {
  return `{
    products {
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
              labelAllLocales {
                locale
                value
              }
              inputTipAllLocales {
                locale
                value
              }
            }
          }
        }
        masterData {
          current {
            name
            description
            nameAllLocales {
              locale
              value
            }
            descriptionAllLocales {
              value
              locale
            }
            slugAllLocales {
              locale
              value
            }
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
              descriptionAllLocales {
                locale
                value
              }
              slug
              slugAllLocales {
                locale
                value
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
                clientId
                customerRef {
                  typeId
                  id
                }
                userRef {
                  typeId
                  id
                }
                associateRef {
                  typeId
                  id
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
                clientId
                customerRef {
                  typeId
                  id
                }
                userRef {
                  typeId
                  id
                }
                associateRef {
                  typeId
                  id
                }
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
                  nameAllLocales {
                    locale
                    value
                  }
                  descriptionAllLocales {
                    locale
                    value
                  }
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
                nameAllLocales {
                  locale
                  value
                }
                description
                descriptionAllLocales {
                  locale
                  value
                }
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
                    nameAllLocales {
                      locale
                      value
                    }
                    descriptionAllLocales {
                      locale
                      value
                    }
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
              metaTitleAllLocales {
                locale
                value
              }
              metaKeywords
              metaKeywordsAllLocales {
                locale
                value
              }
              metaDescription
              metaDescriptionAllLocales {
                locale
                value
              }
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
            metaTitleAllLocales {
              locale
              value
            }
            metaKeywords
            metaKeywordsAllLocales {
              locale
              value
            }
            metaDescription
            metaDescriptionAllLocales {
              locale
              value
            }
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
                  nameAllLocales {
                    locale
                    value
                  }
                  description
                  descriptionAllLocales {
                    locale
                    value
                  }
                  address {
                    id
                    streetName
                    streetNumber
                    additionalStreetInfo
                    postalCode
                    city
                    region
                    state
                    custom {
                      type {
                        key
                        name
                        description
                      }
                      typeRef {
                        typeId
                        id
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
                    country
                    company
                  }
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
  }`;
};
