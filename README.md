# The Magnificent 7

A React web project displaying top-performing football players in a "Magnificent 7" style formation. The app categorises players by their position and ranks them by their goals and assists combined to show the best performers for each position.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If you don't have them installed, you can download them [here](https://nodejs.org/).

### Installation

1. Clone the repository from GitHub:
   https://github.com/Mackenzie549/themagnificent-7

   All work has been committed to the `master` branch

3. Navigate to the project directory:
   `cd themagnificent7`

4. Install the required dependencies:
   `npm install`

### Running the Project

To start the project locally:

`npm start`

Open http://localhost:3000 to view it in the browser.

## Future Improvements and Considerations

### TypeScript Typing
- Current Approach: I didn't go into detail for the different TypeScript typings. Ideally, I'd have a condensed version of the Player, Team, and ElementType to allow for easier validation on the frontend.
- I created these types, but for this I left them out for this MVP.

### Dynamic Position Filtering
- Current Approach: The code assumes a fixed setup of GK, DEF, MID, and FOR based on hardcoded logic and the project requirements.
- Improvement: This setup could be made dynamic by fetching the positions from the API's element_type property, allowing for more flexible filtering of player positions.

### Magnificence Tiebreaking
- Current Approach: The MVP does not handle cases where players tie for the same level of magnificence. It simply sorts by score and picks the top value.
- Improvement: Implement a tiebreaking logic to account for players with identical magnificence scores.

### Backend Processing
- Current Approach: The frontend is responsible for fetching and processing player data, including sorting by magnificence score and filtering the top players.
- Improvement: Offload some of the heavy lifting to the backend (e.g., sorting by magnificence score). This would allow the frontend to focus on limiting the selection of players, resulting in faster loading and reduced processing time.

### No tests
- Current Approach: In this MVP there are no unit or integration tests. For the sake of time, I wanted to display the logic and styling in this MVP
- Improvement: This is obviously an important aspect to implement if more time was put towards this
