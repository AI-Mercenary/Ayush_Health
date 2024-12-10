export const inputFormElements = [
    
    {
        name: "orgType",
        label: "Organization Type",
        variant: "outlined",
        fullWidth: true,
        required: true,
        type: "dropdown", // Dropdown
        options: [
          { label: "California", value: "CA" },
          { label: "New York", value: "NY" },
          { label: "Texas", value: "TX" },
        ],
        xs: 12,
        sm: 6,
        md:4,
        lg:3
      },
      {
        name: "sorgType",
        label: "Sub Organization Type",       
        variant: "outlined",
        fullWidth: true,
        required: true,
        type: "dropdown", // Dropdown
        options: [
          { label: "California", value: "CA" },
          { label: "New York", value: "NY" },
          { label: "Texas", value: "TX" },
        ],
        xs: 12,
        sm: 6,
        md:4,
        lg:3
      },
    {
      name: "firstName",
      placeholder: "Enter first name",
      label: "First Name",
      variant: "outlined",
      fullWidth: true,
      required: true,
      type: "text", // Text field
      xs: 12,
      sm: 6,
      md:4,
      lg:3
    },
    {
      name: "lastName",
      placeholder: "Enter last name",
      label: "Last Name",
      variant: "outlined",
      fullWidth: true,
      required: true,
      type: "text", // Text field
      xs: 12,
      sm: 6,
      md:4,
      lg:3
    },
    {
        name: "sorgType",
        label: "Sub Organization Type",       
        variant: "outlined",
        fullWidth: true,
        required: true,
        type: "dropdown", // Dropdown
        options: [
          { label: "California", value: "CA" },
          { label: "New York", value: "NY" },
          { label: "Texas", value: "TX" },
        ],
        xs: 12,
        sm: 6,
        md:4,
        lg:3
      },
    {
      name: "gender",
      label: "Gender",
      type: "radio", // Radio buttons
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
      xs: 12,
        sm: 6,
        md:4,
        lg:3
    },
   
    {
      name: "terms",
      label: "I agree to the terms and conditions",
      type: "checkbox", // Checkbox
      xs: 12,
      sm: 12,
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date", // Date picker
      variant: "outlined",
      fullWidth: true,
      required: true,
      xs: 12,
      sm: 6,
    },
  ];
  