# Deepfield Frontend Engineer Code Test

Thank you for your intrest in applying to the Frontend Engineering team at Nokia Deepfield! We ask that you please keep your copy of this repository and your submission private.

## Apartment Finder Challenge

For this challenge you will be creating an apartment finder app that consumes a custom api and returns a grid listing of apartment listings in Ann Arbor, MI. This is a test of basic front end proficiency including HTTP requests, CSS layouts, and JavaScript knowledge.

### Instructions
- Clone this repository and complete the challenge according to the [Specifications](#specifications) below
- Once finished, open a pull request with your changes and notify us via email that your code has been submitted

### Prerequisites
- [Node.js](https://nodejs.org/en/) v8.0+
- [Yarn](https://yarnpkg.com/en/docs/install) v1.3+ or npm v5.0+

### Notes
- While not necessary, you may use React or another library/framework to complete this project.
- You are encouraged to use ES6+ JavaScript. Babel is included in this project, and can be used with `yarn watch`.
- You may use jQuery or other dependencies, but please include an explanation of new dependencies in your PR.
- You do not need to edit any files in the `/server` folder, but it's not off limits.
- While results should be presented logically and cleanly, we will not be evaluating your design skills or asthetic choices.

### Environment
- `yarn install`
    - Installs the dependencies.  This must be done once before running build, watch, or start
- `yarn build`
    - Builds and bundles the contents of the `/public` folder into the `/dist` folder
- `yarn watch`
    - Runs build and watches for changes to automatically trigger builds (e.g. during active development)
- `yarn start`
    - Runs build and starts the development server. This will serve the contents of the `/dist` directory on http://localhost:3000 and allow you to access api routes at http://localhost:3000/api/{path} and images at http://localhost:3000/img/{path}.

### Specifications
- Read the [API Documentation](#api-documentation) section to learn about the apartment listing API
- Build a UI that allows users to filter the available apartments. There should be options for:
    - Maximum Price
    - Number of Bedrooms
    - Number of Bathrooms
- The matching apartments should be rendered in the results area. You must include these fields (if available for the record):
    - Building Image
    - Building Name
    - Building Address
    - Number of Bedrooms
    - Number of Bathrooms
    - Price
- The results should be rendered in a grid format and be visually appealing, styled logically, and fully responsive for mobile devices

### API Documentation
#### GET `/api/listings`
> returns an array of apartment listings

##### Parameters
| Parameter | Default | Description |
|-|-|-|
| `limit` | 10 | The number of results returned  |
| `offset` | 0 | The number of results to offset |
| `bedrooms` | | Number of bedrooms |
| `bathrooms` | | Minimum number of bathrooms |
| `price` | | Maximum price  |

##### Response
| Property | Type | Required |
|-|-|-|
| `bedrooms` | `Number` | required |
| `price` | `Number` | required |
| `bathrooms` | `Number` | required |
| `address` | `String` | required |
| `city` | `String` | required |
| `state` | `String` | required |
| `building_name` | `String` | optional |
| `image_id` | `Number` | optional |

**Example**  
GET `/api/listings?bedrooms=1&price=2000&limit=1`
```json
[
    {
        "bedrooms": 1,
        "price": 1600,
        "bathrooms": 1,
        "address": "545 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "High Street Apartments",
        "image_id": 146534455
    }
]
```
