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
        label: 'Description',
        name: 'description',
        type: 'textarea',
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
            value: 'thanksgiving'
          },
        ],
      },
      {
        label: ''
      },
    ],
  },

  // {
  //   name: 'select_list',
  //   label: 'Select list',
  //   type: 'select',
  //   options: [
  //     {
  //       label: 'Option 1',
  //       value: 'option_1'
  //     },
  //     {
  //       label: 'Option 2',
  //       value: 'option_2'
  //     },
  //     {
  //       label: 'Option 3',
  //       value: 'option_3'
  //     },
  //     {
  //       label: 'Option 4',
  //       value: 'option_4'
  //     },
  //   ],
  // },
  // {
  //   name: 'radio_list_horizontal',
  //   label: 'Horzontal Radio List',
  //   type: 'radio',
  //   options: [
  //     {
  //       label: 'Option 1',
  //       value: 'option_1'
  //     },
  //     {
  //       label: 'Option 2',
  //       value: 'option_2'
  //     },
  //     {
  //       label: 'Option 3',
  //       value: 'option_3'
  //     },
  //     {
  //       label: 'Option 4',
  //       value: 'option_4'
  //     },
  //   ],
  // },
  // {
  //   label: 'Switch',
  //   name: 'hello_world',
  //   fields: [
  //     {
  //       label: 'Hello',
  //       name: 'on_off',
  //       type: 'switch',
  //     },
  //     {
  //       label: 'Bye',
  //       name: 'off_on',
  //       type: 'switch',
  //     },
  //   ],
  // },
  // {
  //   label: 'Option Lists',
  //   fields: [
  //     {
  //       name: 'checkbox_list_vertical',
  //       label: 'Vertical Checkbox List',
  //       type: 'checkbox',
  //       options: [
  //         {
  //           label: 'Option 1',
  //           value: 'option_1'
  //         },
  //         {
  //           label: 'Option 2',
  //           value: 'option_2'
  //         },
  //         {
  //           label: 'Option 3',
  //           value: 'option_3'
  //         },
  //         {
  //           label: 'Option 4',
  //           value: 'option_4'
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'Name Information',
  //   name: 'name_information',
  //   fields: [
  //     {
  //       name: 'first_name',
  //       label: 'First Name',
  //       type: 'textfield',
  //     },
  //     {
  //       name: 'middle_name',
  //       label: 'Middle Name',
  //       type: 'textfield',
  //
  //     },
  //     {
  //       name: 'last_name',
  //       label: 'Last Name',
  //       type: 'textarea',
  //     },
  //     {
  //       label: 'Name Information Nested',
  //       name: 'name_information_nested',
  //       fields: [
  //         {
  //           name: 'first_name',
  //           label: 'First Name',
  //           type: 'textfield'
  //         },
  //         {
  //           name: 'middle_name',
  //           label: 'Middle Name',
  //           type: 'textfield'
  //         },
  //         {
  //           name: 'last_name',
  //           label: 'Last Name',
  //           type: 'textfield'
  //         },
  //         {
  //           label: 'Array Field',
  //           name: 'array_fields',
  //           fields: [
  //             {
  //               name: 'first_name_array',
  //               label: 'First Name',
  //               type: 'textfield'
  //             },
  //             {
  //               name: 'middle_name_array',
  //               label: 'Middle Name',
  //               type: 'textfield'
  //             },
  //             {
  //               label: 'Array Fields Nested',
  //               name: 'array_fields_nested',
  //               fields: [
  //                 {
  //                   name: 'first_name_array_array',
  //                   label: 'First Name Nested',
  //                   type: 'textfield'
  //                 },
  //                 {
  //                   name: 'middle_name_array_array',
  //                   label: 'Middle Name Nested',
  //                   type: 'textfield'
  //                 },
  //                 {
  //                   label: 'Array Fields Triple Nested',
  //                   name: 'array_fields_triple_nested',
  //                   // isArray: true,
  //                   fields: [
  //                     {
  //                       name: 'first_name_array_array_array',
  //                       label: 'First Name Nested Nested',
  //                       type: 'textfield'
  //                     },
  //                     {
  //                       name: 'middle_name_array_array_array',
  //                       label: 'Middle Name Nested Nested',
  //                       type: 'textfield'
  //                     },
  //                     {
  //                       label: 'Switch',
  //                       name: 'i_may_die',
  //                       fields: [
  //                         {
  //                           name: 'on_off',
  //                           label: 'On',
  //                           // defaultValue: true,
  //                           type: 'switch',
  //                         },
  //                         {
  //                           name: 'off_on',
  //                           label: 'Yes',
  //                           type: 'switch',
  //                         },
  //                       ],
  //                     },
  //                   ]
  //                 },
  //               ]
  //             },
  //           ]
  //         },
  //       ]
  //     },
/*      {
        label: 'Transformer Nested',
        name: 'transformer_nested',
        type: 'button',
      },*/
      /*              {
                      label: 'Transformer Nested',
                      name: 'transformer_nested',
                      type: 'button',
                    },*/
    // ],
  // },
  /*{
    label: 'Transformer',
    name: 'transformer',
    type: 'button',
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
  },*/
];
