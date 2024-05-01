# Dog Game

This is a simple game where you can play with a dog. You can feed it, play with it, and take it for a walk. The dog will get hungry and tired over time, so make sure to take care of it!

## Implementation considerations

- This game is using `React`
- For state management, I used `useReducer` and `useEffect` hooks to manage the dog's state and `keydown` events on the window to handle user input.
- The game is responsive and can be played on both desktop and mobile devices using `grid` and `flexbox` for layout.
- To handle the dog's state update I have use `useReducer` hook from `react` which is a more powerful alternative to `useState` hook. The state can be found in `gameState.ts` and `gameReducer.ts` files.
- The game components were splitted in:
  - `DogGame` - the main component that contains the game logic
  - `Grid` - a component that renders the grid layout
  - `Score` - a component that renders the score
- To make the game more interactive I have added a couple of sound effects that can be found in the `sounds` folder, and a simple transition with every movement.
- To make the logic more readable I have used `TypeScript` for type checking and `ESLint` for code linting.

## Demo

You can play the game [here](https://www.codesandtags.io/frontend-projects/dog-game/demo/).
