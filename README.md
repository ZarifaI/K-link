K-link 
## Overview
- **Easy to use** 🤘
- **Made with Expo** ⚡
- **TypeScript supported** 🌞
K-Link: My Connection App for Kalamazoo College

K-Link is a social networking app specifically designed and created for Kalamazoo College, where I am currently a student. The app serves as a digital hub for students to connect, collaborate, and build meaningful relationships within our college community. Understanding the challenges that students often face in finding study partners, making friends, and staying engaged on campus, K-Link was developed to bridge these gaps and foster a stronger, more connected student body.

Key Features:
Study Buddy Finder: K-Link’s core feature is the Study Buddy Finder, which allows students to match with peers who share similar academic interests, courses, or study habits. Whether you're preparing for finals or looking for a group project partner, K-Link makes it easy to find someone compatible to collaborate with.

Personalized Profiles: Every user has a personalized profile where they can showcase their interests, academic focus, and extracurricular activities. This helps others get to know you better and makes it easier to connect with like-minded peers.

Real-Time Messaging: Stay connected with your K-College friends through K-Link's real-time messaging feature. Whether you need to chat about a group project or just want to catch up with a classmate, the app keeps communication seamless and accessible.

## Screenshots
![k-link (3)](https://github.com/user-attachments/assets/ca5e2889-faa9-444c-838c-7b603e0b2f4d)

## Demo 

  https://github.com/user-attachments/assets/c1172d63-bb3a-42d5-bc46-7d7440269e92
## Installation and usage

Be sure, you have installed all dependencies and applications to run Expo project on your computer : [Getting Started with Expo](https://docs.expo.io/get-started/installation/).

This project works fine on iOS and Android.

### Running the project

Install packages :

```
yarn
```

When installation is complete, run it :

```
yarn start
```


## Props

### CardItem

| Name           | Type     | Required | Description                                               | Example                                             |
| -------------- | -------- | -------- | --------------------------------------------------------- | --------------------------------------------------- |
| `image`        | string   | Yes      | Picture of member.                                        | `image="https://..."`                               |
| `name`         | string   | Yes      | Name of member.                                           | `name="John Doe"`                                   |
| `description`  | string   | Yes      | Description of member.                                    | `description="Full-time Traveller. Globe Trotter."` |
| `matches`      | string   | Yes      | Match percentage.                                         | `matches="95"`                                      |
| `hasActions`   | boolean  | No       | Display actions buttons (Like, Dislike, ...).             | `actions`                                           |
| `isOnline`     | string   | No       | Display online or offline badge (`Online` and `Offline`). | `status="Online"`                                   |
| `hasVariant`   | boolean  | No       | Display another style of card (used for Matches screen).  | `variant`                                           |

### Message

| Name          | Type   | Required | Description             | Example                                                                                      |
| ------------- | ------ | -------- | ----------------------- | -------------------------------------------------------------------------------------------- |
| `image`       | string | Yes      | Picture of member.      | `image="https://..."`                                                                        |
| `name`        | string | Yes      | Name of member.         | `name="John Doe"`                                                                            |
| `lastMessage` | string | Yes      | Last message of member. | `lastMessage="You want order in Gotham. Batman must take off his mask and turn himself in."` |


### ProfileItem

| Name       | Type   | Required | Description                 | Example                                    |
| ---------- | ------ | -------- | --------------------------- | ------------------------------------------ |
| `name`     | string | Yes      | Name of member.             | `name="John Doe"`                          |
| `matches`  | string | Yes      | Match percentage.           | `matches="95"`                             |
| `age`      | string | No       | Age of member.              | `age="25"`                                 |
| `location` | string | No       | Location of member.         | `location="Paris, France"`                 |
| `info1`    | string | No       | More information of member. | `info1="Straight, Single"`                 |
| `info2`    | string | No       | More information of member. | `info2="Tea Totaller & Loves Photography"` |
| `info3`    | string | No       | More information of member. | `info3="Beaches, Mountain & Coffee"`       |
| `info4`    | string | No       | More information of member. | `info4="Last seen: 23h ago"`               |


## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
