export const getOrders = (): string => {
  return `{
    
      orders(limit: 50, offset: 0) {
        offset
        count
        total
        exists
        results {
          customerId
          customer {
            customerNumber
            addresses {
              id
              streetName
              streetNumber
              additionalStreetInfo
              postalCode
              city
              region
              state
              custom {
                typeRef {
                  typeId
                  id
                }
                type {
                  key
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
                  createdAt
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
                }
                customFieldsRaw {
                  name
                  value
                  referencedResource {
                    id
                    __typename
                  }
                  referencedResourceSet {
                    id
                    __typename
                  }
                }
              }
              firstName
              salutation
              lastName
              email
              title
            }
            authenticationMode
            createdAt
            lastModifiedAt
          }
          customerEmail
          anonymousId
          lineItems {
            id
            key
            productId
            productKey
            name
            productSlug
            state {
              quantity
            }
          }
          customLineItems {
            id
            key
            name
            money {
              type
              currencyCode
              centAmount
              fractionDigits
              __typename
            }
            totalPrice {
              type
              currencyCode
              centAmount
              fractionDigits
              __typename
            }
            slug
          }
          totalPrice {
            type
            currencyCode
            centAmount
            fractionDigits
            __typename
          }
          taxedPrice {
            totalNet {
              type
              currencyCode
              centAmount
              fractionDigits
              __typename
            }
            totalGross {
              type
              currencyCode
              centAmount
              fractionDigits
              __typename
            }
            taxPortions {
              rate
              amount {
                type
                currencyCode
                centAmount
                fractionDigits
                __typename
              }
              name
            }
            totalTax {
              type
              currencyCode
              centAmount
              fractionDigits
            }
          }
          anonymousId
          businessUnit {
            key
            name
            contactEmail
            addresses {
              id
              streetName
              streetNumber
              additionalStreetInfo
              postalCode
              city
              region
              state
              country
              custom {
                typeRef {
                  typeId
                  id
                }
                type {
                  key
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
                      __typename
                    }
                  }
                  id
                  version
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
                  createdAt
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
                }
                customFieldsRaw {
                  name
                  value
                  referencedResource {
                    id
                    __typename
                  }
                  referencedResourceSet {
                    id
                    __typename
                  }
                }
              }
              city
              company
              department
              email
              externalId
              fax
              firstName
              id
              key
              lastName
              mobile
              pOBox
              phone
              region
              salutation
              title
              apartment
              additionalStreetInfo
              additionalAddressInfo
              building
            }
            defaultShippingAddressId
            defaultBillingAddressId
            shippingAddressIds
            id
            createdAt
          }
          cart {
            customerId
            customer {
              customerNumber
              email
              defaultShippingAddressId
              defaultBillingAddressId
              shippingAddressIds
              billingAddressIds
              isEmailVerified
              storesRef {
                typeId
                key
              }
              stores {
                id
                version
                version
                name
                languages
              }
              lastName
              lastModifiedAt
              email
              key
            }
            customerEmail
            anonymousId
            lineItems {
              id
              key
              productId
              productKey
              name
              productSlug
            }
            customLineItems {
              id
              name
              key
              money {
                type
                currencyCode
                centAmount
                fractionDigits
              }
              slug
              quantity
            }
            totalPrice {
              type
              currencyCode
              centAmount
              fractionDigits
            }
            taxedPrice {
              totalNet {
                type
                currencyCode
                centAmount
                fractionDigits
              }
              totalGross {
                type
                currencyCode
                centAmount
                fractionDigits
              }
              totalTax {
                type
                currencyCode
                centAmount
                fractionDigits
              }
            }
            createdAt
            id
            version
            createdAt
          }
          country
          customerId
        }
      } 
  }`;
};
