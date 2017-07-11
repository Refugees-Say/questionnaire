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
`user_id` --> Return current status

```javascript
{
  status: "not-started" / "in-progress" / "complete",
  next_question_id: "UniqQuesID",
  questions_completed: 7,
  questions_remaining: 3,
}
```

#### Questions API
`user_id` --> Returns array of question objects

```javascript
[
  {
    question_id: "UniqQuesID",
    question_type: "multi_answer" / "single_answer",
    question_text: "Which of these do you prefer?",
    question_image: "/img/question_image_url.png",
    options: [
      {
        option_id: "UniqOptID",
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
`user_id`, `question_id`, `option_id` --> Return current status

```javascript
{
  status: "not-started" / "in-progress" / "complete",
  next_question_id: "UniqQuesID",
  questions_completed: 7,
  questions_remaining: 3,
}
```

#### Recommendations API
To be spec'd

## License
Open source, need to choose a license!
