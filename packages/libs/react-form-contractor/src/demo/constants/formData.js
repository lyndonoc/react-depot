export const formData = [
  {
    label: 'New Recipe Information',
    name: 'new_recipe_information',
    fields: [
      {
        label: 'Name',
        name: 'name',
        fields: [
          {
            label: 'In English',
            name: 'english',
            type: 'textfield',
          },
          {
            label: 'In Korean',
            name: 'korean',
            type: 'textfield',
          },
        ],
      },
      {
        label: 'Details',
        name: 'details',
        fields: [
          {
            label: 'Description',
            name: 'description',
            type: 'textarea',
          },
          {
            label: 'Number of guests',
            name: 'number_of_guests',
            type: 'number',
          },
          {
            label: 'Ingredients',
            name: 'ingredients',
            type: 'checkbox',
            options: [
              {
                label: 'Onions',
                value: 'onions',
              },
              {
                label: 'Peppers',
                value: 'peppers',
              },
              {
                label: 'Potatoes',
                value: 'potatoes',
              },
              {
                label: 'Carrots',
                value: 'carrots',
              },
            ],
          },
          {
            label: 'Occasion',
            name: 'occasion',
            type: 'radio',
            options: [
              {
                label: 'Valentine\'s day',
                value: 'valentine',
              },
              {
                label: 'Christmas',
                value: 'christmas',
              },
              {
                label: 'Thanksgiving Day',
                value: 'thanksgiving',
              },
            ],
          },
          {
            label: 'Time Estimates',
            name: 'estimates',
            type: 'select',
            options: [
              {
                label: '30 Minutes',
                value: '30_minutes',
              },
              {
                label: '1 Hour',
                value: '1_hour',
              },
              {
                label: '6 Hour',
                value: '6_hour',
              },
            ],
          },
          {
            label: 'Time',
            name: 'time',
            fields: [
              {
                label: 'Lunch',
                name: 'lunch',
                type: 'switch',
              },
              {
                label: 'Dinner',
                name: 'dinner',
                type: 'switch',
              },
            ],
          },
        ],
      },
      {
        label: 'Submit',
        type: 'submit'
      },
    ],
  },
];
