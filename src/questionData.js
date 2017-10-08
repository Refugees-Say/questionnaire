const questionData = {
  individual: [
    {
      question_id: "1",
      question_type: "ranking",
      question_text: "Rank how important these factors are to you",
      question_image: null,
      prev_question_id: null,
      next_question_id: "2",
      options: [
        {
          option_id: "1_1",
          option_text: "Job opportunities",
          option_image: null
        },
        {
          option_id: "1_2",
          option_text: "Cost of living",
          option_image: null
        },
        {
          option_id: "1_3",
          option_text: "Quality of schools",
          option_image: null
        },
        {
          option_id: "1_4",
          option_text: "Level of crime",
          option_image: null
        }
      ]
    },
    {
      question_id: "2",
      question_type: "multi_answer",
      question_text: "Is it important for you to access any of these?",
      question_image: null,
      prev_question_id: "1",
      next_question_id: "3",
      options: [
        {
          option_id: "2_1",
          option_text: "English teaching",
          option_image: null
        },
        {
          option_id: "2_2",
          option_text: "Practical training",
          option_image: null
        },
        {
          option_id: "2_3",
          option_text: "University",
          option_image: null
        }
      ]
    },
    {
      question_id: "3",
      question_type: "multi_answer",
      question_text: "Is it important for you to live near any of these places of worship?",
      question_image: null,
      prev_question_id: "2",
      next_question_id: "4",
      options: [
        {
          option_id: "3_1",
          option_text: "Mosque",
          option_image: null
        },
        {
          option_id: "3_2",
          option_text: "Church",
          option_image: null
        },
        {
          option_id: "3_3",
          option_text: "Synagogue",
          option_image: null
        },
        {
          option_id: "3_4",
          option_text: "Hindu Temple",
          option_image: null
        },
        {
          option_id: "3_5",
          option_text: "Sikh Temple",
          option_image: null
        },
        {
          option_id: "3_6",
          option_text: "Buddhist Temple",
          option_image: null
        }
      ]
    },
    {
      question_id: "4",
      question_type: "multi_answer",
      question_text: "Which of these sectors would you be most likely to look for a job in?",
      question_image: null,
      prev_question_id: "3",
      next_question_id: "5",
      options: [
        {
          option_id: "4_1",
          option_text: "Administration",
          option_image: null
        },
        {
          option_id: "4_2",
          option_text: "Manufacturing",
          option_image: null
        },
        {
          option_id: "4_3",
          option_text: "Education",
          option_image: null
        },
        {
          option_id: "4_4",
          option_text: "Construction",
          option_image: null
        },
        {
          option_id: "4_5",
          option_text: "Retail",
          option_image: null
        },
        {
          option_id: "4_6",
          option_text: "Health and Social work",
          option_image: null
        },
        {
          option_id: "4_7",
          option_text: "Electricity, Gas and Water",
          option_image: null
        },
        {
          option_id: "4_8",
          option_text: "Hotel and Restaurant",
          option_image: null
        },
        {
          option_id: "4_9",
          option_text: "Agriculture",
          option_image: null
        },
        {
          option_id: "4_10",
          option_text: "Business",
          option_image: null
        },
      ]
    },
    {
      question_id: "5",
      question_type: "single_answer",
      question_text: "Would you prefer to live in the city or the countryside?",
      question_image: null,
      prev_question_id: "4",
      next_question_id: null,
      options: [
        {
          option_id: "5_1",
          option_text: "Rural",
          option_image: null
        },
        {
          option_id: "5_2",
          option_text: "Urban",
          option_image: null
        },
      ]
    },
  ],

  authority: [
    {
      question_id: "1",
      question_type: "multi_answer",
      question_text: "What type of home is available in Harju County?",
      question_image: null,
      prev_question_id: null,
      next_question_id: "2",
      options: [
        {
          option_id: "1_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "1_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "1_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "1_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "2",
      question_type: "multi_answer",
      question_text: "What type of home is available in Hiiu County?",
      question_image: null,
      prev_question_id: "1",
      next_question_id: "3",
      options: [
        {
          option_id: "2_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "2_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "2_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "2_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "3",
      question_type: "multi_answer",
      question_text: "What type of home is available in Ida-Viru County?",
      question_image: null,
      prev_question_id: "2",
      next_question_id: "4",
      options: [
        {
          option_id: "3_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "3_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "3_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "3_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "4",
      question_type: "multi_answer",
      question_text: "What type of home is available in Järva County?",
      question_image: null,
      prev_question_id: "3",
      next_question_id: "5",
      options: [
        {
          option_id: "4_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "4_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "4_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "4_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "5",
      question_type: "multi_answer",
      question_text: "What type of home is available in Jõgeva County?",
      question_image: null,
      prev_question_id: "4",
      next_question_id: "6",
      options: [
        {
          option_id: "5_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "5_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "5_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "5_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "6",
      question_type: "multi_answer",
      question_text: "What type of home is available in Lääne County?",
      question_image: null,
      prev_question_id: "5",
      next_question_id: "7",
      options: [
        {
          option_id: "6_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "6_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "6_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "6_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "7",
      question_type: "multi_answer",
      question_text: "What type of home is available in Lääne-Viru County?",
      question_image: null,
      prev_question_id: "6",
      next_question_id: "8",
      options: [
        {
          option_id: "7_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "7_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "7_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "7_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "8",
      question_type: "multi_answer",
      question_text: "What size of home is available in Pärnu County?",
      question_image: null,
      prev_question_id: "7",
      next_question_id: "9",
      options: [
        {
          option_id: "8_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "8_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "8_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "8_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "9",
      question_type: "multi_answer",
      question_text: "What type of home is available in Põlva County?",
      question_image: null,
      prev_question_id: "8",
      next_question_id: "10",
      options: [
        {
          option_id: "9_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "9_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "9_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "9_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "10",
      question_type: "multi_answer",
      question_text: "What type of home is available in Rapla County?",
      question_image: null,
      prev_question_id: "9",
      next_question_id: "11",
      options: [
        {
          option_id: "10_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "10_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "10_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "10_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "11",
      question_type: "multi_answer",
      question_text: "What type of home is available in Saare County?",
      question_image: null,
      prev_question_id: "10",
      next_question_id: "12",
      options: [
        {
          option_id: "11_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "11_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "11_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "11_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "12",
      question_type: "multi_answer",
      question_text: "What type of home is available in Tartu County?",
      question_image: null,
      prev_question_id: "11",
      next_question_id: "13",
      options: [
        {
          option_id: "12_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "12_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "12_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "12_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "13",
      question_type: "multi_answer",
      question_text: "What type of home is available in Valga County?",
      question_image: null,
      prev_question_id: "12",
      next_question_id: "14",
      options: [
        {
          option_id: "13_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "13_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "13_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "13_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "14",
      question_type: "multi_answer",
      question_text: "What type of home is available in Viljandi County?",
      question_image: null,
      prev_question_id: "13",
      next_question_id: "15",
      options: [
        {
          option_id: "14_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "14_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "14_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "14_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
    {
      question_id: "15",
      question_type: "multi_answer",
      question_text: "What type of home is available in Võru County?",
      question_image: null,
      prev_question_id: "14",
      next_question_id: null,
      options: [
        {
          option_id: "15_1",
          option_text: "One person",
          option_image: null
        },
        {
          option_id: "15_2",
          option_text: "Two people",
          option_image: null
        },
        {
          option_id: "15_3",
          option_text: "Three people",
          option_image: null
        },
        {
          option_id: "15_4",
          option_text: "Four or more people",
          option_image: null
        }
      ]
    },
  ]
}

export default questionData
