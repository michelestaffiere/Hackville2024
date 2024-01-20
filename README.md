<<<<<<< HEAD
# PR Planner

## Problem

Powerlifters are currently reliant on coaches to develop training schedules to prepare for a powerlifting meet. They also have little to no methods of tracking their training progress outside of traditional pen and paper or excel spreadsheet methods.

## Value Proposition

We’re building an app to guide beginner powerlifters in training for their powerlifting meets by building a training schedule that guides them towards following best powerlifting practices and techniques. These techniques include volume management and injury prevention.

## Competition

- Pen and Paper
- Microsoft Excel

## Solution

## Technology Stack

It’s a simple website written in HTML/CSS/JS with some Framework (probably React), intended to be used on a desktop

## App Flow

The user will go through the app via the following steps

### Step One: Data Collection for Calculations

Collecting the user’s XRM (X Rep Max) for the main lifts (Squat, Deadlift, Bench). These numbers will be used to calculate their 1RM (One Rep Max), which will be used to calculate their intensity

### Step Two: High Level Schedule Building

The users will make a schedule that has the following format:

1. Deload (Optional)
2. Taper

The users will first be asked if they want a Deload (It is recommended that they deload.

The users will then be asked how long they want to deload for:

- One week (Recommended if they are healthy or want to do a minimum deload)
- Two weeks (Recommended if they are extremely fatigued)
- Three weeks (Recommended if they are injured or want a safe deload)

The users will then be asked how long they want to taper for:

- One week (Recommended only if deloading for 1 week)
- Two weeks (Recommended only if deloading for 1-2 weeks)
- Three weeks (Recommended for any deload duration)

The users will then be asked how many times they want to workout (value will)

The users will then be asked how many times they want to do each lift

- Bench
- Squat
- Deadlift

The users will then be asked if they want tailored

### Step Three: Low Level Schedule Building

The users will be given a 6 days a week workout schedule

- Each day will focus on a main lift with hand picked accessory workouts
- Each day has a recommended max volume that the user should not exceed
- During each workout, the user can report sore spots that the app will suggest and automatically apply fixes for
  - “Unstable Un-Rack” will cause _
  - “Dropping the Bar Too Fast” will cause _
  - “Press Before Command” will cause the Bench Presses to be replaced with 3 Second Pause Bench Presses

Deloads will have intensity stay at 70% (of the user’s 1RM)

Tapers will have intensity drop from 70% to 40%

When a user finishes a schedule

- A user will mark a week as finished and also grade the expected difficulty of each lift vs the actual difficulty of each lift
- System will take the week, once the current week is submitted, will generate the next week
  - next week can include modifications based on differences between the expected and actual difficulty of each lift

## Team

- [Michele Staffiere](https://michelestaffiere.dev/)
- [Nicholas Chiong](https://joshuaconcon.ca/)
- [Joshua Concon](https://github.com/nchcs/)

## Future Work

- Making the website more mobile friendly, creating a mobile app version so that the product can be more easily accessed
- Adding more customization to the workout building so that it can fit the needs of intermediate lifters as well
- Embedding more recommendations into the app so that User’s can learn more about the theoretical part of training and exercise science
- Coach Usage for Programming Schedules for Clients
- Add more side utility applications
  - Weight Conversion KG ↔ LBS
  - Plate Loader Calculation
  - Lifting Calculators
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 26f71f0 (firstt)
