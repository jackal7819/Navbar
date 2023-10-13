# Navbar React Application

A simple React application for a navigation bar with responsive links and a toggle button.

## Overview

This React application demonstrates how to create a responsive navigation bar with a toggle button to show or hide links. It utilizes React state to control the visibility of links and uses CSS to style the navigation bar. The application also demonstrates dynamic styling to calculate the exact height of the links based on content.

## Project Link

You can access the project via the following link: [Navbar React Application](#)

## Technologies Used

- React
- CSS
- JavaScript
- HTML

## Initial Approach

In the initial approach, the Navbar component has a state variable called `showLinks`, which controls the visibility of the links. It imports links from the provided data and renders them conditionally based on the `showLinks` value. A button is used to toggle the value of `showLinks`, thereby toggling the links. Basic CSS styles for the Navbar are provided.

## Fixed Approach

In the fixed approach, links are hidden by default using CSS. A class is created that displays links with a fixed height. The JSX in the Navbar component is refactored to toggle the class, which in turn toggles the Navbar. This provides a more consistent user experience.

## Dynamic Approach

The dynamic approach uses `useRef` and the `getBoundingClientRect()` function to calculate the exact height of the links. This approach ensures that the Navbar adjusts its height based on the content dynamically.

## Complete App

In the complete app, social links and additional CSS styles are added to render the Navbar effectively on larger screens. It enhances the user experience on larger devices.

## Application Flow

The flow of the application is as follows:

1. Check the data.js file to find two arrays: one for links and one for social icons.

2. Set up a Navbar component with a `showLinks` state value (boolean). Import the links from data and render them conditionally in the Navbar based on the `showLinks` state value. Set up a button that toggles the value and as a result, toggles the links. Apply basic CSS styles for the Navbar.

3. By default, links are hidden in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

4. Utilize `useRef` and `getBoundingClientRect()` function to calculate the exact height of links dynamically.

5. Add social links and additional CSS styles to render the Navbar effectively on larger screens.

## Usage

- To toggle the links, click on the toggle button (hamburger icon).
- Explore the navigation links and social icons.
- The Navbar is responsive and works on various screen sizes.
