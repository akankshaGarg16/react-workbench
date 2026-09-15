# Requirements

This component simulates a real-world traffic light that cycles through red, yellow, and green automatically. Follow the detailed instructions below:

# Initial Light State

- When the component loads, the red light must be active.
- This is the default starting state.

# Automatic Light Transition (Cycle Logic)

- The traffic light must change colors automatically in this sequence:
Red -> Yellow after 3 seconds
Yellow -> Green after 1 second
Green -> Red after 2 seconds
- This cycle must continue indefinitely in a loop.
- Use a timer (e.g. setTimeout) to manage the delays between transitions.

# Only One Light Active at a Time

- At any moment, only one light should appear as active (glowing).
- No two lights should be active together.