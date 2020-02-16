export const formData = [
  {
    label: 'Name Information',
    name: 'name_information',
    fields: [
      {
        name: 'first_name',
        label: 'First Name',
        type: 'text',
      },
      {
        name: 'middle_name',
        label: 'Middle Name',
        type: 'text',

      },
      {
        name: 'last_name',
        label: 'Last Name',
        type: 'text',
      },
      {
        label: 'Name Information Nested',
        name: 'name_information_nested',
        fields: [
          {
            name: 'first_name',
            label: 'First Name',
            type: 'text'
          },
          {
            name: 'middle_name',
            label: 'Middle Name',
            type: 'text'
          },
          {
            name: 'last_name',
            label: 'Last Name',
            type: 'text'
          },
          {
            label: 'Array Field',
            name: 'array_fields',
            fields: [
              {
                name: 'first_name_array',
                label: 'First Name',
                type: 'text'
              },
              {
                name: 'middle_name_array',
                label: 'Middle Name',
                type: 'text'
              },
              {
                label: 'Array Fields Nested',
                name: 'array_fields_nested',
                fields: [
                  {
                    name: 'first_name_array_array',
                    label: 'First Name Nested',
                    type: 'text'
                  },
                  {
                    name: 'middle_name_array_array',
                    label: 'Middle Name Nested',
                    type: 'text'
                  },
                  {
                    label: 'Array Fields Triple Nested',
                    name: 'array_fields_triple_nested',
                    // isArray: true,
                    fields: [
                      {
                        name: 'first_name_array_array_array',
                        label: 'First Name Nested Nested',
                        type: 'text'
                      },
                      {
                        name: 'middle_name_array_array_array',
                        label: 'Middle Name Nested Nested',
                        type: 'text'
                      },
                      {
                        label: 'Switch',
                        name: 'i_may_die',
                        fields: [
                          {
                            name: 'on_off',
                            label: ['On', 'Off'],
                            // defaultValue: true,
                            type: 'switch',
                          },
                          {
                            name: 'off_on',
                            label: ['Yes', 'No'],
                            type: 'switch',
                          },
                        ],
                      },
                    ]
                  },
                ]
              },
/*              {
                label: 'Transformer Nested',
                name: 'transformer_nested',
                type: 'button',
              },*/
            ]
          },
        ]
      },
/*      {
        label: 'Transformer Nested',
        name: 'transformer_nested',
        type: 'button',
      },*/
    ],
  },
  /*{
    label: 'Transformer',
    name: 'transformer',
    type: 'button',
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
  },
  {
    label: 'Option Lists',
    fields: [
      {
        name: 'checkbox_list_vertical',
        label: 'Vertical Checkbox List',
        type: 'checkbox',
        options: [
          {
            label: 'Option 1',
            value: 'option_1'
          },
          {
            label: 'Option 2',
            value: 'option_2'
          },
          {
            label: 'Option 3',
            value: 'option_3'
          },
          {
            label: 'Option 4',
            value: 'option_4'
          },
        ],
      },
    ],
  },
  {
    label: 'Switch',
    name: 'hello_world',
    fields: [
      {
        name: 'on_off',
        label: ['On', 'Off'],
        type: 'switch',
      },
      {
        name: 'off_on',
        label: ['Yes', 'No'],
        type: 'switch',
      },
    ],
  },
  {
    name: 'select_list',
    label: 'Select list',
    type: 'select',
    options: [
      {
        label: 'Option 1',
        value: 'option_1'
      },
      {
        label: 'Option 2',
        value: 'option_2'
      },
      {
        label: 'Option 3',
        value: 'option_3'
      },
      {
        label: 'Option 4',
        value: 'option_4'
      },
    ],
  },
  {
    name: 'radio_list_horizontal',
    label: 'Horzontal Radio List',
    type: 'radio',
    options: [
      {
        label: 'Option 1',
        value: 'option_1'
      },
      {
        label: 'Option 2',
        value: 'option_2'
      },
      {
        label: 'Option 3',
        value: 'option_3'
      },
      {
        label: 'Option 4',
        value: 'option_4'
      },
    ],
  },*/
];
