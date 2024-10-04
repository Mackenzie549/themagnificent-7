

### `npm start`


Thoughts

I didn't go into detail for the different types. Ideally I'd have a condensed verison of Player/Team/Element Type.
This would allow for easier validation on the FE.
I did create these types, but to save on filtering and sorting I left it out of this MVP

This is similar to how I filtered by position. The code assumes this is always going to be a GK/DEF/MID/FOR setup
This currently is hardcoded although available from the API call in the element type property. This could be more dynamic by generating the positions from here

This MVP doesn't account for players tying on the same level of magnificence. Currently it sorts and just takes the top value

