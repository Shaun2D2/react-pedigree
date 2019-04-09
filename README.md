# react-pedigree
React component for displaying a pedigree.

### Installation
Install via NPM `npm i @jolobo/react-pedigree`.

### Example Usage

```jsx
import React from 'react'
import Pedigree from '@jolobo/react-pedigree'

const Example = () => {
    const family = [
        [
            {
                name: 'James Smith',
                dob: '10-01-2019'
            }
        ],
        [
            {
                name: 'Jerry Smith',
                dob: '10-01-2019'
            },
            {
                name: 'Jane Smith',
                dob: '10-01-2019'
            }
        ]
    ]

    return (
        <Pedigree data={family} />
    )
}
```