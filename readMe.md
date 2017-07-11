# Shangri-La
Web based front-end for the platform. Understands the preferences of refugees through a questionnaire and recommends resettlement locations based on these preferences.

## Stack and design principles
- React
- ES6 (with eslint)
- Webpack
- Responsive and coded mobile first
- Multilingual with support for LTR & RTL languages
- Accessible

## API Spec
This is a spec of the parts of the API needed by this front-end.

#### User API
To be spec'd

#### Questions API
`user_id` --> Returns array of question objects

```javascript
[
  {
    id: "UniqQuesID",
    type: "multi_answer" / "single_answer",
    question_text: "Which of these do you prefer?",
    question_image: "/img/question_image_url.png",
    options: [
      {
        id: "UniqOptID",
        option_text: "Countryside",
        option_image: "/img/option_image_url.png"
      },
      ...
    ]
  },
  ...
]
```

#### Answers API
To be spec'd

#### Recommendations API
To be spec'd

## License
Open source, need to choose a license!
